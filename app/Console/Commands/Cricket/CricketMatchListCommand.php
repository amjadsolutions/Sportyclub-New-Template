<?php

namespace App\Console\Commands\Cricket;

use Illuminate\Console\Command;
use App\Http\Controllers\Cricket\CricketMatchListController;
use Illuminate\Support\Facades\Log;
class CricketMatchListCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'cricketMatchList:refresh';

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
        Log::info("Cricket  MatchList  Updation Started.");
        $matchlist = new CricketMatchListController;
        $matchlist->getCricketMatchList(false);
        Log::info("Cricket MatchList Updation Completed.");
    }
}
