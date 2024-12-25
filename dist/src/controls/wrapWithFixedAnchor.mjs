import { objectSpread2 as _objectSpread2 } from '../../_virtual/_rollupPluginBabelHelpers.mjs';

/**
 * Wrap an action handler with saving/restoring object position on the transform.
 * this is the code that permits to objects to keep their position while transforming.
 * @param {Function} actionHandler the function to wrap
 * @return {Function} a function with an action handler signature
 */
function wrapWithFixedAnchor(actionHandler) {
  return (eventData, transform, x, y) => {
    const target = transform.target;
    const curTransform = _objectSpread2({}, transform);
    if (isCtrlAction(eventData)) {
      target.set('centeredScaling', true);
      curTransform.originX = 'center';
      curTransform.originY = 'center';
    }
    const originX = curTransform.originX;
    const originY = curTransform.originY;
    const centerPoint = target.getRelativeCenterPoint();
    const constraint = target.translateToOriginPoint(centerPoint, originX, originY);
    const actionPerformed = actionHandler(eventData, transform, x, y);
    // flipping requires to change the transform origin, so we read from the mutated transform
    // instead of leveraging the one destructured before
    target.setPositionByOrigin(constraint, transform.originX, transform.originY);
    target.centeredScaling = false;
    return actionPerformed;
  };
}
function isCtrlAction(eventData) {
  return eventData.ctrlKey;
}

export { wrapWithFixedAnchor };
//# sourceMappingURL=wrapWithFixedAnchor.mjs.map
