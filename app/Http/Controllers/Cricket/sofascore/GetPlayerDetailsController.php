<?php

namespace App\Http\Controllers\cricket\sofascore;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;

class GetPlayerDetailsController extends Controller
{

    // method to get player details
    public function index()
    {
        return view('category.cricket.players.players-list');
    }
    /**
     * get player Details
     */
    public function getSinglePlayerDetails($playerId)
    {

        try {
            $response = Http::withoutVerifying()->get("https://api.sofascore.com/api/v1/player/" . $playerId);
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
     * get player Details
     */
    public function getSinglePlayerContents($playerId)
    {

        try {
            $response = Http::withoutVerifying()->get("https://api.sofascore.com/api/v1/seo/content/player/" . $playerId . "/en");
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
     * get player meta contents
     */

    public function getPlayerMetaContants($playerId)
    {

        $content = [];
        $response = Http::withoutVerifying()->get("https://api.sofascore.com/api/v1/player/" . $playerId);
        if ($response->successful() && !empty($response->body())) {
            $playerName = json_decode($response->body(), true)['player']['name'];
            $playerShortName = json_decode($response->body(), true)['player']['shortName'];
            $playerSlug = json_decode($response->body(), true)['player']['slug'];

            $content['description'] = $playerName . "profile, ranking, records, career stats and next game info.";
            $content['heading'] = $playerName . "stats";
            $content['title'] = $playerShortName . "Profile | " . "Records Career stats and next game info";
            $content['url'] = "http://sportyclub.net/cricket/" . $playerSlug . "/player/details/" . $playerId;
            $content['keywords'] = $playerName . $playerShortName . "profile," . $playerShortName . "records," . $playerShortName . "ranking," . $playerShortName . "stats,";
        }
        return [
            'contents' => $content,
        ];

    }
}
