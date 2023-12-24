<?php

namespace App\Http\Controllers\cricket\sofascore\TopLeagues;

use App\Http\Controllers\Controller;
use App\Models\CricketNews;

class IPLController extends Controller
{
    /**
     * method to get ipl News
     */
    public function getIplNews()
    {

        $newsList = CricketNews::where('category', 'ipl')
            ->take(20)
            ->get();
        return [
            "cricketNewsList" => $newsList,
        ];
    }
}
