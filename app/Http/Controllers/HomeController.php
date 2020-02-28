<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function __construct()
    {
        $this->middleware('role');
    }
    //
    public function index(){
        return Inertia::render('Dashboard/Index');
    }
}
