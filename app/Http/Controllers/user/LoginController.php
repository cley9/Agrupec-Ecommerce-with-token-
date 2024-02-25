<?php

namespace App\Http\Controllers\user;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Laravel\Socialite\Facades\Socialite;
use Symfony\Component\HttpFoundation\Response;
use Tymon\JWTAuth\Facades\JWTAuth;

class LoginController extends Controller
{
     function createUser(Request $request)
     {
         $request->validate([
               'name'=> 'required|max:105',
             'email'=> 'required|email|unique:users|max:105',
              'password'=> 'required|confirmed|max:105',
         ]);
             $user = new User();
             $user->name = $request->name;
             $user->email = $request->email;
             $user->password = Hash::make($request->password);
             $user->rol = '0';
             $user->avatar = '/storage/img/icons/userLogin.png';
             $user->external_auth = 'local';
             $user->save();
              $token=JWTAuth::fromUser($user);
              session(['user'=> 0]);
              return response()->json(["status"=>Response::HTTP_OK, "message"=>"Usuario creado","token"=>$token,"user"=>$user],Response::HTTP_OK);
     }

    function loginLocalUser(Request $request){
             $request->validate([
                'email' => 'required|email|max:105',
                'password'=> 'required|max:105',
                // 'propiedad del api'=> ['required'],
              ]);
            $email=$request->email;
            $credencials = [
                'email' => $email,
                'password' => $request->password
            ];
            $validate = User::where('email', $email)->where('rol', '0')->exists();
            if (($token=JWTAuth::attempt($credencials))&& $validate) {
                $userId = User::where('email', $request->email)->get();
                // $cookie= cookie('cookie_token_agru',$token,(60*24)*7);
                session(['user'=> 0]);
               return response()->json(["status"=>Response::HTTP_OK, "message"=>"Usuario valido","token"=>$token,"user"=>$userId],Response::HTTP_OK);
            } else {
                return response()->json(["status"=>Response::HTTP_UNAUTHORIZED,'message' => 'Usuario invalido o contraseña no valida'],Response::HTTP_UNAUTHORIZED);
            }
    }

    function loginGoogle()
    {
        return Socialite::driver('google')->redirect();
    }
    function callback()
    {
        // $user= Socialite::driver('google')->stateless()->user();
        try {
            $google_user = Socialite::driver('google')->user();
            $user = User::where('email', $google_user->email)->first(); //entrega un true o false
            if ($user) {
                $userId = User::where('email', $google_user->email)->where('email', $google_user->email)->get();
                $credencials = [
                    'email' => $google_user->email,
                    'password' => $google_user->email
                ];
                $token=JWTAuth::attempt($credencials);
                session(['user'=> 0]);
                // $cookie= cookie('cookie_token_agru',$token,(60*24)*7);
                // return response()->json(["status"=>Response::HTTP_OK, "message"=>"Usuario valido","token"=>$token,"user"=>$userId],Response::HTTP_OK)->withoutCookie($cookie);
                // return response()->route('vista.index')->withoutCookie($cookie)->with(["status"=>Response::HTTP_OK, "message"=>"Usuario valido","token"=>$token,"user"=>$userId],Response::HTTP_OK);
                return redirect()->route('vista.index')->with(["data"=>["status" => Response::HTTP_OK, "message" => "Usuario valido", "token" => $token, "user" => $userId]]);
            } else {
                $new_user = new User();
                $new_user->name = $google_user->name;
                $new_user->email = $google_user->email;
                $new_user->password = Hash::make($google_user->email); // pendiente de cambio por el token de google 
                $new_user->rol = '0';
                $new_user->avatar = $google_user->avatar;
                $new_user->external_auth = 'google';
                $new_user->save();
                 $token=JWTAuth::fromUser($new_user);
                $userId = User::where('email', $google_user->email)->where('email', $google_user->email)->get();
                session(['user'=> 0]);
                // $cookie= cookie('cookie_token_agru',$token,(60*24)*7);
                // return response()->json(["status"=>Response::HTTP_OK, "message"=>"Usuario valido","token"=>$token,"user"=>$userId],Response::HTTP_OK)->withoutCookie($cookie);
                return redirect()->route('vista.index')->with(["data"=>["status" => Response::HTTP_OK, "message" => "Usuario valido", "token" => $token, "user" => $userId]]);
            }
        } catch (\Throwable $th) {
            abort(404);
        }
    }
}
