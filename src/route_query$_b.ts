import { B, be_ } from '@ctx-core/object'
import { atom$, WritableAtom$ } from '@ctx-core/nanostores'
const key = 'route_query$'
export const route_query$_b:B<route_query$_T> = be_(key, ()=>
	atom$({}))
export type route_query$_T = WritableAtom$<any>
export {
	route_query$_b as b__query__route,
}
