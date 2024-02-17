<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class JwtAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $user=$request->get('user');
        if ($user['rol'] != 4) {
            return response()->json(['status' => Response::HTTP_UNAUTHORIZED, 'message' => 'Usuraio sin permiso'], Response::HTTP_UNAUTHORIZED);
        }
        return $next($request);
    }
}
