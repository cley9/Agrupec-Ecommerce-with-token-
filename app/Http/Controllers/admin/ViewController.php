<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\SlayderMain;
use Illuminate\Http\Request;

class ViewController extends Controller
{
    function admin(){
        return view('Admin.home');
    }
    
}
