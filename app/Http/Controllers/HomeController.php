<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


class HomeController extends AppController
{
    /**
     * Main article category page
     *
     * @return void
     */
    public function index(Request $request)
    {
        $data  = array(
            'siteTitle'     => __('Homepage'),
            'siteDesc'      => __('Homepage'),
            'bodyClass'     => 'home',
        );
        return view('app.pages.home.main', $data);
    }
}
