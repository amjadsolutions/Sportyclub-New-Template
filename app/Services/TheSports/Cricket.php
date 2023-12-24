<?php

namespace App\Services\TheSports;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Redis;

class Cricket
{
    private $REDIS_LEAGUE_DETAILS_CRICKET = 'THE_SPORTS_LEAGUE_DETAILS_CRICKET_TEST';
    private $REDIS_TEAM_DETAILS_CRICKET = 'THE_SPORTS_TEAM_DETAILS_CRICKET _TEST';
    private $REDIS_VENUE_DETAILS_CRICKET = 'THE_SPORTS_VENUE_DETAILS_CRICKET_KEY_TEST';
    /**
     * @comment get the matchList of Football
     * @see https://www.thesports.com/docs/football
     * @param integer $teamId
     * @return matchList
     */
    public function matchList($dayNum = 0)
    {
        /**
         * if request if for next or previous days otherwise execute else block
         */
        if (!empty($dayNum)) {
            /**
             * if request is for next days execute if block otherwise execute else block
             */
            if ($dayNum > 0) {
                $nextDayTimeStamp = \Carbon\Carbon::today()->addDays($dayNum)->timestamp;
                $nextDate = \Carbon\Carbon::today()->addDays($dayNum)->isoFormat('YYYYMMDD');
                return $this->getmatches($nextDayTimeStamp, $nextDate);

            } else {
                $previousDayTimeStamp = \Carbon\Carbon::now()->subDays(abs($dayNum))->timestamp;
                $previousDate = \Carbon\Carbon::today()->subDays($dayNum)->isoFormat('YYYYMMDD');
                return $this->getmatches($previousDayTimeStamp, $previousDate);
            }
        } else {

            $todayTimeStamp = \Carbon\Carbon::today()->timestamp;
            $todayDate = \Carbon\Carbon::today()->isoFormat('YYYYMMDD');
            return $this->getmatches($todayTimeStamp, $todayDate);
        }
    }
    /**
     * @comment to get matches of choosed day
     * @param integer $dayNumer
     * @param dateandtime $timeStamp
     * @return $matchesTHE_SPORT_USER
     */
    public function getmatches($timeStamp, $date)
    {

        try {
            $response = Http::withoutVerifying()->get(env('THE_SPORT_URI') . "cricket/match/diary", [
                'user' => env('THE_SPORT_USER'),
                'secret' => env('THE_SPORTS_SECRET_KEY'),
                'tsp' => $timeStamp,
                'date' => $date,
            ]);

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
    // rough

    /**
     * @comment get the team Details of Football
     * @see https://www.thesports.com/docs/football
     * @param integer $teamId
     * @return teamDetails
     */
    public function getTeamDetails($teamId, $fresh = true)
    {
        /**
         * check if data is available in redis then, get it.
         */
        if (!empty($fresh) && Redis::hexists($this->REDIS_TEAM_DETAILS_CRICKET, $teamId)) {
            return json_decode(Redis::hget($this->REDIS_TEAM_DETAILS_CRICKET, $teamId), true);
        }

        try {
            $response = Http::withoutVerifying()->get(env('THE_SPORT_URI') . "cricket/team/list", [
                'user' => env('THE_SPORT_USER'),
                'secret' => env('THE_SPORTS_SECRET_KEY'),
                'uuid' => $teamId,
            ]);
            /**
             * if response is successfull, save into redis
             */
            if ($response->successful() && !empty($response->body())) {
                Redis::hset($this->REDIS_TEAM_DETAILS_CRICKET, $teamId, $response->body());
                Redis::expire($this->REDIS_TEAM_DETAILS_CRICKET, env('REDIS_TTL'));

                return json_decode($response->body(), true);
            }
        } catch (Throwable $e) {
            throw $e;
        }
    }
    /**
     * @comment get the league Details of Football
     * @see https://www.thesports.com/docs/football
     * @param integer $teamId
     * @return leagueDetails
     */
    public function getLeagueDetails($leagueId, $fresh = true)
    {
        /**
         * check if data is available in redis then, get it.
         */
        if (!empty($fresh) && Redis::hexists($this->REDIS_LEAGUE_DETAILS_CRICKET, $leagueId)) {

            return json_decode(Redis::hget($this->REDIS_LEAGUE_DETAILS_CRICKET, $leagueId), true);
        }

        /**
         * get leagueDetail
         */
        $response = Http::withoutVerifying()->get(env('THE_SPORT_URI') . "cricket/tournament/list", [
            'user' => env('THE_SPORT_USER'),
            'secret' => env('THE_SPORTS_SECRET_KEY'),
            'uuid' => $leagueId,
        ]);
        /**
         * store data into redis
         */
        if ($response->successful() && !empty($response->body())) {
            Redis::hset($this->REDIS_LEAGUE_DETAILS_CRICKET, $leagueId, $response->body());
            Redis::expire($this->REDIS_LEAGUE_DETAILS_CRICKET, env('REDIS_TTL'));
            return json_decode($response->body(), true);
        }
    }
    public function venueDetails($venueId)
    {

        /**
         * check if data is available in redis then, get it.
         */
        if (Redis::hexists($this->REDIS_VENUE_DETAILS_CRICKET, $venueId)) {
            return json_decode(Redis::hget($this->REDIS_VENUE_DETAILS_CRICKET, $venueId), true);
        }
        /**
         * get leagueDetail
         */
        $response = Http::withoutVerifying()->get(env('THE_SPORT_URI') . "cricket/venue/list", [
            'user' => env('THE_SPORT_USER'),
            'secret' => env('THE_SPORTS_SECRET_KEY'),
            'uuid' => $venueId,
        ]);
        /**
         * store data into redis
         */
        if ($response->successful() && !empty($response->body())) {
            Redis::hset($this->REDIS_VENUE_DETAILS_CRICKET, $venueId, $response->body());
            Redis::expire($this->REDIS_VENUE_DETAILS_CRICKET, env('REDIS_TTL'));
            return json_decode($response->body(), true);
        }
    }

}
