<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
// ------
use App\Http\Controllers\admin\AdminController;
use App\Http\Controllers\admin\ApiController;
use App\Http\Controllers\admin\PdfProductoController;
use App\Http\Controllers\admin\FacturaController;
use App\Http\Controllers\admin\InfocorpController;
use App\Http\Controllers\admin\CrudController;
use App\Http\Controllers\admin\ViewController;

// use App\Http\Controllers\ViewController;

// Route::middleware('VerificationAdmin')->group(function () {
  Route::middleware(['jwt.apiRest.agrupec', 'jwt.user.admin'])->group(function () {
  // buscador de productos
  Route::get('/adminSearch/{search}', [AdminController::class, 'searchProductoLista'])->name('search.admin.producto');
  // Route::get('/Admin-Catalogoa', [AdminController::class , 'catalogo'])->name('form.admin.catalogo');
  Route::get('/Admin-inserCatalogo', [AdminController::class, 'inserSlayderMain'])->name('insert.admin.catalogo');
  Route::post('/Admin-logout', [LoginController::class, 'logout'])->name('logout.admin.index');
  Route::get('/Admin-delete/{id}/{img}', [CrudController::class, 'delete'])->name('delete.admin.list');
  Route::post('/Admin-update', [CrudController::class, 'update'])->name('update.admin.list');
  Route::post('/Admin-registro', [CrudController::class, 'save'])->name('save.admin.list');
  // this is infocorp
  Route::get('/Admin-infocorpSearch/{num}', [InfocorpController::class, 'searchDni'])->name('search.admin.infocorp');
  // api consumo list user 
  Route::get('/previewProduct/{idProduct}', [ApiController::class, 'previewProduct'])->name('previewProduct.admin.api');
  Route::get('/listPedido/{idUserPedido}', [ApiController::class, 'listPedido'])->name('listPedido.api.venta');
  Route::get('/previewProducto/{id}', [CrudController::class, 'viewEditProducto'])->name('viewEdit.admin.list');
 
  // ---factura
  Route::get('/Admin-facturaVenta', [FacturaController::class, 'createFactura'])->name('create.admin.factura');
  Route::get('/Admin-facturaList', [FacturaController::class, 'listFactura'])->name('lista.admin.factura');
  Route::get('/Admin-facturaSearch/{rut}', [FacturaController::class, 'search'])->name('search.admin.factura');
  Route::get('/Admin-deleteCatalogo/{id}/{img}', [AdminController::class, 'deleteSlayderMain'])->name('delete.admin.catalogo');
  Route::get('/Admin-updateCatalogo', [AdminController::class, 'updateSlayderMain'])->name('update.admin.catalogo');
  Route::get('/Admin-idCatalogo/{id}', [AdminController::class, 'idSlayderMain'])->name('id.admin.catalogo');
});