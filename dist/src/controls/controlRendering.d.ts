import type { InteractiveFabricObject } from '../shapes/Object/InteractiveObject';
import type { Control } from './Control';
export type ControlRenderingStyleOverride = Partial<Pick<InteractiveFabricObject, 'cornerStyle' | 'cornerSize' | 'cornerColor' | 'cornerStrokeColor' | 'cornerDashArray' | 'transparentCorners' | 'cornerSecondColor'>>;
export type ControlRenderer<O extends InteractiveFabricObject = InteractiveFabricObject> = (ctx: CanvasRenderingContext2D, left: number, top: number, styleOverride: ControlRenderingStyleOverride, fabricObject: O) => void;
export declare function renderPointControl(this: Control, ctx: CanvasRenderingContext2D, left: number, top: number, styleOverride: ControlRenderingStyleOverride, fabricObject: InteractiveFabricObject): void;
export declare function renderRoundedPointControl(this: Control, ctx: CanvasRenderingContext2D, left: number, top: number, styleOverride: ControlRenderingStyleOverride, fabricObject: InteractiveFabricObject): void;
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
export declare function renderCircleControl(this: Control, ctx: CanvasRenderingContext2D, left: number, top: number, styleOverride: ControlRenderingStyleOverride, fabricObject: InteractiveFabricObject): void;
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
export declare function renderSquareControl(this: Control, ctx: CanvasRenderingContext2D, left: number, top: number, styleOverride: ControlRenderingStyleOverride, fabricObject: InteractiveFabricObject): void;
//# sourceMappingURL=controlRendering.d.ts.map