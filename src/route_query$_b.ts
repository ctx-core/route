import { B, be_ } from '@ctx-core/object'
import { writable$, Writable$ } from '@ctx-core/store'
import type { route_Ctx } from './route_Ctx'
const key = 'route_query$'
export const route_query$_b:B<route_Ctx, typeof key> = be_(key, ()=>
	writable$({}))
export type route_query_T = any
export interface route_query$_T extends Writable$<route_query_T> {}
export {
	route_query$_b as b__query__route,
}
