<?php

namespace App\Http\Middleware;

use Closure;
use Exception;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Facades\JWTAuth;

class VerificationUser
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
        // con session el validador
        // if (session()->exists('name') && session()->get('rol') === '0') {
        //     // if (session()->exists('name') && session()->get('rol') === '0') {
        //     return $next($request);
        // } else {
        //     // return redirect('no-autorizado');
        //     return redirect('/');

        //     # code...
        // }
        //  jwtAuth la validación
        try {
            JWTAuth::parseToken()->authenticate();
            return $next($request);
        } catch (Exception $e) {
            if ($e instanceof TokenInvalidException) {
                return response()->json(['status' => Response::HTTP_UNAUTHORIZED, 'message'=> 'token invalido'],Response::HTTP_UNAUTHORIZED);
            }
            if ($e instanceof TokenExpiredException) {
                return response()->json(['status' => Response::HTTP_UNAUTHORIZED, 'message'=> 'token expirado'],Response::HTTP_UNAUTHORIZED);
            }

            // return response()->json(['status' => 'expired token', 'code' => '450']);
        }   
    //     if (Auth::user()->rol==='usuario') {
    //         return $next($request);
    //     } else {
    //         return abort(403);
    // }

    }
}
