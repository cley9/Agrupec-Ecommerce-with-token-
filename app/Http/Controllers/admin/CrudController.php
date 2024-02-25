<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Producto;
use App\Models\SlayderMain;
// -----fecha
use Carbon\Carbon;
// --------------- storage y img
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

class CrudController extends Controller
{

    public function list()
    {
        $cliente = Producto::paginate(8);
        return view('Admin.lista', compact('cliente'));
    }

    public function viewEditProducto($idProducto)
    {
        $adminProducto = Producto::where('id', $idProducto)->get();
        return response()->json(['status'=>Response::HTTP_OK,'message'=> 'Producto existente','Producto'=>$adminProducto],Response::HTTP_OK);
        // return json_encode($adminProducto);
    }

    public function save(Request $request)
    {
        $fecha = Carbon::now();
        $extImg = $request->file('imagen')->extension(); // solo saldra la extencion
        $aletImg = rand(1, 100000);
        $img = $aletImg . '.' . $extImg;
        $request->file('imagen')->storeAs('public/img/Productos/', $img);
        $cliente = new Producto();
        $cliente->nombre = $request->name;
        $cliente->precio = $request->precio;
        $cliente->newPrecio = $request->precioNew;
        $cliente->description = $request->description;
        $cliente->peso = $request->peso;
        $cliente->cantidad = $request->cantidad;
        $cliente->imagen = $img;
        $cliente->img1 = $img;
        $cliente->img2 = $img;
        $cliente->img3 = $img;
        $cliente->img4 = $img;
        $cliente->created_at = $fecha;
        $cliente->save();
        return response()->json(["status"=>Response::HTTP_OK, "message"=>"Producto registrado correctamente"],Response::HTTP_OK);
    }

    public function delete($id, $img)
    {
        $cliente = Producto::findOrFail($id);
        $cliente->delete();
        Storage::disk('local')->delete('public/img/Productos/' . $img . ''); //Cuando se usa el controlador public o local Puede eliminar la foto del perfil anterior como este., elimina el archivo
        return redirect()->route('list.admin.list'); 
    }

    public function update(Request $request)
    {
        $cliente = Producto::find($request->id);
        $fecha = Carbon::now();
        $imgGet = $request->imagen;
        if (empty($_FILES['imagen']['name'])) {
            $img = $imgGet;
        } else {
            $extImg = $request->file('imagen')->extension();
            $aletImg = rand(1, 100000);
            $img = $aletImg . '.' . $extImg;
            $request->file('imagen')->storeAs('public/img/Productos/', $img);
            Storage::disk('local')->delete('public/img/Productos/' . $imgGet . ''); //Cuando se usa el controlador public o local Puede eliminar la foto del perfil anterior como este., elimina el archivo
        }
        $cliente->nombre = $request->name;
        $cliente->precio = $request->precio;
        $cliente->newPrecio = $request->precioNew;
        $cliente->description = $request->description;
        $cliente->cantidad = $request->cantidad;
        $cliente->peso = $request->peso;
        $cliente->imagen = $img;
        $cliente->img1 = $img;
        $cliente->img2 = $img;
        $cliente->img3 = $img;
        $cliente->img4 = $img;
        $cliente->updated_at = $fecha;
        $cliente->save();
        return response()->json(["status"=>Response::HTTP_OK, "message"=>"Producto actualizado correctamente"],Response::HTTP_OK);
            // return $request->all();
    }

    function viewSlayderMain()
    {
        $viewSlayderMain = SlayderMain::all();
        return view('Admin.catalogoSlayder', compact('viewSlayderMain'));
    }
}
