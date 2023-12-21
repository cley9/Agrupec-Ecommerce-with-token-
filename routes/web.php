<?php

// use App\Http\Controllers\user\PdfProductoController;

use App\Http\Controllers\admin\ApiController;
use App\Http\Controllers\ApiController as ControllersApiController;
use Illuminate\Support\Facades\Route;
// --------------
use App\Http\Controllers\ViewController;
use App\Http\Controllers\CrudController;
use App\Http\Controllers\UserController;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\mailController;
use App\Http\Controllers\user\PdfTickedController;
use App\Mail\ContactoEmail;
use App\Mail\ContactoMail;
use Illuminate\Support\Facades\Mail;
// use App\Http\Controllers\datos\mailController;
// use App\Http\Controllers\UserController;

use Laravel\Socialite\Facades\Socialite;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// token csrf para consumo de api postman 
Route::get('/', [ViewController::class, 'view'])->name('vista.index');
Route::get('/token', [ControllersApiController::class,'viewToken'])->name('view.token.postman');
Route::get('/api/promocionCoutDow', [ViewController::class, 'CountDown'])->name('home.promocion.local');
Route::get('/cley', [ViewController::class, 'listCategory'])->name('user.cley.daaa');
Route::get('/local', [ViewController::class, 'local'])->name('tienda.home.local');
Route::get('/slay', [ViewController::class, 'viewSlayderMain'])->name('slayderMain.index');
Route::get('/inserSlayderMain', [ViewController::class, 'inserSlayderMain'])->name('slayderMain.index');
Route::get('/Search', [ViewController::class, 'search'])->name('search.home.search');
Route::get('/searchListCategory', [ViewController::class, 'searchListCategory'])->name('searchListCategory.home.search');
Route::get('/Producto-view', [ViewController::class, 'Producto'])->name('viewProducto.home.list');
Route::get('/Ayuda', [ViewController::class, 'viewHelp'])->name('help.home.index');
// new api
Route::get('/view/productoView', [ControllersApiController::class, 'productoView'])->name('productoView.api.producto');
Route::get('/envioGmail', [mailController::class, 'recuperarPassword'])->name('restablecer.user.password');
Route::get('/restablecerGmailView', [mailController::class, 'restablecerPasswordView'])->name('restablecerPasswordView.user.Gmail');
Route::get('login/google', [LoginController::class, 'loginGoogle'])->name('login.user.index');
Route::get('login/google/callback', [LoginController::class, 'callback']);
Route::post('/createUserAdmin', [LoginController::class, 'createUserAdmin'])->name('create.admin.main');
Route::post('/loginAdmin', [LoginController::class, 'loginAdmin'])->name('loginAdmin.admin.main');
Route::get('/logout', [LoginController::class, 'logout'])->name('logout.user.index');
Route::post('/createUser', [LoginController::class, 'createUser'])->name('create.user.index');
Route::get('/validarUser/{email}', [LoginController::class, 'validarUser'])->name('validar.user.index');
Route::post('/loginLocalUser', [LoginController::class, 'loginLocalUser'])->name('loginLocalUser.user.index');
Route::get('user', [LoginController::class, 'indexHome'])->name('loginUser.proceso.index');
Route::get('/Nosotros', [ViewController::class, 'viewNosotros'])->name('nosotros.home.index');
Route::get('/Contactenos', [ViewController::class, 'viewContacto'])->name('contactenos.home.index');
Route::get('/View-page/{id}', [ViewController::class, 'viewProductoId'])->name('View.home.index');
// recuperacion de cuenta
Route::get('/restablecerGmail', [mailController::class ,'restablecerPasswordUser'] )->name('restablecerPassword.user.gmail');

// solo para la web 
  Route::middleware('VerificationUser')->group(function () {
    Route::get('/User-Perfil', [UserController::class, 'userPerfil'])->name('perfil.user.main');
    Route::get('/Cart', [UserController::class, 'cartUser'])->name('cart.user.main');
      Route::get('/User-pdfDownload/{idUser}', [PdfTickedController::class, 'downloadPdf'])->name('download.user.pdf');
  });
// Route::middleware('VerificationUser')->group(function () {
//   // Route::middleware('VerificationUser')->group(function () {

//   Route::get('/GetCart/{id}', [UserController::class, 'viewCartUser'])->name('viewCartUser.user.main');
//   Route::get('/Cart', [UserController::class, 'cartUser'])->name('cart.user.main');
//   // Route::get('/Cart', [UserController::class, 'cartUser'])->name('cart.user.main');
//   Route::get('/Delete/{id}', [UserController::class, 'deleteCart'])->name('deleteCart.user.main');
//   Route::get('/DeleteCart', [UserController::class, 'deleteTotalCart'])->name('deleteTotalCart.user.main');
//   Route::get('/User-Perfil', [UserController::class, 'userPerfil'])->name('perfil.user.main');
//   Route::get('/AddCart/{id}/{cantidad}', [UserController::class, 'userAddCart'])->name('addCart.user.main');
//   // perfil edit
//   Route::get('/editPerfil', [UserController::class, 'editPeerfil'])->name('editPerfil.user.main');
//   Route::get('/addCart_', function () {


//     //
//     return  view('User.addCart');
//   });
// });

Route::get('/test', function () {
  //
  $cartAray = User::with(['productos'])->find(1); // id user
  //  return view('user.cart',compact('cartAray'));
  return $cartAray;
  // return

});

// Route::get('/api/contactoAgrupec', function ($Response response){
//   Mail::to('cleyutp@gmail.com')->send(new ContactoMail);
//   return "mensaje enviado";
// })->name('user');
Route::get('/api/contactoAgrupec', [MailController::class, 'contactoAgrupec'])->name('api.mail.contactoAgrupec');

