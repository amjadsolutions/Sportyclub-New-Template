<?php

namespace App\Http\Controllers\Cricket;

use App\Http\Controllers\Controller;
use App\Services\TheSports\Cricket;
use Illuminate\Support\Facades\Redis;

class CricketMatchListController extends Controller
{
    private $liveMatches = [532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543];
    private $upcomingMatches = [1];
    private $finishedMatches = [100];

    private $PAGE_SIZE = 30;
    private $REDIS_TODAY_MATCH_LIST = 'THE_SPORTS_REDIS_TODAY_MATCH_LIST_CRICKET_TEST';

    /**
     * @comment make matchList Api
     * @see https://www.thesports.com/docs/football
     * @return matchList
     */
    public function getCricketMatchList($fresh = true)
    {
        /**
         * empty arrays
         */
        $liveMatchList = [];
        /**
         * query parameters
         */
        $pagNumber = request()->query('pageNumber') ?? 1;
        $matchStatus = request()->query('matchStatus');
        /**
         * check it redis contains data or not.
         */
        if (!empty($fresh)) {
            if (Redis::exists($this->REDIS_TODAY_MATCH_LIST)) {
                $obj1 = json_decode(Redis::get($this->REDIS_TODAY_MATCH_LIST), true);

                usort($obj1['results'], array($this, "sortLiveMatchesMatches"));

                if (!empty($matchStatus)) {
                    foreach ($obj1['results'] as $match) {

                        /**
                         * return match Status
                         */

                        if ($matchStatus == 'live') {
                            foreach ($this->liveMatches as $liveMatche) {
                                if ($liveMatche == $match['status_id']) {
                                    if (!in_array($match, $liveMatchList, true)) {
                                        array_push($liveMatchList, $match);
                                    }
                                }
                            }
                        } else if ($matchStatus == 'upcoming') {

                            foreach ($this->upcomingMatches as $upcomingMatche) {
                                if ($upcomingMatche == $match['status_id']) {
                                    if (!in_array($match, $liveMatchList, true)) {
                                        array_push($liveMatchList, $match);
                                    }
                                }

                            }

                        } else if ($matchStatus == 'finished') {

                            foreach ($this->finishedMatches as $finishedMatches) {
                                if ($finishedMatches == $match['status_id']) {
                                    if (!in_array($match, $liveMatchList, true)) {
                                        array_push($liveMatchList, $match);
                                    }
                                }
                            }

                        }

                    }

                } else {

                    return [
                        "currentPage" => $pagNumber,
                        "totalPages" => ceil(count($obj1['results']) / $this->PAGE_SIZE),
                        "matchList" => array_slice($obj1['results'], 0, $pagNumber * $this->PAGE_SIZE),
                    ];
                }
                return [
                    "currentPage" => $pagNumber,
                    "totalPages" => ceil(count($liveMatchList) / $this->PAGE_SIZE),
                    "matchList" => array_slice($liveMatchList, 0, $pagNumber * $this->PAGE_SIZE),

                ];
            }
        }
        /**
         * if data is not available in redis, store it into redis.
         */
        $response = (new Cricket)->matchList(0);
        foreach ($response['results'] as $index => &$result) {

            if ($result['status_id'] == 544 || $result['status_id'] == 0) {

                unset($response['results'][$index]);
                continue;

            }

            $result['match_timing'] = date("Y-m-d H:i:s", $result['match_time']);
            $result['update_timing'] = date("Y-m-d H:i:s", $result['updated_at']);

            /**
             * add team details to home object
             */

            $leagueInfo = (new Cricket)->getLeagueDetails($result['tournament_id'], $fresh);
            $homeTeamDetails = (new Cricket)->getTeamDetails($result['home_team_id'], $fresh);
            $awayTeamDetails = (new Cricket)->getTeamDetails($result['away_team_id'], $fresh);
            if (!empty($result['venue_id'])) {
                $venueDetails = (new Cricket)->venueDetails($result['venue_id']);
            }

            $result['match_timing'] = date("Y-m-d H:i:s", $result['match_time']);
            $result['update_timing'] = date("Y-m-d H:i:s", $result['updated_at']);

            /**
             * add score of home team to result object
             */
            if (isset($homeTeamDetails)) {

                $result['home_Info']['en_name'] = isset($homeTeamDetails['results'][0]['name']) ? $homeTeamDetails['results'][0]['name'] : "";
                $result['home_Info']['short_name'] = isset($homeTeamDetails['results'][0]['short_name']) ? $homeTeamDetails['results'][0]['short_name'] : "";
                $result['home_Info']['abbr'] = isset($homeTeamDetails['results'][0]['abbr']) ? $homeTeamDetails['results'][0]['abbr'] : "";
                $result['home_Info']['suffix'] = isset($homeTeamDetails['results'][0]['suffix']) ? $homeTeamDetails['results'][0]['suffix'] : "";
                $result['home_Info']['logo'] = isset($homeTeamDetails['results'][0]['logo']) ? $homeTeamDetails['results'][0]['logo'] : "";
                $result['home_Info']['home_score'] = isset($result['scores']['ft'][0]) ? $result['scores']['ft'][0] : "";
            }

            /**
             * add score of away team to result object
             */

            if (isset($awayTeamDetails)) {
                $result['away_Info']['en_name'] = isset($awayTeamDetails['results'][0]['name']) ? $awayTeamDetails['results'][0]['name'] : "";
                $result['away_Info']['short_name'] = isset($awayTeamDetails['results'][0]['short_name']) ? $awayTeamDetails['results'][0]['short_name'] : "";
                $result['away_Info']['abbr'] = isset($awayTeamDetails['results'][0]['abbr']) ? $awayTeamDetails['results'][0]['abbr'] : "";
                $result['away_Info']['suffix'] = isset($awayTeamDetails['results'][0]['suffix']) ? $awayTeamDetails['results'][0]['suffix'] : "";
                $result['away_Info']['logo'] = isset($awayTeamDetails['results'][0]['logo']) ? $awayTeamDetails['results'][0]['logo'] : "";
                $result['away_Info']['away_score'] = isset($result['scores']['ft'][1]) ? $result['scores']['ft'][1] : "";
            }
            /**
             * add leagaue Info to matchList
             */

            if (isset($leagueInfo)) {
                $result['league_Info']['en_name'] = isset($leagueInfo['results'][0]['name']) ? $leagueInfo['results'][0]['name'] : "";
                $result['league_Info']['short_name'] = isset($leagueInfo['results'][0]['short_name']) ? $leagueInfo['results'][0]['short_name'] : "";
                $result['league_Info']['category_id'] = isset($leagueInfo['results'][0]['category_id']) ? $leagueInfo['results'][0]['category_id'] : "";
                $result['league_Info']['logo'] = isset($leagueInfo['results'][0]['logo']) ? $leagueInfo['results'][0]['logo'] : "";
            }
            if (isset($venueDetails)) {
                $result['venue_name'] = isset($venueDetails['results'][0]['name']) ? $venueDetails['results'][0]['name'] : "";
            }

        }
        Redis::set($this->REDIS_TODAY_MATCH_LIST, json_encode($response));
        return [
            "currentPage" => $pagNumber,
            "totalPages" => ceil(count($response['results']) / $this->PAGE_SIZE),
            "matchList" => array_slice($response['results'], 0, $pagNumber * $this->PAGE_SIZE),
        ];
    }
    public function sortLiveMatchesMatches($first, $second)
    {

        $firstTime = $first["match_time"];
        $secondTime = $second["match_time"];

        if ($first["status_id"] == $second["status_id"]) {
            return $firstTime > $secondTime ? 1 : -1;
        }

        if (in_array($first["status_id"], [532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543])) {
            return -1;
        }

        if (in_array($second["status_id"], [532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543])) {
            return 1;
        }
        if (in_array($first["status_id"], [1])) {
            return -1;
        }

        if (in_array($second["status_id"], [1])) {
            return 1;
        }
        if (in_array($first["status_id"], [100])) {
            return -1;
        }

        if (in_array($second["status_id"], [100])) {
            return 1;
        }

        return $firstTime > $secondTime ? 1 : -1;
    }
}
