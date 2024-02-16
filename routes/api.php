<?php

use App\Http\Controllers\Cricket\CricketMatchListController;
use App\Http\Controllers\Cricket\GetPreviousAndNextMatchesController;
use App\Http\Controllers\Cricket\GetTeamPlayers;
use App\Http\Controllers\Cricket\SeasonStandingsController;
use App\Http\Controllers\Cricket\sofascore\GetPlayerDetailsController;
use App\Http\Controllers\Cricket\sofascore\MatchDetailsController;
use App\Http\Controllers\Cricket\sofascore\TeamDetailsController;
use App\Http\Controllers\Cricket\sofascore\TodayCricketMatchListController;
use App\Http\Controllers\Cricket\sofascore\TodayLiveMatchesController;
use App\Http\Controllers\Cricket\sofascore\TopLeaguesController;
use App\Http\Controllers\Cricket\sofascore\TopLeagues\IPLController;
use App\Http\Controllers\Cricket\TeamListController;
use App\Http\Controllers\IndexController;
use App\Http\Controllers\News\Cricket\GetCricketNewsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

/*
|--------------------------------------------------------------------------
| Here is where you can register Basketball routes for our application.
 */
Route::prefix('cricket')->group(function () {
    Route::prefix('matchlist')->group(function () {
        Route::get('past/{dayNumber}', [GetPreviousAndNextMatchesController::class, 'previousMatches'])->name('past');
        Route::get('today', [CricketMatchListController::class, 'getCricketMatchList'])->name('today');
    });

    Route::get('get-team-list', [TeamListController::class, 'getTeamList'])->name('get-team-list');
    Route::get('get-players/{countryId}', [TeamListController::class, 'getCountryPlayers'])->name('get-players');

    Route::get('get-team-players/{matchId}', [GetTeamPlayers::class, 'getPlayers'])->name('get-team-players');
    Route::get('get-season-standings/{seasonId}', [SeasonStandingsController::class, 'seasonStandings'])->name('get-season-standings');

    // sofascore API Routes
    Route::prefix('sofascore')->group(function () {

        // top Leagues
        Route::prefix('topLeagues')->group(function () {
            Route::get('list', [TopLeaguesController::class, 'topLeaguesList'])->name('list');
            Route::get('info/{leagueId}', [TopLeaguesController::class, 'topLeagueInfo'])->name('info');
            Route::get('contents/{leagueId}', [TopLeaguesController::class, 'topLeagueContents'])->name('contents');
            Route::get('contents/meta/{leagueId}', [TopLeaguesController::class, 'getTopLeaguesMetaContants'])->name('contents/meta');
            Route::get('season/standings/list/{leagueId}', [TopLeaguesController::class, 'topLeagueSeasonStandingsList'])->name('season/standings/list');
            Route::get('singe/season/standings/{leagueId}/{seasonId}', [TopLeaguesController::class, 'topLeagueSingleSeasonStandings'])->name('singe/season/standings');
            Route::get('ipl', [IPLController::class, 'getIplNews'])->name('ipl');
        });

        // team routes
        Route::prefix('teams')->group(function () {
            Route::get('list', [TeamDetailsController::class, 'teamList'])->name('list');
            Route::get('details/{teamId}', [TeamDetailsController::class, 'getTeamDetails'])->name('details');
            Route::get('contents/{teamId}', [TeamDetailsController::class, 'getTeamContants'])->name('contents');
            Route::get('contents/meta/{teamId}', [TeamDetailsController::class, 'getTeamMetaContants'])->name('content/meta');
            Route::get('squad/{teamId}', [TeamDetailsController::class, 'getTeamPlayers'])->name('squad');
        });
        // end::team routes
        // begin::players
        Route::prefix('player')->group(function () {
            Route::get('details/{playerId}', [GetPlayerDetailsController::class, 'getSinglePlayerDetails'])->name('details');
            Route::get('contents/{playerId}', [GetPlayerDetailsController::class, 'getSinglePlayerContents'])->name('contents');
            Route::get('contents/meta/{playerId}', [GetPlayerDetailsController::class, 'getPlayerMetaContants'])->name('contents');
        });
        // end::players

        // begin::live matches
        Route::prefix('today')->group(function () {
            Route::get('live/matches', [TodayLiveMatchesController::class, 'todayLiveMatches'])->name('live/matches');
            Route::get('all/matches/{date}', [TodayCricketMatchListController::class, 'todayAllMatchList'])->name('all/matches');
        });
        // end::live matches

        Route::prefix('single/match')->group(function () {
            Route::get('details/{matchId}', [MatchDetailsController::class, 'getSpecificMatchDetails'])->name('details');
            Route::get('lineups/{matchId}', [MatchDetailsController::class, 'getSpecificMatchLineups'])->name('lineups');
            Route::get('innings/{matchId}', [MatchDetailsController::class, 'getSpecificMatchInnings'])->name('innings');
            Route::get('h2h/{matchId}', [MatchDetailsController::class, 'getSingleMatchH2H'])->name('h2h');
            Route::get('contents/{matchId}', [MatchDetailsController::class, 'getSpecificMatchContents'])->name('contents');
        });

        // news routes
        Route::prefix('news')->group(function () {
            Route::get('list', [GetCricketNewsController::class, 'getCricketNewsList'])->name('news-list');
            Route::get('details/{newsId}', [GetCricketNewsController::class, 'getCricketNewsDetails'])->name('details');
            Route::get('list/contents/meta', [GetCricketNewsController::class, 'getNewsListPageMetaContents'])->name('list.contents.meta');
            Route::get('details/contents/meta/{newsId}', [GetCricketNewsController::class, 'getNewsDetailsPageMetaContents'])->name('details.contents.meta');
        });
    });
});

/**
 * routes for frontend layouts
 */
Route::get('latest-cricket-news', [IndexController::class, 'fetchLatestNews'])->name('latest-cricket-news');
// proxcy api's
Route::get('/team/image/{teamId}', function ($teamId) {
    $response = Http::get("https://api.sofascore.app/api/v1/team/{$teamId}/image");
    return response($response->body())
        ->header('Content-Type', 'image/jpeg');
});



