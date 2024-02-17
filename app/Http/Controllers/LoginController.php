<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Str;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Symfony\Component\HttpFoundation\Response;
use Tymon\JWTAuth\Facades\JWTAuth;

class LoginController extends Controller
{
    // function indexHome()
    // {
    //     return redirect('vista.index');
    // }

    function logout()
    {
        Auth::logout();
        session()->invalidate();
        session()->regenerateToken();
        return redirect('/');
    }
    // validate user email
    function validarUser($emailExists)
    {
        $userConsutal = User::where('email', $emailExists)->exists();
        if ($userConsutal) {
            return "true";
        } else {
            return "false";
        }
    }
}
