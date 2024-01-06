<?php

use App\Http\Controllers\Cricket\sofascore\GetPlayerDetailsController;
use App\Http\Controllers\Cricket\sofascore\TeamDetailsController;
use App\Http\Controllers\Cricket\sofascore\TodayCricketMatchListController;
use App\Http\Controllers\Cricket\sofascore\TopLeaguesController;
use App\Http\Controllers\IndexController;
use App\Http\Controllers\News\Cricket\GetCricketNewsController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

//  begin::index routes
// Route::get('/', function () {
//     return redirect('/cricket');
// })->name('/');

Route::get('/', [IndexController::class, 'index'])->name('/');

Route::get('cricket', [IndexController::class, 'index'])->name('cricket');
Route::get('about-us', [IndexController::class, 'aboutUs'])->name('about-us');
Route::get('terms-of-service', [IndexController::class, 'termsAndConditions'])->name('terms-of-service');
Route::get('disclaimer', [IndexController::class, 'disclaimer'])->name('disclaimer');
Route::get('contact-us', [IndexController::class, 'contactUs'])->name('contact-us');
Route::get('privacy-policy', [IndexController::class, 'privacyPolicy'])->name('privacy-policy');
// end:: index routs

Route::prefix('cricket')->group(function () {
    // begin::live, upcoming & finished matches routes
    Route::get('today/live/match/list', [TodayCricketMatchListController::class, 'index'])->name('cricket/today/live/match/list');
    Route::get('today/live/match/{team}/{matchId}', [TodayCricketMatchListController::class, 'todayLiveMatchDetails'])->name('cricket/today/live/match');
    Route::get('today/upcoming/match/{team}/{matchId}', [TodayCricketMatchListController::class, 'todayUpcomingMatchDetails'])->name('cricket/today/upcoming/match');
    Route::get('today/previous/match/{team}/{matchId}', [TodayCricketMatchListController::class, 'todayFinishedMatchDetails'])->name('cricket/today/previous/match');
    // end::live, upcoming & finished matches routes

    // begin::upcoming & Finished matches list
    Route::get('upcoming/matches', [TodayCricketMatchListController::class, 'todayUpcomingMatchList'])->name('cricket/upcoming/matches');
    Route::get('previous/matches', [TodayCricketMatchListController::class, 'todayFinishedMatchList'])->name('cricket/previous/matches');

    // end::upcoming & Finished matches list
    // begin::popular teams routesfall

    Route::get('teams/list', [TeamDetailsController::class, 'index'])->name('cricket/teams/list');
    Route::get('{team}/team/details/{teamId}', [TeamDetailsController::class, 'teamsDetails'])->name('cricket/teams/details');
    // end::popular teams routes
    // begin::player details
    Route::get('{name}/player/details/{playerId}', [GetPlayerDetailsController::class, 'index'])->name('cricket/player/details');

    // end::player details
    // begin:: cricket news

    Route::prefix('news')->group(function () {
        Route::get('list', [GetCricketNewsController::class, 'getNewsListPage'])->name('cricket/news/list');
        Route::get('details/{newsId}', [GetCricketNewsController::class, 'getNewsDetailsPage'])->name('details');
    });

    // top Leagues Details
    Route::get('top/league/list', [TopLeaguesController::class, 'index'])->name('cricket/top/league/list');
    Route::get('top/league/details/{league}/{leagueId}', [TopLeaguesController::class, 'topLeagueDetails'])->name('cricket/top/league/details');
    // end top leagues
});
// end::cricket news
