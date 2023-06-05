import { atom_, be_atom_triple_ } from '@ctx-core/nanostores'
export const [
	route_query$_,
	route_query_,
	route_query__set,
] = be_atom_triple_(
	'route_query$_', ()=>
		atom_({}))
export { route_query$_ as route_query__ }
