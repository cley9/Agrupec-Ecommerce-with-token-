<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Cart;
use App\Models\Producto;
// -----fecha
use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;

// use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

class UserController extends Controller
{
    function userPerfil()
    {
        return view('User.perfil');
    }
    function cartUser()
    {
        $cartArray = User::with(['productos'])->find(session()->get('userId')); // id user
        $exitProductoUser = cart::where('userId', session()->get('userId'))->where('productoId', '>', 0)->exists();
        return view('User.cart', compact(['cartArray', 'exitProductoUser']));
    }
    function viewCartUser($idUser)
    { //asicrono
        // $cartArray=User::with(['productos'])->find(session()->get('userId')); // id user
        $cartArray = User::with(['productos'])->find($idUser); // id user
        return  $cartArray->productos;
        // return $idUser;
        // $exitProductoUser=cart::where('userId',session()->get('userId'))->where('productoId','>',0)->exists();
        // return view('User.cart',compact(['cartArray','exitProductoUser']));
    }
    function userAddCart($idUser, $idProducto, $cantidad)
    {
        // $user =User::with(['productos'])->find(session()->get('userId')); 
        $user = User::with(['productos'])->find($idUser);
        $exitProducto = cart::where('userId', $idUser)->where('productoId', '=', $idProducto)->exists();
        if ($exitProducto) {
            $getCantPro = cart::where('userId', $idUser)->where('productoId', '=', $idProducto)->get();
            $newCantPro = $getCantPro[0]->cantidad + $cantidad;
            $user->productos()->updateExistingPivot($idProducto, [
                'cantidad' => $newCantPro,
            ]);
            // return redirect()->route('cart.user.main');
            return response()->json(['status' => Response::HTTP_CREATED, 'message' => 'Producto agregado al carrito'], Response::HTTP_CREATED);
            // return 'esta lleno mi king'.$getCantPro[0]->cantidad.' -- '.$newCantPro;
        } else {
            $fecha = Carbon::now();
            $addCart = new Cart;
            $addCart->userId = $idUser;
            $addCart->productoId = $idProducto;
            $addCart->cantidad = $cantidad;
            $addCart->created_at = $fecha;
            $addCart->save();
            return response()->json(['status' => Response::HTTP_CREATED, 'message' => 'Producto agregado al carrito'], Response::HTTP_CREATED);
        }
    }
    function deleteCart($idUser, $idProducto)
    {
        $user = User::with(['productos'])->find($idUser); // id user
        // $user =User::with(['productos'])->find(session()->get('userId')); // id user
        $user->productos()->detach($idProducto);
        return response()->json(['status' => Response::HTTP_NO_CONTENT, 'message' => 'Producto eliminado correctamente de su lista de carrito'], Response::HTTP_OK);
        // return redirect()->route('cart.user.main');
    }

    function deleteTotalCart($idUser)
    {
        // $user=cart::where('userId',session()->get('userId'))->delete();
        $user = cart::where('userId', $idUser)->delete();
        return response()->json(['status' => Response::HTTP_NO_CONTENT, 'message' => 'Se vacio la lista de producto de su carrito'], Response::HTTP_OK);
        // return redirect()->route('cart.user.main');
    }
    function editPeerfil(Request $request)
    {
        $editUser = User::find(session()->get('userId'));
        // return $request->file('imagen')->isValid();
        // return $request->file('imagen')->exists();
        if ($request->file('imagenUser') != null) {
            $imgGet = session()->get('avatar');
            $extImg = $request->file('imagenUser')->extension(); // solo saldra la extencion
            $aletImg = rand(1, 100000);
            $img = $aletImg . '.' . $extImg;
            // $path = $request->file('imagenUser')->storeAs('public/img/iconsUser/',$img );
            // Storage::disk('local')->delete('public/img/iconsUser/'.$imgGet.''); //Cuando se usa el controlador public o local Puede eliminar la foto del perfil anterior como este., elimina el archivo
            // $editUser->avatar=$img;
        }
        $editUser->name = $request->input('nameUser');
        $editUser->save();
        return view('User.perfil');
        // return response()->json(['hola'=>12 ,$request->all(),session()->get('userId'),$editUser]);
    }
    // return $addCart;
    // $user = User::find(session()->get('userId'));

    // $user =User::with(['productos'])->find(session()->get('userId')); // id user
    //     foreach( $user->productos as $ad){
    // return $ad;
    //     }
    // $ad=cart::all();
    // return $user->productos;


    # code...
    // // $addCart=cart::table('tbl_cart')->get();
    // $addCart=Producto::table('tbl_producto')->get();
    // $addCart=Cart::all();

    // $ad=cart::where('userId',session()->get('userId'))->where('productoId','=',1)->get();
    // $ad=cart::table('tbl_cart')->select('userId')->where('userId',session()->get('userId'))->where('productoId','=',1)->get();
    // return $ad[0]->cantidad;
    // return $ad;

    // $ad= cart::whereRelation('productos', 1, false)->get();
    // if (isset($ad)) {
    // return $ad;

    // $user->productos()->where('productoId', 7)->get();
    // $a= $user->productos()->updateExistingPivot(1,);
    // return $user->productos;
    // return $user->productos[3]->pivot;
    // return $user;
    // return $a;

    // return session()->get('userId');
    // $user->save();
    // return $user[0]->id."---".$idProducto; // [0] this para quitar el [ {json }] y solo vea { json} para poder acceder

    // $cartArray=json_decode($cartArray_);
    // json_decode()
    // return $cartArray->productos[0]->pivot;
    // return $cartArray->productos[0]->pivot->cantidad;
    // return $cartArray;

    // return $cartArray->productos[0]->pivot->userId;
    // $n='cartArray';
    // return view('User.cart');
    // ---------------
    // $cartArray = User::find(2);
    // ----------
    // $users = User::with(['productos'])->find(2);
    // $users = User::with(['productos'])->get();
    // $users = User::with(['productos'])->get();

    // foreach ($users->flatMap->productos as $productos) {
    //  return $users->name;
    //  return $users->productos;

    // foreach ($users as $productos) {
    //     // return $productos;
    //     return $users->productos;
    //     // return $users->productos[1]->cantidad;

    // }

    // foreach ($users as $productos) {
    //     return $productos;
    // }



    // foreach ($user->roles as $role) {
    //     echo $role->pivot->created_at;
    // }
    // return view('User.cart',compact('cartArray'));

    //             use App\Models\Comment;
    // use App\Models\Post;



    // $comment = new Comment(['message' => 'A new comment.']);
    // $post = Post::find(1);
    // $post->comments()->save($comment);
  
}
