<?php

namespace App\Http\Controllers;

use App\Models\CricketNews;

class IndexController extends Controller
{
    /**
     * methot return landing page of the website
     */
    public function index()
    {
        return view('index');

    }

    /**
     * method to get leatest news page of the website
     */
    public function fetchLatestNews()
    {
        return [
            'newsList' => CricketNews::latest()->take(10)->get(),
        ];
    }
    /**
     * method to get about us page of the website
     */
    public function aboutUs()
    {
        return view('about-us');
    }
    public function termsAndConditions()
    {
        return view('terms-of-service');
    }

    public function disclaimer()
    {
        return view('disclaimer');
    }
    public function contactUs()
    {
        return view('contact-us');
    }
    public function privacyPolicy()
    {
        return view('privacy-policy');
    }
}
