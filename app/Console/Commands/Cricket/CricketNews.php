<?php

namespace App\Console\Commands\Cricket;

use App\Http\Controllers\News\Cricket\CricketNewsController;
use App\Http\Controllers\News\Cricket\PakistanNewsController;
use App\Http\Controllers\News\Cricket\IPLController;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use Intervention\Image\Facades\Image;

class CricketNews extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'cricket:news';

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
        Log::info("Cricket News Updation Started.");
        $matchlist = new CricketNewsController;
        $pakNews = new PakistanNewsController;
        $iplNews = new IPLController;
        $matchlist->crawlWorldCupData("https://sports.ndtv.com/icc-cricket-world-cup-2023");
        sleep(30);
        $matchlist->crawlCricketNews("https://sports.ndtv.com/cricket");
        sleep(30);
        $iplNews->crawlIPLNews();
        Log::info("Cricket News Updation Completed.");
    }
}
