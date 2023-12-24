<?php

namespace App\Console\Commands\Cricket;

use Illuminate\Console\Command;
use App\Http\Controllers\News\Facebook\FacebookPostController;
use Illuminate\Support\Facades\Log;
class PublishFBPost extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'publish:post';

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
        Log::info("Publish Post");
        $matchlist = new FacebookPostController;
        $matchlist->publishMatchStartPost();
        Log::info("Publish Posted Successfully");
    }
}
