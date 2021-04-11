<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


class ContactController extends MainController
{
    /**
     * Main article category page
     *
     * @return void
     */
    public function index(Request $request)
    {
        $data  = array(
            'siteTitle'     => 'Contact',
            'siteDesc'      => 'Contact',
            'bodyClass'     => 'contact',
        );
        return view('main.pages.contact.main', $data);
    }
}
