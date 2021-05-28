import { _b } from '@ctx-core/object'
import type { B } from '@ctx-core/object'
import type { route_T } from './route_b'
import { route_b } from './route_b'
import type { route_query_T } from './route_query_b'
import { route_query_b } from './route_query_b'
export interface route_ctx_I {
	route?:route_T
	route_query?:route_query_T
	route_b_h?:route_b_h_T
}
export interface route_b_h_T {
	get route():route_T
	get route_query():route_query_T
}
export function route_b_h_b(ctx:route_ctx_I):B<route_ctx_I, 'route_b_h'> {
	return _b('route_b_h', ()=>{
		return {
			get route() { return route_b(ctx) },
			get route_query() { return route_query_b(ctx) }
		}
	})
}