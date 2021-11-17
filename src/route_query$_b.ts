import { B, be_ } from '@ctx-core/object'
import { writable$, Writable$ } from '@ctx-core/store'
import type { route_Ctx } from './route_Ctx.js'
const key = 'route_query$'
export const route_query$_b:B<route_Ctx, typeof key> = be_(key, ()=>
	writable$({}))
export type route_query$_T = Writable$<any>
export {
	route_query$_b as b__query__route,
}
