<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;

class AuthController extends Controller
{
    public function login()
    {
        return Inertia::render('Admin/Login/Index');
    }
}