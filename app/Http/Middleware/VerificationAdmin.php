<?php

namespace App\Http\Middleware;

use Closure;
use Exception;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Facades\JWTAuth;

class VerificationAdmin
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
        // if (session()->exists('email') && session()->get('rol') === '4') {
        //     return $next($request);
        // } else {
        //     return redirect('/');
        // }
        try {
            // return $request->cookie('cookie_token_agru') ;
            if ( ($request->cookie('cookie_token_agru')) ||  (JWTAuth::parseToken()->authenticate())) {
                // if (JWTAuth::parseToken()->authenticate()) {   // for token 
                    return $next($request);
                } else {
                    return redirect('/');     
                    // return abort(403);
                }
                return 000;
        } catch (Exception $e) {
            if ($e instanceof TokenInvalidException) {
                return response()->json(['status' => Response::HTTP_UNAUTHORIZED, 'message'=> 'token invalido'],Response::HTTP_UNAUTHORIZED);
            }
            if ($e instanceof TokenExpiredException) {
                return response()->json(['status' => Response::HTTP_UNAUTHORIZED, 'message'=> 'token expirado'],Response::HTTP_UNAUTHORIZED);
            }
        } 
    }
}
