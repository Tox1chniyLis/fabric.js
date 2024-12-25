import { ROTATE, twoMathPi, STROKE, FILL } from '../constants.mjs';
import { degreesToRadians } from '../util/misc/radiansDegreesConversion.mjs';

function renderMultiPointControl(ctx, left, top, styleOverride, fabricObject) {
  if (this.actionName == ROTATE) {
    renderPointControl.apply(this, [ctx, left, top, styleOverride, fabricObject]);
  } else {
    renderRoundedPointControl.apply(this, [ctx, left, top, styleOverride, fabricObject]);
  }
}
function renderPointControl(ctx, left, top, styleOverride, fabricObject) {
  styleOverride = styleOverride || {};
  const xSize = this.sizeX || styleOverride.cornerSize || fabricObject.cornerSize;
  const ySize = this.sizeY || styleOverride.cornerSize || fabricObject.cornerSize;
  let myLeft = left;
  let myTop = top;
  let size = undefined;
  ctx.save();
  ctx.fillStyle = styleOverride.cornerSecondColor || fabricObject.cornerSecondColor;
  ctx.strokeStyle = styleOverride.cornerStrokeColor || fabricObject.cornerStrokeColor || "";
  if (xSize > ySize) {
    size = xSize;
    ctx.scale(1.0, ySize / xSize);
    myTop = top * xSize / ySize;
  } else if (ySize > xSize) {
    size = ySize;
    ctx.scale(xSize / ySize, 1.0);
    myLeft = left * ySize / xSize;
  } else {
    size = xSize;
  }
  ctx.beginPath();
  ctx.arc(myLeft, myTop, size / 1.5, 0, Math.PI * 2, false);
  ctx.fill();
  ctx.closePath();
  ctx.arc(myLeft, myTop, size / 1.5, 0, Math.PI * 2, false);
  ctx.stroke();
  ctx.restore();
}
function renderRoundedPointControl(ctx, left, top, styleOverride, fabricObject) {
  styleOverride = styleOverride || {};
  const xSize = this.sizeX || styleOverride.cornerSize || fabricObject.cornerSize;
  const ySize = this.sizeY || styleOverride.cornerSize || fabricObject.cornerSize;
  let myLeft = left;
  let myTop = top;
  let size = undefined;
  ctx.save();
  ctx.fillStyle = styleOverride.cornerSecondColor || fabricObject.cornerSecondColor;
  ctx.strokeStyle = styleOverride.cornerStrokeColor || fabricObject.cornerStrokeColor || "";
  if (xSize > ySize) {
    size = xSize;
    ctx.scale(1.0, ySize / xSize);
    myTop = top * xSize / ySize;
  } else if (ySize > xSize) {
    size = ySize;
    ctx.scale(xSize / ySize, 1.0);
    myLeft = left * ySize / xSize;
  } else {
    size = xSize;
  }
  ctx.beginPath();
  ctx.fillStyle = styleOverride.cornerStrokeColor || fabricObject.cornerStrokeColor || "";
  ctx.arc(myLeft, myTop, size / 1, 0, Math.PI * 2, false);
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.fillStyle = styleOverride.cornerSecondColor || fabricObject.cornerSecondColor || "";
  ctx.arc(myLeft, myTop, size / 2, 0, Math.PI * 2, false);
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.strokeStyle = styleOverride.cornerSecondColor || fabricObject.cornerSecondColor || "";
  ctx.arc(myLeft, myTop, size / 1.2, 0, Math.PI * 2, false);
  ctx.stroke();
  ctx.restore();
}

/**
 * Render a round control, as per fabric features.
 * This function is written to respect object properties like transparentCorners, cornerSize
 * cornerColor, cornerStrokeColor
 * plus the addition of offsetY and offsetX.
 * @param {CanvasRenderingContext2D} ctx context to render on
 * @param {Number} left x coordinate where the control center should be
 * @param {Number} top y coordinate where the control center should be
 * @param {Object} styleOverride override for FabricObject controls style
 * @param {FabricObject} fabricObject the fabric object for which we are rendering controls
 */
