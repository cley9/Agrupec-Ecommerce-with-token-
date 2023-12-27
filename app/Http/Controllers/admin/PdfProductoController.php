<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
// ---- pdf
use Barryvdh\DomPDF\Facade as PDF;
// --modal
use App\Models\Producto;

class PdfProductoController extends Controller
{
    function viewPdf()
    {
        $viewPdf = Producto::all();
        // return redirect()->route('view.admin.pdf');
        // return view('Admin.pdfProducto',compact('viewPdf'));
        return view('Admin.Pdf.pdfProducto', compact('viewPdf'));
    }

    public function downloadPdf()
    {
        $users = Producto::all();
        // return view('Admin.pdfDownload',compact('users'));
        view()->share('Admin.Pdf.pdfDownload', $users);
        $pdf = PDF::loadView('Admin.Pdf.pdfDownload', ['users' => $users]);
        // return $pdf->download('archivo.pdf');  //----descargar
        return $pdf->stream();  //----- this is for view online

    }
}
