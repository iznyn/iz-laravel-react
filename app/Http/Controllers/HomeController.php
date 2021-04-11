<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


class HomeController extends MainController
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
        return view('main.pages.home.main', $data);
    }
}
