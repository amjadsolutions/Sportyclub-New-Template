<?php

namespace App\Http\Controllers\Cricket;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Redis;

class GetTeamPlayers extends Controller
{
    private $REDIS_TODAY_MATCH_LIST = 'THE_SPORTS_REDIS_TODAY_MATCH_LIST_CRICKET_TEST';
    private $REDIS_PREVIOUS_AND_NEXT_MATCH_LIST = 'THE_SPORTS_REDIS_PREVIOUS_AND_NEXT_MATCH_LIST_CRICKET_TEST_';
    private $REDIS_MATCH_PLAYERS = 'THE_SPORTS_REDIS_MATCH_PLAYERS_';
    private $REDIS_PLAYER_DETAILS = 'THE_SPORTS_REDIS_PLAYER_DETAILS';

    public function getPlayers($matchId, $fresh = true)
    {
        $matchPlayersDetails = [];
        if (!empty($fresh) && Redis::exists($this->REDIS_MATCH_PLAYERS . $matchId)) {
            return json_decode(Redis::get($this->REDIS_MATCH_PLAYERS . $matchId), true);
        }

        // uuid is matchId
        try {
            $response = Http::withoutVerifying()->get(env('THE_SPORT_URI') . "cricket/match/lineup/detail", [
                'user' => env('THE_SPORT_USER'),
                'secret' => env('THE_SPORTS_SECRET_KEY'),
                'uuid' => $matchId,
            ]);
            /**
             * if response is successfull, return CategoryList
             */
            if ($response->successful() && !empty($response->body())) {

                $homeData = json_decode($response->body(), true);
                $awayData = json_decode($response->body(), true);
                if (!empty($homeData['results']) && !empty($homeData['results']['lineup']) && !empty($homeData['results']['lineup']['home'])) {
                    foreach ($homeData['results']['lineup']['home'] as &$home) {
                        $home['playerDetails'] = $this->getPlayerDetails($home['id']);
                    }
                }
                if (!empty($awayData['results']) && !empty($awayData['results']['lineup']) && !empty($awayData['results']['lineup']['away'])) {
                    foreach ($awayData['results']['lineup']['away'] as &$away) {
                        $away['playerDetails'] = $this->getPlayerDetails($away['id']);
                    }

                }

                $matchPlayersDetails['homePlayers'] = isset($homeData['results']) && isset($homeData['results']['lineup']) && isset($homeData['results']['lineup']['home']) ? $homeData['results']['lineup']['home'] : [];
                $matchPlayersDetails['awayPlayers'] = isset($awayData['results']) && isset($awayData['results']['lineup']) && isset($awayData['results']['lineup']['away']) ? $awayData['results']['lineup']['away'] : [];

                Redis::set($this->REDIS_MATCH_PLAYERS . $matchId, json_encode($matchPlayersDetails));
                Redis::expire($this->REDIS_MATCH_PLAYERS, env('REDIS_TTL'));

                return $matchPlayersDetails;

            }
        } catch (Throwable $e) {
            throw $e;
        }
    }

    public function getPlayerDetails($playerId)
    {
        if (Redis::exists($this->REDIS_PLAYER_DETAILS . $playerId)) {
            return json_decode(Redis::get($this->REDIS_PLAYER_DETAILS . $playerId), true);
        }
        try {
            $response = Http::withoutVerifying()->get(env('THE_SPORT_URI') . "cricket/player/list", [
                'user' => env('THE_SPORT_USER'),
                'secret' => env('THE_SPORTS_SECRET_KEY'),
                'uuid' => $playerId,
            ]);

            Redis::set($this->REDIS_PLAYER_DETAILS . $playerId, json_encode($response['results']));
            Redis::expire($this->REDIS_PLAYER_DETAILS, env('REDIS_TTL'));
            return $response['results'];
        } catch (Throwable $e) {
            throw $e;
        }
    }
    /**
     * method to refresh refreshTeamPlayers
     */
    public function refreshTodayTeamPlayers($fresh = false)
    {
        if (Redis::exists($this->REDIS_TODAY_MATCH_LIST)) {
            $obj1 = json_decode(Redis::get($this->REDIS_TODAY_MATCH_LIST), true);
            foreach ($obj1['results'] as $match) {
                $this->getPlayers($match['id'], $fresh);
            }
        }
    }

    /**
     * method to refresh refreshTeamPlayers
     */
    public function refreshPreviousAndNextTeamPlayers($dayNum, $fresh = false)
    {
        if (Redis::exists($this->REDIS_PREVIOUS_AND_NEXT_MATCH_LIST . $dayNum)) {
            $obj1 = json_decode(Redis::get($this->REDIS_PREVIOUS_AND_NEXT_MATCH_LIST . $dayNum), true);
            foreach ($obj1['results'] as $match) {

                $this->getPlayers($match['id'], $fresh);
            }
        }
    }

}
