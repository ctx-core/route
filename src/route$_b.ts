import { B, be_ } from '@ctx-core/object'
import { atom$, WritableAtom$ } from '@ctx-core/nanostores'
const key = 'route$'
export const route$_b:B<route$_T> = be_(key, ()=>
	atom$(''))
export type route$_T = WritableAtom$<string>
export {
	route$_b as b__route
}
