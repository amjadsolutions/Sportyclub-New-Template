<?php

namespace App\Http\Controllers\cricket\sofascore;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;

class TodayCricketMatchListController extends Controller
{

    /**
     * today live matchList
     */
    public function index()
    {
        return view('category.cricket.matches.live-matches.today-live-matches-list');
    }
    // method to return live match details view
    public function todayLiveMatchDetails()
    {
        return view('cricket/today/live/match/list');
    }
       // method to return upcoming match list view
       public function todayUpcomingMatchList()
       {
           return view('category.cricket.matches.past-and-next.upcoming-matches-list');
       }
    // method to return upcoming match details view
    public function todayUpcomingMatchDetails()
    {
        return view('category.cricket.matches.upcoming-match-details');
    }
    // method to return upcoming match details view
    public function todayFinishedMatchList()
    {
        return view('category.cricket.matches.past-and-next.previous-matches-list');
    }
      // method to return upcoming match details view
      public function todayFinishedMatchDetails()
      {
          return view('category.cricket.matches.finished-match-details');
      }
    /**
     * today live matchList
     */
    public function todayAllMatchList($date)
    {
        try {
            $response = Http::withoutVerifying()->get("https://api.sofascore.com/api/v1/sport/cricket/scheduled-events/" . $date);
            if ($response->successful() && !empty($response->body())) {

                return json_decode($response->body(), true);
            }
        } catch (Throwable $e) {
            throw $e;
        }
    }

}
