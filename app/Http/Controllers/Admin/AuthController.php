<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;

class AuthController extends Controller
{
    public function login()
    {
        return Inertia::render('Login/Index', [
            'pageTitle' => 'Login',
            'pageDescription' => 'Login to administrator page',
        ]);
    }
}
