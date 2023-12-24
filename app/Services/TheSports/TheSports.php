<?php

namespace App\Services\TheSports;

use Illuminate\Support\Facades\Http;

class TheSports
{
    /**
     * private data members
     */
    private $uri = '';
    private $user = '';
    private $secretKey = '';
    /**
     * constructor
     */
    public function __construct()
    {
        $this->uri = 'https://api.thesports.com/v1/football/';
        $this->user = 'theight';
        $this->secretKey = '162e9664572f4df6b39cf44e10c8f4fd';
    }
    /**
     * @comment get the country List of Football
     * @see https://www.thesports.com/docs/football
     * @param string $api
     *  @param integer $id
     * @return CategoryList
     * @throws ApiErrorException
     */
    public function getCategoryList($api, $id = null)
    {
        try {
            $response = Http::withoutVerifying()->withQueryParameters([
                'user' => $this->user,
                'secret' => $this->secretKey,
                'uuid' => $id,
            ])->get($this->uri . $api);
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
     * @comment get the team Details of Football
     * @see https://www.thesports.com/docs/football
     * @param integer $teamId
     * @return teamDetails
     */
    public function getTeamDetails($teamId)
    {
        $teamDetails = [];
        $playerDetails = [];
        $countryDetails = [];
        /**
         * get teamDetails
         */
        $teamResponse = $this->getCategoryList("team/additional/list", $teamId)['results'][0];
        /**
         * get coach and venue id
         */
        $coachId = $teamResponse['coach_id'];
        $venueId = $teamResponse['venue_id'];
        $countryId = $teamResponse['country_id'];
        /**
         * call coach, venue , players and country API and inject into teamDetails API
         */

        $teamResponse['coach_details'] = $this->getCategoryList("coach/list", $coachId)['results'];
        $teamResponse['venue_details'] = $this->getCategoryList("venue/list", $venueId)['results'];

        $playerResponse = $this->getCategoryList("player/with_stat/list")['results'];
        $categoryResponse = $this->getCategoryList("country/list")['results'];

        /**
         * get country of choosed team.
         */
        foreach ($categoryResponse as $country) {
            if ($country['id'] == $countryId) {
                $countryDetails[] = $country;
            }
        }
        /**
         * get players of choosed team.
         */
        foreach ($playerResponse as $player) {
            if ($player['team_id'] == $teamId) {
                $playerDetails[] = $player;
            }
        }
        $teamResponse['countryDetails'] = $countryDetails;
        $teamResponse['players'] = $playerDetails;
        $teamDetails['teamDetail'] = $teamResponse;

        return $teamDetails;
    }
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
                $Nextdays = \Carbon\Carbon::today()->addDays($dayNum)->timestamp;
                return $this->getmatches("NEXT_" . $dayNum, $Nextdays);
            } else {
                $PreviousDays = \Carbon\Carbon::now()->subDays(abs($dayNum))->timestamp;
                return $this->getmatches("PREV_" . $dayNum, $PreviousDays);
            }
        } else {
            $todayTimeStamp = \Carbon\Carbon::today()->timestamp;
            return $this->getmatches($dayNum, $todayTimeStamp);
        }
    }
    /**
     * @comment to get matches of choosed day
     * @param integer $dayNumer
     * @param dateandtime $timeStamp
     * @return $matches
     */
    public function getmatches($dayNumber, $timeStamp)
    {
        try {
            $response = Http::withoutVerifying()->withQueryParameters([
                'user' => $this->user,
                'secret' => $this->secretKey,
                // 'page' => 4,
                'time' => $timeStamp,
            ])->get($this->uri . "match/recent/list");
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
     * @comment to get Fifa Mens Standing
     * @return $standing
     */
    public function fifaStanding($api)
    {
        try {
            $response = Http::withoutVerifying()->withQueryParameters([
                'user' => $this->user,
                'secret' => $this->secretKey,
            ])->get($api);
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
}
