<?php

namespace App\Console\Commands\cricket;

use App\Http\Controllers\Cricket\GetTeamPlayers;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class MatchPlayersCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'matchPlayers:refresh';

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
        Log::info("Match Players Updation Started.");
        $matchlist = new GetTeamPlayers;
        $matchlist->refreshTodayTeamPlayers(false);
        Log::info("Match Players Updation Completed.");

        for ($i = 1; $i < 8; $i++) {
            Log::info("Updation of Match Players Started For Day " . $i);
            $pastAndNextMatches = new GetTeamPlayers;
            $pastAndNextMatches->refreshPreviousAndNextTeamPlayers($i, false);
            Log::info("Match Players For Specific Day Completed Successfully..." . $i);

        }

        for ($i = -1; $i > -8; $i--) {
            Log::info("Updation of Match Players Started For Day " . $i);
            $pastAndNextMatches = new GetTeamPlayers;
            $pastAndNextMatches->refreshPreviousAndNextTeamPlayers($i, false);
            Log::info("Match Players For Specific Day Completed Successfully..." . $i);

        }

    }
}
