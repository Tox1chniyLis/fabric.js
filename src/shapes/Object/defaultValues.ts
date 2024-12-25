import {
  TOP,
  LEFT,
  SCALE_Y,
  SCALE_X,
  SKEW_X,
  SKEW_Y,
  FILL,
  STROKE,
} from '../../constants';
import type { TClassProperties } from '../../typedefs';
import type { InteractiveFabricObject } from './InteractiveObject';
import type { FabricObject } from './Object';

export const stateProperties = [
  TOP,
  LEFT,
  SCALE_X,
  SCALE_Y,
  'flipX',
  'flipY',
  'originX',
  'originY',
  'angle',
  'opacity',
  'globalCompositeOperation',
  'shadow',
  'visible',
  SKEW_X,
  SKEW_Y,
];

export const cacheProperties = [
  FILL,
  STROKE,
  'strokeWidth',
  'strokeDashArray',
  'width',
  'height',
  'paintFirst',
  'strokeUniform',
  'strokeLineCap',
  'strokeDashOffset',
  'strokeLineJoin',
  'strokeMiterLimit',
  'backgroundColor',
  'clipPath',
];

export const fabricObjectDefaultValues: Partial<
  TClassProperties<FabricObject>
> = {
  // see composeMatrix() to see order of transforms. First defaults listed based on this
  top: 0,
  left: 0,
  width: 0,
  height: 0,
  angle: 0,
  flipX: false,
  flipY: false,
  scaleX: 1,
  scaleY: 1,
  minScaleLimit: 0,
  skewX: 0,
  skewY: 0,
  originX: LEFT,
  originY: TOP,
  strokeWidth: 1,
  strokeUniform: false,
  padding: 0,
  opacity: 1,
  paintFirst: FILL,
  fill: 'rgb(0,0,0)',
  fillRule: 'nonzero',
  stroke: null,
  strokeDashArray: null,
  strokeDashOffset: 0,
  strokeLineCap: 'butt',
  strokeLineJoin: 'miter',
  strokeMiterLimit: 4,
  globalCompositeOperation: 'source-over',
  backgroundColor: '',
  shadow: null,
  visible: true,
  includeDefaultValues: true,
  excludeFromExport: false,
  objectCaching: true,
  clipPath: undefined,
  inverted: false,
  absolutePositioned: false,
  centeredRotation: true,
  centeredScaling: false,
  dirty: true,
} as const;

export const interactiveObjectDefaultValues: Partial<
  TClassProperties<InteractiveFabricObject>
> = {
  noScaleCache: true,
  lockMovementX: false,
  lockMovementY: false,
  lockRotation: false,
  lockScalingX: false,
  lockScalingY: false,
  lockSkewingX: false,
  lockSkewingY: false,
  lockScalingFlip: false,
  cornerSize: 13,
  touchCornerSize: 24,
  transparentCorners: true,
  cornerColor: '#7165FF',
  cornerStyle: 'multiPoint',
  cornerStrokeColor: '#ffffff',
  cornerSecondColor: '#7165FF',
  cornerDashArray: null,
  hasControls: true,
  borderColor: '#7165FF',
  borderDashArray: null,
  borderOpacityWhenMoving: 0.4,
  borderScaleFactor: 1,
  hasBorders: true,
  selectionBackgroundColor: '',
  selectable: true,
  evented: true,
  perPixelTargetFind: false,
  activeOn: 'down',
  hoverCursor: null,
  moveCursor: null,
};