function renderCircleControl(ctx, left, top, styleOverride, fabricObject) {
  styleOverride = styleOverride || {};
  const xSize = this.sizeX || styleOverride.cornerSize || fabricObject.cornerSize,
    ySize = this.sizeY || styleOverride.cornerSize || fabricObject.cornerSize,
    transparentCorners = typeof styleOverride.transparentCorners !== 'undefined' ? styleOverride.transparentCorners : fabricObject.transparentCorners,
    methodName = transparentCorners ? STROKE : FILL,
    stroke = !transparentCorners && (styleOverride.cornerStrokeColor || fabricObject.cornerStrokeColor);
  let myLeft = left,
    myTop = top,
    size;
  ctx.save();
  ctx.fillStyle = styleOverride.cornerColor || fabricObject.cornerColor || '';
  ctx.strokeStyle = styleOverride.cornerStrokeColor || fabricObject.cornerStrokeColor || '';
  // TODO: use proper ellipse code.
  if (xSize > ySize) {
    size = xSize;
    ctx.scale(1.0, ySize / xSize);
    myTop = top * xSize / ySize;
  } else if (ySize > xSize) {
    size = ySize;
    ctx.scale(xSize / ySize, 1.0);
    myLeft = left * ySize / xSize;
  } else {
    size = xSize;
  }
  ctx.beginPath();
  ctx.arc(myLeft, myTop, size / 2, 0, twoMathPi, false);
  ctx[methodName]();
  if (stroke) {
    ctx.stroke();
  }
  ctx.restore();
}

/**
 * Render a square control, as per fabric features.
 * This function is written to respect object properties like transparentCorners, cornerSize
 * cornerColor, cornerStrokeColor
 * plus the addition of offsetY and offsetX.
 * @param {CanvasRenderingContext2D} ctx context to render on
 * @param {Number} left x coordinate where the control center should be
 * @param {Number} top y coordinate where the control center should be
 * @param {Object} styleOverride override for FabricObject controls style
 * @param {FabricObject} fabricObject the fabric object for which we are rendering controls
 */
function renderSquareControl(ctx, left, top, styleOverride, fabricObject) {
  styleOverride = styleOverride || {};
  const xSize = this.sizeX || styleOverride.cornerSize || fabricObject.cornerSize,
    ySize = this.sizeY || styleOverride.cornerSize || fabricObject.cornerSize,
    transparentCorners = typeof styleOverride.transparentCorners !== 'undefined' ? styleOverride.transparentCorners : fabricObject.transparentCorners,
    methodName = transparentCorners ? STROKE : FILL,
    stroke = !transparentCorners && (styleOverride.cornerStrokeColor || fabricObject.cornerStrokeColor),
    xSizeBy2 = xSize / 2,
    ySizeBy2 = ySize / 2;
  ctx.save();
  ctx.fillStyle = styleOverride.cornerColor || fabricObject.cornerColor || '';
  ctx.strokeStyle = styleOverride.cornerStrokeColor || fabricObject.cornerStrokeColor || '';
  ctx.translate(left, top);
  //  angle is relative to canvas plane
  const angle = fabricObject.getTotalAngle();
  ctx.rotate(degreesToRadians(angle));
  // this does not work, and fixed with ( && ) does not make sense.
  // to have real transparent corners we need the controls on upperCanvas
  // transparentCorners || ctx.clearRect(-xSizeBy2, -ySizeBy2, xSize, ySize);
  ctx["".concat(methodName, "Rect")](-xSizeBy2, -ySizeBy2, xSize, ySize);
  if (stroke) {
    ctx.strokeRect(-xSizeBy2, -ySizeBy2, xSize, ySize);
  }
  ctx.restore();
}

export { renderCircleControl, renderMultiPointControl, renderPointControl, renderRoundedPointControl, renderSquareControl };
//# sourceMappingURL=controlRendering.mjs.map
