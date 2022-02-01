import { atom$, WritableAtom$ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
export const route_query$_:B<route_query$_T> = be_('route_query$', ()=>
	atom$({}))
export type route_query$_T = WritableAtom$<any>
