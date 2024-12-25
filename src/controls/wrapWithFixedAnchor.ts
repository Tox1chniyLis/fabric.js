import type {
  Transform,
  TransformActionHandler,
  TPointerEvent,
} from '../EventTypeDefs';

/**
 * Wrap an action handler with saving/restoring object position on the transform.
 * this is the code that permits to objects to keep their position while transforming.
 * @param {Function} actionHandler the function to wrap
 * @return {Function} a function with an action handler signature
 */
export function wrapWithFixedAnchor<T extends Transform>(
  actionHandler: TransformActionHandler<T>,
) {
  return ((eventData, transform, x, y) => {
    const target = transform.target;

    const curTransform = {
      ...transform,
    };

    if (isCtrlAction(eventData)) {
      target.set('centeredScaling', true);
      curTransform.originX = 'center';
      curTransform.originY = 'center';
    }

    const originX = curTransform.originX;
    const originY = curTransform.originY;

    const centerPoint = target.getRelativeCenterPoint();
    const constraint = target.translateToOriginPoint(
      centerPoint,
      originX,
      originY,
    );
    const actionPerformed = actionHandler(eventData, curTransform, x, y);
    // flipping requires to change the transform origin, so we read from the mutated transform
    // instead of leveraging the one destructured before
    target.setPositionByOrigin(
      constraint,
      curTransform.originX,
      curTransform.originY,
    );

    target.centeredScaling = false;

    return actionPerformed;
  }) as TransformActionHandler<T>;
}

function isCtrlAction(eventData: TPointerEvent): boolean {
  return eventData.ctrlKey;
}
