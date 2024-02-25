<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;
use Tymon\JWTAuth\Facades\JWTAuth;

class LoginController extends Controller
{
    function createUserAdmin(Request $request){
        $request->validate([
            'name'=> 'required|max:105',
          'email'=> 'required|email|unique:users|max:105',
           'password'=> 'required|confirmed|max:105',
      ]);
          $userAdmin = new User();
          $userAdmin->name = $request->name;
          $userAdmin->email = $request->email;
          $userAdmin->password = Hash::make($request->password);
          $userAdmin->rol = '4';
          $userAdmin->avatar = '/storage/img/icons/person-circle.svg';
          $userAdmin->external_auth = 'local';
          $userAdmin->save();
           $token=JWTAuth::fromUser($userAdmin);
           session(['user'=> 4]);
           return response()->json(["status"=>Response::HTTP_OK, "message"=>"Usuario Admin creado","token"=>$token,"userAdmin"=>$userAdmin],Response::HTTP_OK);
      }
    function loginAdmin(Request $request)
    {
        $request->validate([
            'email' => 'required|email|max:105',
            'password'=> 'required|max:105',
        ]);
        $email=$request->email;
        $credencials = [
            'email' => $email,
            'password' => $request->password,
        ];
        $validate = User::where('email', $email)->where('rol', '4')->exists();
        if (($token=JWTAuth::attempt($credencials)) && $validate) {
            $userAdmin=User::where('email',$email)->where('rol','4')->get();
            // $cookie= cookie('cookie_token_agru',$token,(60*24)*7);
           session(['user'=> 4]);
            return response()->json(["status"=>Response::HTTP_OK, "message"=>"Usuario administrador valido","token"=>$token,"user"=>$userAdmin],Response::HTTP_OK);
            // return response()->json(["status"=>Response::HTTP_OK, "message"=>"Usuario administrador valido","token"=>$token,"user"=>$userAdmin],Response::HTTP_OK)->withoutCookie($cookie);
        } else {
            return response()->json(["status"=>Response::HTTP_UNAUTHORIZED,'message' => 'Usuario invalido o contraseña no valida'],Response::HTTP_UNAUTHORIZED);
        }
    }
}
