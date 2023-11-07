<?php

use App\Http\Controllers\mailController;
use App\Http\Controllers\user\PdfTickedController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// Route::middleware('VerificationUser')->group(function () {
//     // Route::middleware('VerificationUser')->group(function () {
  
//     Route::get('/User-pdfDownload', [PdfTickedController::class, 'downloadPdf'])->name('download.user.pdf');
//     Route::get('/GetCart/{id}', [UserController::class, 'viewCartUser'])->name('viewCartUser.user.main');
//     Route::get('/Cart', [UserController::class, 'cartUser'])->name('cart.user.main');
//     // Route::get('/Cart', [UserController::class, 'cartUser'])->name('cart.user.main');
//     Route::get('/Delete/{id}', [UserController::class, 'deleteCart'])->name('deleteCart.user.main');
//     Route::get('/DeleteCart', [UserController::class, 'deleteTotalCart'])->name('deleteTotalCart.user.main');
//     Route::get('/User-Perfil', [UserController::class, 'userPerfil'])->name('perfil.user.main');
//     Route::get('/AddCart/{id}/{cantidad}', [UserController::class, 'userAddCart'])->name('addCart.user.main');
//     // perfil edit
//     Route::get('/editPerfil', [UserController::class, 'editPeerfil'])->name('editPerfil.user.main');
//     Route::get('/addCart_', function () {
  
  
//       //
//       return  view('User.addCart');
//     });
//   });