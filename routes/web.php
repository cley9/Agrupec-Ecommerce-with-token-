<?php

// use App\Http\Controllers\user\PdfProductoController;

use App\Http\Controllers\admin\AdminController;
use App\Http\Controllers\admin\ApiController;
use App\Http\Controllers\admin\CrudController as AdminCrudController;
use App\Http\Controllers\admin\FacturaController;
use App\Http\Controllers\admin\InfocorpController;
use App\Http\Controllers\admin\LoginController as AdminLoginController;
use App\Http\Controllers\admin\PdfProductoController;
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
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\user\LoginController as UserLoginController;
use App\Http\Controllers\user\PdfTickedController;
use App\Mail\ContactoEmail;
use App\Mail\ContactoMail;
use Illuminate\Support\Facades\Mail;
// use App\Http\Controllers\datos\mailController;
// use App\Http\Controllers\UserController;

use Laravel\Socialite\Facades\Socialite;
use Tymon\JWTAuth\Facades\JWTAuth;

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
Route::get('/token', [ControllersApiController::class, 'viewToken'])->name('view.token.postman');
Route::get('/api/promocionCoutDow', [ViewController::class, 'CountDown'])->name('home.promocion.local');
Route::get('/cley', [ViewController::class, 'listCategory'])->name('user.cley.daaa');
Route::get('/local', [ViewController::class, 'local'])->name('tienda.home.local');
Route::get('/slay', [ViewController::class, 'viewSlayderMain'])->name('slayderMain.index');
Route::get('/inserSlayderMain', [ViewController::class, 'inserSlayderMain'])->name('slayderMain.index');
Route::get('/Search', [ViewController::class, 'search'])->name('search.home.search');
Route::get('/searchListCategory', [ViewController::class, 'searchListCategory'])->name('searchListCategory.home.search');
Route::get('/Producto-view', [ViewController::class, 'Producto'])->name('viewProducto.home.list');
Route::get('/Ayuda', [ViewController::class, 'viewHelp'])->name('help.home.index');
Route::get('/view/productoView', [ControllersApiController::class, 'productoView'])->name('productoView.api.producto');
Route::get('/envioGmail', [mailController::class, 'recuperarPassword'])->name('restablecer.user.password');
Route::get('/restablecerGmailView', [mailController::class, 'restablecerPasswordView'])->name('restablecerPasswordView.user.Gmail');
Route::get('login/google', [UserLoginController::class, 'loginGoogle'])->name('login.user.index');
Route::get('login/google/callback', [UserLoginController::class, 'callback']);
Route::post('/createUserAdmin', [AdminLoginController::class, 'createUserAdmin'])->name('create.admin.main');
Route::post('/loginAdmin', [AdminLoginController::class, 'loginAdmin'])->name('loginAdmin.admin.main');
Route::get('/logout', [LoginController::class, 'logout'])->name('logout.user.index');
Route::post('/createUser', [UserLoginController::class, 'createUser'])->name('create.user.index');
Route::get('/validarUser/{email}', [LoginController::class, 'validarUser'])->name('validar.user.index');
Route::post('/loginLocalUser', [UserLoginController::class, 'loginLocalUser'])->name('loginLocalUser.user.index');
// Route::get('user', [LoginController::class, 'indexHome'])->name('loginUser.proceso.index');
Route::get('/Nosotros', [ViewController::class, 'viewNosotros'])->name('nosotros.home.index');
Route::get('/Contactenos', [ViewController::class, 'viewContacto'])->name('contactenos.home.index');
Route::get('/View-page/{id}', [ViewController::class, 'viewProductoId'])->name('View.home.index');
Route::get('/api/contactoAgrupec', [MailController::class, 'contactoAgrupec'])->name('api.mail.contactoAgrupec');
// recuperacion de cuenta
Route::get('/restablecerGmail', [mailController::class, 'restablecerPasswordUser'])->name('restablecerPassword.user.gmail');
Route::middleware(['jwt.apiRest.agrupec', 'jwt.user.user'])->group(function () {
});
Route::middleware(['session.addInterfaz.user'])->group(function () {
  Route::get('/Cart', [UserController::class, 'cartUser'])->name('cart.user.main');
  Route::get('/User-pdfDownload/{idUser}', [PdfTickedController::class, 'downloadPdf'])->name('download.user.pdf');
  Route::get('/userPerfil', [UserController::class, 'userPerfil'])->name('perfil.user.main');
});
Route::get('/payment', [PaymentController::class, 'payCulqui'])->name('payment.user.master');
Route::middleware(['session.addInterfaz.admin'])->group(function () {
  Route::get('/admin', function () {
    return view('Admin.home');
  });
  Route::get('/adminList', [AdminCrudController::class, 'list'])->name('list.admin.list');
  Route::get('/Admin-Catalogo', [AdminCrudController::class, 'viewSlayderMain'])->name('list.admin.catalogo');
  Route::get('/Admin-Ventas', [AdminController::class, 'ventas'])->name('venta.admin.index');
  Route::get('/Admin-factura', [FacturaController::class, 'view'])->name('view.admin.factura');
  Route::get('/Admin-infocorp', [InfocorpController::class, 'main'])->name('main.admin.infocorp');
   // --pdf
   Route::get('/adminPdfDownload', [PdfProductoController::class, 'downloadPdf'])->name('download.admin.pdf');
   Route::get('/Admin-pdfProducto', [PdfProductoController::class, 'viewPdf'])->name('view.admin.pdf');
});