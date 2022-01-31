import { atom$, WritableAtom$ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
const key = 'route$'
export const route$_:B<route$_T> = be_(key, ()=>
	atom$(''))
export type route$_T = WritableAtom$<string>
