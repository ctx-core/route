/*
 * This file was generated by `npm run generate_ctx_I_file` in @ctx-core/dev-tools
*/
import { be_ } from '@ctx-core/object'
import type { route_Ctx } from './route_Ctx'
import type { route$_T } from './route$_b'
import { route$_b } from './route$_b'
import type { route_query$_T } from './route_query$_b'
import { route_query$_b } from './route_query$_b'
export interface route_ctx_I {
	route$?:route$_T
	route_query$?:route_query$_T
	route_b_h?:route_b_h_T
}
export interface route_b_h_T {
	get route$():route$_T
	get route_query$():route_query$_T
}
export function route_b_h_b(ctx:route_Ctx):route_b_h_T {
	return be_<route_Ctx, 'route_b_h'>('route_b_h', ()=>{
		return {
			get route$() { return route$_b(ctx) },
			get route_query$() { return route_query$_b(ctx) }
		}
	})(ctx)
}
