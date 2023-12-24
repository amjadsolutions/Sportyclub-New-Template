<?php

namespace App\Http\Controllers\cricket;

use App\Http\Controllers\Controller;
use App\Services\TheSports\Common;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Redis;

class SeasonStandingsController extends Controller
{
    private $REDIS_SEASON_STANDINGS = 'THE_SPORTS_REDIS_SEASON_STANDINGS';
    private $REDIS_PREVIOUS_AND_NEXT_MATCH_LIST = 'THE_SPORTS_REDIS_PREVIOUS_AND_NEXT_MATCH_LIST_CRICKET_TEST_';
    private $REDIS_TODAY_MATCH_LIST = 'THE_SPORTS_REDIS_TODAY_MATCH_LIST_CRICKET_TEST';
    public function seasonStandings($seasonId, $fresh = true)
    {
        if (!empty($fresh) && Redis::exists($this->REDIS_SEASON_STANDINGS . $seasonId)) {
            return [
                'standingsData' => json_decode(Redis::get($this->REDIS_SEASON_STANDINGS . $seasonId), true),
            ];
        }

        $leagueData = $this->getSeasonStandings($seasonId);
        $tables = isset($leagueData['tables']) ? $leagueData['tables'] : "";
        if (!empty($tables)) {
            foreach ($tables as $key => &$group) {

                foreach ($tables[$key]['rows'] as &$team) {
                    $teamInfoEn = (new Common)->getCategoryList("cricket/team/list", $team['team_id']);

                    $teamInfo = isset($teamInfoEn['results']) && $teamInfoEn['results'][0] ? $teamInfoEn['results'][0] : "";

                    if (!empty($teamInfo)) {
                        $team["teamInfo"] = $teamInfo;
                    }

                    $data[] = $team;
                }

                $groups[] = $group;

            }

            Redis::set($this->REDIS_SEASON_STANDINGS . $seasonId, json_encode($groups));
            Redis::expire($this->REDIS_SEASON_STANDINGS, env('REDIS_TTL'));

            return [
                'standingsData' => $groups,
            ];
        } else {
            $groups = "";
            Redis::set($this->REDIS_SEASON_STANDINGS . $seasonId, json_encode($groups));
            Redis::expire($this->REDIS_SEASON_STANDINGS, env('REDIS_TTL'));
            return [
                'standingsData' => $groups,
            ];
        }
    }

    /**
     * method to get season standings
     */
    public function getSeasonStandings($seasonId)
    {
        $response = Http::withoutVerifying()->get(env('THE_SPORT_URI') . "cricket/season/table/detail", [
            'user' => env('THE_SPORT_USER'),
            'secret' => env('THE_SPORTS_SECRET_KEY'),
            'uuid' => $seasonId,
        ]);
        return json_decode($response->body(), true)['results'];
    }

    /**
     * method to refresh seasonstandings
     */
    public function refreshTodaySeasonStandings($fresh = false)
    {
        if (Redis::exists($this->REDIS_TODAY_MATCH_LIST)) {
            $obj1 = json_decode(Redis::get($this->REDIS_TODAY_MATCH_LIST), true);

            foreach ($obj1['results'] as $match) {
                $this->seasonStandings($match['season_id'], $fresh);

            }

        }
    }
    /**
     * method to refresh SeasonStanding
     */
    public function refreshPreviousAndNextSeasonStanding($dayNum, $fresh = false)
    {
        if (Redis::exists($this->REDIS_PREVIOUS_AND_NEXT_MATCH_LIST . $dayNum)) {
            $obj1 = json_decode(Redis::get($this->REDIS_PREVIOUS_AND_NEXT_MATCH_LIST . $dayNum), true);
            foreach ($obj1['results'] as $match) {
                $this->seasonStandings($match['season_id'], $fresh);

            }
        }
    }

}
