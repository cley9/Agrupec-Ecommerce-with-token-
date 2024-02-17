<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class JwtAddTokenUser
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
        $user = auth()->user(); // Obtén el usuario autenticado

        if ($user) {
            // Genera un token JWT para el usuario autenticado
            $token = JWTAuth::fromUser($user);
            // Agrega el token al encabezado de autorización de la solicitud
            $request->headers->set('Authorization', 'Bearer ' . $token);
        return $next($request);

        }else{
            return abort(402);
        }

      
        
        // // Verifica si hay un token JWT en la solicitud
        // if ($token = auth('web')->getToken()) {
        //     // Obtén el usuario autenticado a través del token JWT
        //     $user = auth('web')->user();
        //     // Agrega el token al encabezado de autorización de la solicitud
        //     $request->headers->set('Authorization', 'Bearer ' . $token);
        // }
            // return abort(403);
        // return $next($request);
    }
}
