import { B, be_ } from '@ctx-core/object'
import { writable$, Writable$ } from '@ctx-core/store'
const key = 'route$'
export const route$_b:B<route$_T> = be_(key, ()=>
	writable$(''))
export type route$_T = Writable$<string>
export {
	route$_b as b__route
}
