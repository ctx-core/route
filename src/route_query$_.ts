import { atom$, WritableAtom$ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
const key = 'route_query$'
export const route_query$_:B<route_query$_T> = be_(key, ()=>
	atom$({}))
export type route_query$_T = WritableAtom$<any>
