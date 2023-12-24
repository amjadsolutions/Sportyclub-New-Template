<?php

namespace App\Http\Controllers\cricket\sofascore;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;
class MatchDetailsController extends Controller
{
    /**
     * get specific match details
     */
    public function getSpecificMatchDetails($matchId)
    {
        try {
            $response = Http::withoutVerifying()->get("https://api.sofascore.com/api/v1/event/" . $matchId);
            if ($response->successful() && !empty($response->body())) {
                return json_decode($response->body(), true);
            }
        } catch (Throwable $e) {
            throw $e;
        }
    }
    /**
     * get match lineups
     */
    public function getSpecificMatchLineups($matchId)
    {
        try {
            $response = Http::withoutVerifying()->get("https://api.sofascore.com/api/v1/event/" . $matchId . "/lineups");

            if ($response->successful() && !empty($response->body())) {
                return json_decode($response->body(), true);
            }
        } catch (Throwable $e) {
            throw $e;
        }
    }
    /**
     * get single innings details
     */
    public function getSpecificMatchInnings($matchId)
    {

        try {
            $response = Http::withoutVerifying()->get("https://api.sofascore.com/api/v1/event/" . $matchId . "/innings");
            if ($response->successful() && !empty($response->body())) {
                return json_decode($response->body(), true);
            }
        } catch (Throwable $e) {
            throw $e;
        }
    }
    /**
     * get specific match head to head
     */
    public function getSingleMatchH2H($matchId)
    {
        try {
            $response = Http::withoutVerifying()->get("https://api.sofascore.com/api/v1/event/" . $matchId . "/h2h");
            if ($response->successful() && !empty($response->body())) {
                return json_decode($response->body(), true);
            }
        } catch (Throwable $e) {
            throw $e;

        }
    }
    /**
     * get single match page contents
     */
    public function getSpecificMatchContents($matchId)
    {
        $matchStatus = request()->query('status') ?? "live";

        //    $query
        $content = [];
        $response = Http::withoutVerifying()->get("https://api.sofascore.com/api/v1/event/" . $matchId);
        if ($response->successful() && !empty($response->body())) {
            $homeTeamName = json_decode($response->body(), true)['event']['homeTeam']['name'];
            $awayTeamName = json_decode($response->body(), true)['event']['awayTeam']['name'];
            $homeTeamSlug = json_decode($response->body(), true)['event']['homeTeam']['slug'];
            $awayTeamSlug = json_decode($response->body(), true)['event']['awayTeam']['slug'];
            $leagueName = json_decode($response->body(), true)['event']['tournament']['name'];
            $leagueSlug = json_decode($response->body(), true)['event']['tournament']['slug'];
            $venue = json_decode($response->body(), true)['event']['venue']['stadium']['name'];
            $currentDate = date("d F, Y", json_decode($response->body(), true)['event']['startTimestamp']);
            $currentTime = date("h:i A", json_decode($response->body(), true)['event']['startTimestamp']);
            $content['about'] = "<h5 style='text-align:justify'> <b> Overall Information</b> </h5><p style='text-align:justify'> " . $homeTeamName . " VS " . $awayTeamName . " match is part of " . $leagueName . ".The match starts on " . $currentDate . " at " . $currentTime . ",
           Game is played at " . $venue . ".</p><p style='text-align:justify'>Sportyclub offers all the previous matches of " . $homeTeamName . " VS " . $awayTeamName . " and results sorted by their H2H schedule. Here you can find match schedule for each team in the current tournament,
          List of players, Cricket match commentary Statistics for each inning of " . $homeTeamName . " vs " . $awayTeamName . " match, match predictions and winning odds.</p>
            <p style='text-align:justify'>This information can help you to decide " . $homeTeamName . " vs " . $awayTeamName . "  game prediction.</p> <h5 style='text-align:justify'> <b> Live streaming videos</b> </h5>
            <p style='text-align:justify'> You can watch a live stream of West Indies vs England at SportyClub in full HD on a computer, tablet, or smartphone with English-language commentary in full-screen mode with no advertising or pop-ups. </p>
            <h5 style='text-align:justify'> <b> Live scores</b> </h5> <p>SportyClub provides the most recent live results from the encounter between West Indies and England. In any game, the scores will be updated in real time.</p>
            <h5 style='text-align:justify'> <b> Highlights</b> </h5> <p>Highlights from the live matchDetails.event between West Indies and England will be available at SportyClub. When they become available, full video highlights of West Indies vs England will be posted on the league's or teams' official social media.</p>";
            $content['description'] = $homeTeamName . " VS " . $awayTeamName . " live match starts on " . $currentDate . " at " . $currentTime . ". Follow the match on Sportyclub with live scores and statistics.";
            $content['heading'] = $homeTeamName . " VS " . $awayTeamName . " live score, scorecard, head to head and match predictions";
            $content['title'] = $homeTeamSlug . "-vs-" . $awayTeamSlug . " | " . $leagueSlug . "-live-match | Live scores, Scorecard, H2H | " . $homeTeamSlug . "-vs-" . $awayTeamSlug . "-lineups | Sportyclub Live";
            $content['url'] = "http://sportyclub.net/cricket/today-" . $matchStatus . "-cricket-match/" . $homeTeamSlug . "-vs-" . $awayTeamSlug . "/" . $matchId;
            $content['keywords'] = "today-" . $matchStatus . "-cricket-match, " . $homeTeamName . " VS " . $awayTeamName . ", " . $leagueName . ",  cricket news, latest news, latest cricket news, cricket news headlines,today's match live score, cricket update,today cricket scores,latest cricket scores,cricket result,cricket live update, icc cricket news, psl news, ipl news, bigbash news, t10 news";
        }
        return [
            'contents' => $content,
        ];

    }
}
