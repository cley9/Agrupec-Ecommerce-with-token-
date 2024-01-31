<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Culqi\Culqi;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class PaymentController extends Controller
{
    function payCulqui(Request $request)
    {
        $culqi = new Culqi([
            'api_key' => env('CULQI_SECRET_KEY')
        ]);
        $charge = $culqi->Charges->create([
            'amount' => 1000,
            'currency_code' => 'PEN',
            'description' => 'Venta de prueba',
            'email' => $request->email,
            'source_id' => $request->token
        ]);
        if ($charge) {
            return response()->json(["status" => Response::HTTP_OK, "message" => "pago exitoso", "request" => $request->all(), "obj charge" => $charge], Response::HTTP_OK);
        } else {
            return response()->json(["status" => Response::HTTP_CONFLICT, "message" => "no se pudo hacer el pago ", "request" => $request->all(), "obj charge" => $charge], Response::HTTP_CONFLICT);
        }
    }
}
