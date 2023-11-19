<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Auth\Middleware\Authenticate as Middleware;

class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    protected function redirectTo($request)
    {
        if (! $request->expectsJson()) {
            return route('login');
        }
    }
    // public function handle($request, Closure $next, ...$guards)
    // {
    //      // Verifica si el usuario está autenticado a través del cookie
    //      if ($request && $token= $request->cookie('cookie_token_agru')) {
    //     //  if ($request && $token= $request->hasCookie('cookie_token_agru')) {
    //         // if ($token= $request->hasCookie('tu_cookie_personalizado')) {
    //         // $user = $this->authenticateUserWithCookie($request);
    //         $request->headers->set('Authorization','Bearer'.$token);
    //         // Si el usuario se autentica correctamente, puedes establecerlo como el usuario actual
    //         // Auth::login($user);
    //     }
    //     $this->authenticate($request,$guards);

    //     return $next($request);
    // }
}
