<?php

namespace App\Http\Controllers\cricket;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Redis;

class TeamListController extends Controller
{
    private $REDIS_CRICKET_TEAMS_LIST = 'THE_SPORTS_REDIS_CRICKET_TEAMS_LIST_';
    private $REDIS_CRICKET_COUNTRY_PLAYERS_LIST = 'THE_SPORTS_REDIS_CRICKET_COUNTRY_PLAYERS_LIST ';

    private $hotTeams = [
        ["id" => "9dn1m1kc8gqoepl", "nameEn" => "Pakistan"],
        ["id" => "xkn54qloc2qvy9d", "nameEn" => "England"],
        ["id" => "kdj2ry6cj9q1zpg", "nameEn" => "India"],
        ["id" => "gy0or5wcexrwzv3", "nameEn" => "Australia"],
        ["id" => "9kdj2ry6c9q1zpg", "nameEn" => "Ireland"],
        ["id" => "56ypq33czyqd7oj", "nameEn" => "New Zealand"],
        ["id" => "gpxwrx1c94myk0j", "nameEn" => "South Africa"],
        ["id" => "28y39mpxcprojxg", "nameEn" => "Netherlands"],
        ["id" => "kjw2r0kcwyqz84o", "nameEn" => "Zimbabwe"],
        ["id" => "gx7lm77cpwm2wdk", "nameEn" => "Sri Lanka"],
        ["id" => "4zp5rzpc20q82w1", "nameEn" => "Bangladesh"],
        ["id" => "d23xmvjcwgmg8ny", "nameEn" => "Afghanistan"],

    ];
    public function getTeamList($fresh = false)
    {
        if (Redis::exists($this->REDIS_CRICKET_TEAMS_LIST)) {
            return json_decode(Redis::get($this->REDIS_CRICKET_TEAMS_LIST));
        }

        foreach ($this->hotTeams as $team) {
            $response = Http::withoutVerifying()->get(env('THE_SPORT_URI') . "cricket/country/list", [
                'user' => env('THE_SPORT_USER'),
                'secret' => env('THE_SPORTS_SECRET_KEY'),
            ]);

            $countryList = json_decode($response->body(), true)['results'];
            foreach ($countryList as $country) {
                if ($country['id'] == $team['id']) {
                    $teams[] = $country;
                }
            }
        }
        Redis::set($this->REDIS_CRICKET_TEAMS_LIST, json_encode($teams));
        Redis::expire($this->REDIS_CRICKET_TEAMS_LIST, env('REDIS_TTL'));
        return $teams;
    }

    public function getCountryPlayers($countryId)
    {

        if (Redis::hexists($this->REDIS_CRICKET_COUNTRY_PLAYERS_LIST, $countryId)) {
            return json_decode(Redis::hget($this->REDIS_CRICKET_COUNTRY_PLAYERS_LIST, $countryId));
        }

        $response = Http::withoutVerifying()->get(env('THE_SPORT_URI') . "cricket/player/list", [
            'user' => env('THE_SPORT_USER'),
            'secret' => env('THE_SPORTS_SECRET_KEY'),
        ]);

        $playersList = json_decode($response->body(), true)['results'];
        $countryPlayers = [];
        $country = [];
        foreach ($playersList as $player) {
            if ($countryId == $player['country_id']) {
                $countryPlayers[] = $player;
            }
        }
        foreach ($this->hotTeams as $team) {
            if ($team['id'] == $countryId) {
                $country[] = $team;
            }
        }
        $players['playersList'] = $countryPlayers;
        $players['countryDetails'] = $country;

        Redis::hset($this->REDIS_CRICKET_COUNTRY_PLAYERS_LIST, $countryId, json_encode($players));
        Redis::expire($this->REDIS_CRICKET_COUNTRY_PLAYERS_LIST, env('REDIS_TTL'));
        return $players;
    }

}
