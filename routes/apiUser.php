<?php

use App\Http\Controllers\user\PdfTickedController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

// Route::middleware('VerificationUser')->group(function () {
  Route::middleware(['jwt.apiRest.agrupec', 'jwt.user.user'])->group(function () {
    Route::get('/User-pdfDownload', [PdfTickedController::class, 'downloadPdf'])->name('download.user.pdf');
    Route::get('/{id}/getCart/', [UserController::class, 'viewListCartUser'])->name('viewCartUser.user.main');
    Route::get('/{idUser}/delete/{idProducto}', [UserController::class, 'deleteCart'])->name('deleteCart.user.main');
    Route::delete('/deleteCart/{idUser}', [UserController::class, 'deleteTotalCart'])->name('deleteTotalCart.user.main');
    Route::get('/{idUser}/addCart/{idProducto}/{cantidad}', [UserController::class, 'userAddCart'])->name('addCart.user.main');
    Route::get('/editPerfil', [UserController::class, 'editPeerfil'])->name('editPerfil.user.main');
    Route::get('/addCart_', function () {
      return  view('User.addCart');
    });
    Route::get('/mark', function () {
        return "hi";
    });
      
  });
  