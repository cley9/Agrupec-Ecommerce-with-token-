<?php

namespace App\Http\Controllers;

use App\Models\Producto;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    function productoView(){
        $productoView=Producto::paginate(24);
        //  return $productoView;
         return response()->json(["status"=>200,"msg"=>"ok","data"=>$productoView]);
    }

    function viewToken(){
        try {
            //code...
            return response()->json(['token'=>csrf_token()]);
        } catch (\Throwable $th) {
            //throw $th;
        }
    }
}
