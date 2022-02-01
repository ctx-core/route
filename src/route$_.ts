import { atom$, WritableAtom$ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
export const route$_:B<route$_T> = be_('route$', ()=>
	atom$(''))
export type route$_T = WritableAtom$<string>
