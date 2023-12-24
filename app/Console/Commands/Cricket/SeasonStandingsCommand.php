<?php

namespace App\Console\Commands\cricket;

use App\Http\Controllers\Cricket\SeasonStandingsController;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
class SeasonStandingsCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'seasonStandings:refresh';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        Log::info("Season Standings Updation Started.");
        $matchlist = new SeasonStandingsController;
        $matchlist->refreshTodaySeasonStandings(false);
        Log::info("Season Standings Updation Completed.");


        for ($i = 1; $i < 8; $i++) {
            Log::info("Updation of Match Players Started For Day " . $i);
            $pastAndNextMatches = new SeasonStandingsController;
            $pastAndNextMatches->refreshPreviousAndNextSeasonStanding($i, false);
            Log::info("Match Players For Specific Day Completed Successfully..." . $i);

        }

        for ($i = -1; $i > -8; $i--) {
            Log::info("Updation of Match Players Started For Day " . $i);
            $pastAndNextMatches = new SeasonStandingsController;
            $pastAndNextMatches->refreshPreviousAndNextSeasonStanding($i, false);
            Log::info("Match Players For Specific Day Completed Successfully..." . $i);

        }
    }
}
