<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        //
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {

        // cricket jobs

        $schedule->command('publish:post')->everyMinute()->withoutOverlapping();
        $schedule->command('cricket:news')->everyTenMinutes()->withoutOverlapping();
        $schedule->command('cricketMatchList:refresh')->everyMinute()->withoutOverlapping();
        $schedule->command('seasonStandings:refresh')->hourly()->withoutOverlapping();
        $schedule->command('matchPlayers:refresh')->hourly()->withoutOverlapping();
        $schedule->command('pastAndNextMatchList:refresh')->hourly()->withoutOverlapping();

    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__ . '/Commands');

        require base_path('routes/console.php');
    }
}
