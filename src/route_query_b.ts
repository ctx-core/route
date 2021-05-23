import { _b } from '@ctx-core/object'
import { writable$, Writable$ } from '@ctx-core/store'
import type { route_Ctx } from './route_Ctx'
const key = 'route_query'
export const route_query_b = _b<route_Ctx, typeof key>(key, ()=>
	writable$({}))
export type $route_query_T = any
export interface route_query_T extends Writable$<$route_query_T> {}
export {
	route_query_b as b__query__route,
}
