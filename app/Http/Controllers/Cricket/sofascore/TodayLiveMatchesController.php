<?php

namespace App\Http\Controllers\cricket\sofascore;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;

class TodayLiveMatchesController extends Controller
{
    /**
     * today live matchList
     */
    public function todayLiveMatches()
    {
        try {
            $response = Http::withoutVerifying()->get("https://api.sofascore.com/api/v1/sport/cricket/events/live");
            if ($response->successful() && !empty($response->body())) {

                return json_decode($response->body(), true);
            }
        } catch (Throwable $e) {
            throw $e;
        }
    }
}
