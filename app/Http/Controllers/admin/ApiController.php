<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Producto;
use App\Models\User;    
use Illuminate\Http\Request;

class ApiController extends Controller
{
 function listPedido($idPedido){
    $listPedidoUser=User::with(['listPedidoUser'])->find($idPedido);
    if ($listPedidoUser) {
        if ($listPedidoUser->listPedidoUser->count() >0) {
            return response()->json(["status" => 200, "msg"=> "Con pedidos", "data" =>$listPedidoUser]);
        } else {
            return response()->json(["status" => 200, "msg"=> "Sin pedidos", "data" =>$listPedidoUser]);
        }
    }else{
        return response()->json(['status' => 404, 'msg' => 'Usuario no existe']);
    }
 }   
 function previewProduct($idProduct){
    $product=Producto::where('id','=',$idProduct)->get();
    return response()->json(['status'=>200,'msg'=>'ok','data'=>$product],200);
 }
}
