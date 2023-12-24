<?php

namespace App\Console\Commands\cricket;

use App\Http\Controllers\Cricket\GetPreviousAndNextMatchesController;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class PastAndNextMatchListCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'pastAndNextMatchList:refresh';

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
        for ($i = 1; $i < 8; $i++) {
            Log::info("Updation of matchList Started For Day " . $i);
            $pastAndNextMatches = new GetPreviousAndNextMatchesController;
            $pastAndNextMatches->previousMatches($i, false);
            Log::info("matchList For Specific Day Completed Successfully..." . $i);

        }

        for ($i = -1; $i > -8; $i--) {
            Log::info("Updation of matchList Started For Day " . $i);
            $pastAndNextMatches = new GetPreviousAndNextMatchesController;
            $pastAndNextMatches->previousMatches($i, false);
            Log::info("matchList For Specific Day Completed Successfully..." . $i);

        }
    }
}
