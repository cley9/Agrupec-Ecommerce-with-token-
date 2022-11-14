<?php

namespace App\Http\Controllers\user;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\User;
// use Barryvdh\DomPDF\PDF;
use Barryvdh\DomPDF\Facade as PDF;

use Illuminate\Http\Request;

class PdfTickedController extends Controller
{

    public function downloadPdf()
    {
        // return 23;
        $user = User::with(['productos'])->find(session()->get('userId')); // id user

        // $users = Cart::all();
        // $users_ = $users->find(2);
        // $users = Cart::with(['cart'])->find(session()->get('userId'));
        // echo $user->productos;
        // echo $ticket;
        // return view('User.Pdf.pdfDownload', compact(['cartUser', 'exitProductoUser']));
        $ticket = $user->productos;
        // $exitProductoUser = cart::where('userId', session()->get('userId'))->where('productoId', '>', 0)->exists();
        // return view('User.Pdf.pdfDownload', compact(['ticket', 'exitProductoUser']));
        // Pdf::setOption(['dpi' => 150, 'defaultFont' => 'sans-serif']);
        view()->share('User.Pdf.pdfDownload', $ticket);
        $pdf = PDF::loadView('User.Pdf.pdfDownload', ['ticket' => $ticket]);
        // return $pdf->download('archivo.pdf');  //----descargar
        return $pdf->stream();  //----- this is for view online



    }

    // $cartArray = User::with(['productos'])->find(session()->get('userId')); // id user

    // dd($users);
    // echo $user;
    // echo $user->productos;
    // return view('Admin.pdfDownload',compact('users'));

    // view()->share('User.Pdf.pdfDownload', $users);
    // $pdf = PDF::loadView('Admin.Pdf.pdfDownload', ['users' => $users]);
    // // return $pdf->download('archivo.pdf');  //----descargar
    // return $pdf->stream();  //----- this is for view online


}