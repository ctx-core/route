import { _b } from '@ctx-core/object'
import { writable$, Writable$ } from '@ctx-core/store'
import type { route_Ctx } from './route_Ctx'
const key = 'route$'
export const route$_b = _b<route_Ctx, typeof key>(key, ()=>
	writable$(''))
export type route_T = string
export interface route$_T extends Writable$<route_T> {}
export {
	route$_b as b__route
}
