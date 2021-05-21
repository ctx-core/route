import { _b } from '@ctx-core/object'
import { writable$, Writable$ } from '@ctx-core/store'
const key = 'route'
export interface route_Ctx {
	route?:route_T
}
export const route_b = _b<route_Ctx, typeof key>(key, ()=>
	writable$(''))
export type $route_T = string
export interface route_T extends Writable$<$route_T> {}
export {
	route_b as b__route
}
