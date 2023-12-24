<?php

namespace App\Http\Controllers\cricket\sofascore;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;

class TopLeaguesController extends Controller
{
    private $hotLeagues = [
        ["id" => "20661", "nameEn" => "ICC Cricket World Cup", "nameEnShort" => "ICC World Cup", "slug" => "one-day-international"],
        ["id" => "11181", "nameEn" => "ICC Champions Trophy", "nameEnShort" => "ICC Champions Trophy", "slug" => "icc-champions-trophy"],
        ["id" => "11185", "nameEn" => "ICC T20 World Cup", "nameEnShort" => "ICC T20 World Cup", "slug" => "icc-t20-world-cupt"],
        ["id" => "11157", "nameEn" => "Asia Cup", "nameEnShort" => "Asia Cup", "slug" => "asia-cup"],
        ["id" => "18292", "nameEn" => "Abu Dhabi T10 League", "nameEnShort" => "Abu Dhabi T10 League", "slug" => "abu-dhabi-t10-league"],
        ["id" => "11170", "nameEn" => "Pakistan Super League", "nameEnShort" => "PSL", "slug" => "pakistan-super-league"],
        ["id" => "11165", "nameEn" => "Indian Premier League", "nameEnShort" => "IPL", "slug" => "indian-premier-league"],
        ["id" => "16365", "nameEn" => "Lanka Premier League", "nameEnShort" => "LPL", "slug" => "lanka-premier-league"],
        ["id" => "11167", "nameEn" => "Caribbean Premier League", "nameEnShort" => "CPL", "slug" => "caribbean-premier-league"],
        ["id" => "11162", "nameEn" => "Big Bash League", "nameEnShort" => "BBL", "slug" => "big-bash-league"],
        ["id" => "11164", "nameEn" => "Bangladesh Premier League", "nameEnShort" => "BPL", "slug" => "bangladesh-premier-league"],

    ];

    // method to return top league blade
    public function index()
    {
        return view('category.cricket.top-leagues.top-league-list');
    }
    // method to return top league details blade
    public function topLeagueDetails()
    {
        return view('category.cricket.top-leagues.top-league-details');
    }
    /**
     * method to return topleagues list
     */
    public function topLeaguesList()
    {
        $topLeagues = [];
        foreach ($this->hotLeagues as $league) {
            $topLeagues[] = $league;
        }
        return [
            'topLeagues' => $topLeagues,
        ];
    }
    /**
     * method to return topleagues Details
     */
    public function topLeagueInfo($leagueId)
    {
        try {
            $response = Http::withoutVerifying()->get("https://api.sofascore.com/api/v1/unique-tournament/" . $leagueId);
            /**
             * if response is successfull, return CategoryList
             */
            if ($response->successful() && !empty($response->body())) {
                return json_decode($response->body(), true);
            }
        } catch (Throwable $e) {
            throw $e;
        }
    }

    /**
     * method to return topleagues Details
     */
    public function topLeagueSingleSeasonStandings($leagueId, $seasonId)
    {
        
        try {
            $response = Http::withoutVerifying()->get("https://api.sofascore.com/api/v1/unique-tournament/" . $leagueId . "/season/" . $seasonId . "/standings/total");
            /**
             * if response is successfull, return CategoryList
             */
            if ($response->successful() && !empty($response->body())) {
                return json_decode($response->body(), true);
            }
        } catch (Throwable $e) {
            throw $e;
        }
    }
    /**
     * method to return topleagues Details
     */
    public function topLeagueSeasonStandingsList($leagueId)
    {
        try {

            $response = Http::withoutVerifying()->get("https://api.sofascore.com/api/v1/unique-tournament/" . $leagueId . "/seasons");
            /**
             * if response is successfull, return CategoryList
             */
            if ($response->successful() && !empty($response->body())) {
                return json_decode($response->body(), true);
            }
        } catch (Throwable $e) {
            throw $e;
        }
    }

    /**
     * method to get league Contents
     */
    public function topLeagueContents($leagueId)
    {
        try {
            $response = Http::withoutVerifying()->get("https://api.sofascore.com/api/v1/seo/content/unique-tournament/" . $leagueId . "/en");
            /**
             * if response is successfull, return CategoryList
             */
            if ($response->successful() && !empty($response->body())) {
                return json_decode($response->body(), true);
            }
        } catch (Throwable $e) {
            throw $e;
        }
    }
    /**
     * method to get top League Details
     */
    public function getTopLeaguesMetaContants($leagueId)
    {
        $content = [];
        foreach ($this->hotLeagues as $league) {

            if ($league['id'] == $leagueId) {
                $content['description'] = "Check " . $league['nameEnShort'] . " live score, squads, match schedules, " . $league['nameEnShort'] . " points table, fixtures, updates, photos, and videos on Sportyclub Live.";
                $content['heading'] = $league['nameEn'] . " players, scorecard and schedule";
                $content['title'] = $league['nameEnShort'] . " | " . $league['nameEn'] . "  | Live Score, Schedule, News | Sportyclub Live";
                $content['url'] = "http://sportyclub.net/cricket/top/league/details/" . $league['slug'] . "/".$leagueId;
                $content['keywords'] = $league['nameEnShort'] . " cricket score," . $league['nameEn'] . " schedule," . $league['nameEn'] . " results," . $league['nameEnShort'] . " fixtures," . $league['nameEnShort'] . "videos," . $league['nameEnShort'] . " photo," . $league['nameEn'] . "," . $league['nameEnShort'] . "";
            }

        }
        return [
            'contents' => $content,
        ];

    }
}
