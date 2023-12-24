<?php

namespace App\Services\TheSports;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Redis;

class Common
{
    /**
     * redis keys
     */
    private $REDIS_LEAGUE_DETAILS = 'THE_SPORTS_REDIS_LEAGUES_DETAILS_TEST';
    private $REDIS_TEAM_DETAILS = 'THE_SPORTS_REDIS_TEAMS_DETAILS_TEST';
    private $REDIS_CHINEASE_LANGUAGE_NAME = 'THE_SPORTS_REDIS_CHINEASE_LANGUAGE_TEST';
    private $REDIS_MATCH_ODDS = 'THE_SPORTS_REDIS_MATCH_ODDS_TEST';

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

            $response = Http::withoutVerifying()->get(env('THE_SPORT_URI') . $api, [
                'user' => env('THE_SPORT_USER'),
                'secret' => env('THE_SPORTS_SECRET_KEY'),
                'uuid' => $id,
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
    /**
     * @comment to get language list of players, teams , leagues etc
     * @param integer id
     * @param integer type
     */
    public function getLanguageList($id, $category, $type)
    {

        /**
         * check if data is available in redis then, get it.
         */
        if (Redis::hexists($this->REDIS_CHINEASE_LANGUAGE_NAME, $id . $type)) {
            return json_decode(Redis::hget($this->REDIS_CHINEASE_LANGUAGE_NAME, $id . $type), true);
        }

        try {

            $response = Http::withoutVerifying()->get(env('THE_SPORT_URI') . $category . "/language/list", [
                'user' => env('THE_SPORT_USER'),
                'secret' => env('THE_SPORTS_SECRET_KEY'),
                'uuid' => $id,
                'type' => $type,
            ]);

            /**
             * if response is successfull, return CategoryList
             */
            if ($response->successful() && !empty($response->body())) {
                /**
                 * store the data into redis and then return the response
                 */
                Redis::hset($this->REDIS_CHINEASE_LANGUAGE_NAME, $id . $type, $response->body());
                Redis::expire($this->REDIS_CHINEASE_LANGUAGE_NAME, env('REDIS_TTL'));
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
    public function getTeamDetails($api, $teamId, $category, $fresh = true)
    {
        /**
         * check if data is available in redis then, get it.
         */
        if (!empty($fresh) && Redis::hexists($this->REDIS_TEAM_DETAILS, $teamId)) {
            return json_decode(Redis::hget($this->REDIS_TEAM_DETAILS, $teamId), true);
        }
        $teamDetails = [];
        $countryDetails = [];
        /**
         * get teamDetails
         */
        if (isset($this->getCategoryList($api, $teamId)['results'][0])) {
            $teamResponse = $this->getCategoryList($api, $teamId)['results'][0];
        }
        /**
         * get coach and venue id
         */
        $coachId = !empty($teamResponse['coach_id']) ? $teamResponse['coach_id'] : "";
        $venueId = !empty($teamResponse['venueId']) ? $teamResponse['venueId'] : "";
        $countryId = !empty($teamResponse['countryId']) ? $teamResponse['countryId'] : "";
        /**
         * call coach, venue , players and country API and inject into teamDetails API
         */
        if (!empty($coachId)) {
            $teamResponse['coach_details'] = $this->getCategoryList($category . "/coach/list", $coachId)['results'];
        }
        if (!empty($venueId)) {
            $teamResponse['venue_details'] = $this->getCategoryList($category . "/venue/list", $venueId)['results'];
        }
        $countryResponse = $this->getCategoryList($category . "/country/list")['results'];
        /**
         * get country of choosed team.
         */
        foreach ($countryResponse as $country) {
            if ($country['id'] == $countryId) {
                $countryDetails[] = $country;
            }
        }

        $teamResponse['countryDetails'] = $countryDetails;
        $teamDetails['teamDetails'] = $teamResponse;

        if (isset($this->getLanguageList($teamId, $category, 4)['results'][0]['name_zht'])) {
            $teamDetails['teamDetails']['cn_name'] = $this->getLanguageList($teamId, $category, 4)['results'][0]['name_zht'];
        } else {
            $teamDetails['teamDetails']['cn_name'] = "队名不退出";
        }

        /**
         * store the data into redis and then return the response
         */
        echo ucfirst($category) . " Team Details Saved Successfully of Id = " . $teamId;
        echo "\n";
        Redis::hset($this->REDIS_TEAM_DETAILS, $teamId, json_encode($teamDetails));
        Redis::expire($this->REDIS_TEAM_DETAILS, env('REDIS_TTL'));
        return $teamDetails;
    }
    /**
     * @comment get the league Details of Football
     * @see https://www.thesports.com/docs/football
     * @param integer $teamId
     * @return leagueDetails
     */
    public function getLeagueDetails($api, $leagueId, $category, $fresh = true)
    {
        /**
         * check if data is available in redis then, get it.
         */
        if (!empty($fresh) && Redis::hexists($this->REDIS_LEAGUE_DETAILS, $leagueId)) {
            return ["leagueDetails" => json_decode(Redis::hget($this->REDIS_LEAGUE_DETAILS, $leagueId), true)];
        }
        /**
         * get leagueDetail
         */
        if (isset($this->getCategoryList($api, $leagueId)['results'])) {

            $leagueResponse = $this->getCategoryList($api, $leagueId)['results'];
            if (isset($leagueResponse)) {

                if ($this->getLanguageList($leagueId, $category, 3)['results']) {

                    $this->getLanguageList($leagueId, $category, 3)['results'][0]['name_zht'];
                }

                if (isset($this->getLanguageList($leagueId, $category, 3)['results'][0]['name_zht']) && !empty($this->getLanguageList($leagueId, $category, 3)['results'][0]['name_zht'])) {
                    $leagueResponse[0]['cn_name'] = $this->getLanguageList($leagueId, $category, 3)['results'][0]['name_zht'];
                } else {
                    $leagueResponse[0]['cn_name'] = "联盟名称不存在";
                }

                /**
                 * get country of choose league.
                 */

                if (!empty($leagueResponse[0]['country_id'])) {
                    $countryId = $leagueResponse[0]['country_id'];
                    $countryResponse = $this->getCategoryList($category . "/country/list")['results'];

                    foreach ($countryResponse as &$country) {
                        if ($country['id'] == $countryId) {
                            $leagueResponse[0]['countryDetails'] = $country;
                        }
                    }

                    if (isset($this->getLanguageList($countryId, $category, 2)['results'][0]['name_zht']) && !empty($this->getLanguageList($countryId, $category, 2)['results'][0]['name_zht'])) {
                        $leagueResponse[0]['countryDetails']['cn_name'] = $this->getLanguageList($countryId, $category, 2)['results'][0]['name_zht'];
                    } else {
                        $leagueResponse[0]['countryDetails']['cn_name'] = "国家名称不退出";
                    }
                }

                /**
                 * get current champion team
                 */
                if (!empty($leagueResponse[0]['title_holder'])) {
                    $current_champion_team = $this->getCategoryList($api, $leagueResponse[0]['title_holder'][0])['results'];
                    if (isset($current_champion_team)) {
                        $leagueResponse[0]['current_champion_team'] = isset($current_champion_team[0]['name']) ? $current_champion_team[0]['name'] : "";
                    }
                }
                /**
                 * get most winning team
                 */
                if (!empty($leagueResponse[0]['most_titles'])) {
                    foreach ($leagueResponse[0]['most_titles'][0] as $index => $team) {
                        $winnTeam = $this->getCategoryList($api, $team)['results'];
                        if (isset($winnTeam)) {
                            $leagueResponse[0]['most_champion_team'][++$index] = isset($winnTeam[0]['name']) ? $winnTeam[0]['name'] : "";
                        }
                    }
                }

                if (isset($leagueResponse[0]['cur_season_id'])) {
                    $seasonId = $leagueResponse[0]['cur_season_id'];
                    $stndData = $this->leagueStandings($seasonId, $category)['results'] && $this->leagueStandings($seasonId, $category)['results']['tables'] ? $this->leagueStandings($seasonId, $category)['results']['tables'] : "";
                    $leagueResponse[0]['standings'] = !empty($stndData[0]) && $stndData[0]['rows'] ? $stndData[0]['rows'] : "";
                } else {
                    $leagueResponse[0]['standings'] = "";
                }

                /**
                 * store the data into redis and then return the response
                 */
                echo ucfirst($category) . " League Details Saved Successfully of Id = " . $leagueId;
                echo "\n";
                Redis::hset($this->REDIS_LEAGUE_DETAILS, $leagueId, json_encode($leagueResponse));
                Redis::expire($this->REDIS_LEAGUE_DETAILS, env('REDIS_TTL'));
                return ["leagueDetails" => $leagueResponse];
            }
        }
    }

    public function leagueStandings($seasonId, $category)
    {

        $response = Http::withoutVerifying()->get(env('THE_SPORT_URI') . $category . "/season/recent/table/detail", [
            'user' => env('THE_SPORT_USER'),
            'secret' => env('THE_SPORTS_SECRET_KEY'),
            'uuid' => $seasonId,
        ]);
        return json_decode($response->body(), true);
    }

    public function getMatchOdds($fresh, $category, $matchId)
    {
 
        /**
         * check if data is available in redis then, get it.
         */
        if (!empty($fresh) && Redis::hexists($this->REDIS_MATCH_ODDS, $matchId)) {
            return json_decode(Redis::hget($this->REDIS_MATCH_ODDS, $matchId), true);
        }
   
        // https://api.thesports.com/v1/football/odds/live
         $response = Http::withoutVerifying()->get(env('THE_SPORT_URI') . $category . "/odds/history", [
            'user' => env('THE_SPORT_USER'),
            'secret' => env('THE_SPORTS_SECRET_KEY'),
            'uuid' => $matchId,
        ]);

        /**
         * if response is successfull, return CategoryList
         */
        if ($response->successful() && !empty($response->body())) {
            Redis::hset($this->REDIS_MATCH_ODDS, $matchId, $response->body());
            Redis::expire($this->REDIS_MATCH_ODDS, env('REDIS_TTL'));
            
            return json_decode($response->body(), true);
        }
    }

    /**
     * get H2H Data
     */
    public function H2h($category, $matchId)
    {
        $response = Http::withoutVerifying()->get(env('THE_SPORT_URI') . $category . "/match/analysis", [
            'user' => env('THE_SPORT_USER'),
            'secret' => env('THE_SPORTS_SECRET_KEY'),
            'uuid' => $matchId,
        ]);

        /**
         * if response is successfull, return CategoryList
         */
        if ($response->successful() && !empty($response->body())) {
            return json_decode($response->body(), true);
        }
    }

}
