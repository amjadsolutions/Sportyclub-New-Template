<?php

namespace App\Http\Controllers\cricket\sofascore;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;

class TeamDetailsController extends Controller
{
    private $teamsList = [
        ["id" => "187754", "nameEn" => "Pakistan", "slug" => "pakistan", "shortName" => "Pak"],
        ["id" => "187757", "nameEn" => "England", "slug" => "england", "shortName" => "Eng"],
        ["id" => "187765", "nameEn" => "India", "slug" => "india", "shortName" => "Ind"],
        ["id" => "187747", "nameEn" => "South Africa", "slug" => "south-africa", "shortName" => "SA"],
        ["id" => "187746", "nameEn" => "Australia", "slug" => "australia", "shortName" => "Aus"],
        ["id" => "187755", "nameEn" => "New Zealand", "slug" => "new-zealand", "shortName" => "NZ"],
        ["id" => "187840", "nameEn" => "Netherlands", "slug" => "netherlands", "shortName" => "Ned"],
        ["id" => "187756", "nameEn" => "Sri Lanka", "slug" => "sri-lanka", "shortName" => "SL"],
        ["id" => "187744", "nameEn" => "Bangladesh", "slug" => "bangladesh", "shortName" => "Ban"],
        ["id" => "187575", "nameEn" => "Afghanistan", "slug" => "afghanistan", "shortName" => "Afg"],

    ];

    // method to return teams list view
    public function index()
    {
        return view('category.cricket.teams.team-list');
    }
    // method to return teams details view
    public function teamsDetails()
    {
        return view('category.cricket.teams.team-details');
    }
    /**
     * method to get team list from array
     */
    public function teamList()
    {
        $teamsList = [];
        foreach ($this->teamsList as $team) {
            $teamsList[] = $team;
        }
        return [
            'teamList' => $teamsList,
        ];
    }
    /**
     * get team Details
     */
    public function getTeamDetails($teamId)
    {
        try {
            $response = Http::withoutVerifying()->get("https://api.sofascore.com/api/v1/team/" . $teamId);
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
     * method to get team players
     */
    public function getTeamPlayers($teamId)
    {

        try {
            $response = Http::withoutVerifying()->get("https://api.sofascore.com/api/v1/team/" . $teamId . "/players");
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
     * method to get team contents
     */
    public function getTeamContants($teamId)
    {

        try {
            $response = Http::withoutVerifying()->get("https://api.sofascore.com/api/v1/seo/content/team/" . $teamId . "/en");
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

    // $team['nameEn']
    public function getTeamMetaContants($teamId)
    {
        $content = [];
        foreach ($this->teamsList as $team) {

            if ($team['id'] == $teamId) {
                $content['description'] = $team['nameEn'] . " scores, schedule, players and scorecard from all cricket tournaments that " . $team['nameEn'] . " played.";
                $content['heading'] = $team['nameEn'] . " players, scorecard and schedule";
                $content['title'] = $team['nameEn'] . "-lineups | " . $team['shortName'] . " | " . $team['nameEn'] . "-lineups | " . " scorecard and schedule | Sportyclub Live";
                $content['url'] = "http://sportyclub.net/cricket/" . $team['slug'] . "/team/details" . $teamId;
                $content['keywords'] = $team['slug'] . "-live-match," . $team['slug'] . " -players," . $team['slug'] . " -ranking";
            }

        }
        return [
            'contents' => $content,
        ];

    }

}
