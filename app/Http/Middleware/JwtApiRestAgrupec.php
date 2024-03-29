<?php

namespace App\Http\Middleware;

use Closure;
use Exception;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Facades\JWTAuth;

class JwtApiRestAgrupec
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
        try {
            $tokenUserConsumer = JWTAuth::parseToken()->authenticate();
            return $next($request->merge(['user' => $tokenUserConsumer]));
        } catch (Exception $e) {
            if ($e instanceof TokenInvalidException) {
                return response()->json(['status' => Response::HTTP_UNAUTHORIZED, 'message' => 'token invalido'], Response::HTTP_UNAUTHORIZED);
            }
            if ($e instanceof TokenExpiredException) {
                return response()->json(['status' => Response::HTTP_UNAUTHORIZED, 'message' => 'token expirado'], Response::HTTP_UNAUTHORIZED);
            }
                if ($e instanceof JWTException) {
                    return abort(401);
                // return response()->json(['status' => Response::HTTP_UNAUTHORIZED, 'message' => 'Acceso denegado'], Response::HTTP_UNAUTHORIZED);
            }
        }
    }
}
