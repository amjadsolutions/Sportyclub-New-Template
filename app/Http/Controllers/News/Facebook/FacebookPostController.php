<?php

namespace App\Http\Controllers\News\Facebook;

use App\Http\Controllers\Controller;
use App\Models\PublishMatchStartPost;
use File;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;
use Image;

class FacebookPostController extends Controller
{
    // team Array

    private $teamsFlag = [
        "pakistan",
        "zimbabwe",
        "netherlands",
        "bangladesh",
        "nepal",
        "india",
        "united arab emirates",
        'new zealand',
        'australia',
        'sri lanka',
        'england',
        'namibia',
        'kuwait',
        'afghanistan',
        'bahrain',
        'oman',
        'kenya',
        'rwanda',
        'rwanda women',
        'uganda',
        'nigeria',
        'tanzania',
        "south africa",
        "india-a-u19",
        "india-b-u19",
        "south africa",
        'scotland',
        'canada',
        'ireland',
        'west indies',

    ];
    private $teamsLogo = [
        "brisbane heat",
        "hobart hurricanes",
        "melbourne renegades",
        "sydney sixers",
        "sydney thunder",
        "adelaide strikers",
        "tt red force",
        "barbados pride",
        "victoria",
        "tasmania tigers",
       "perth-scorchers"
    ];

    /**
     * publish post on Facebook
     */
    public function publishFacebookPost($url, $title, $tags)
    {
        $title = "🚨 Breaking News 🚨 \n" . $title;

        $link = "\n📺𝐋𝐈𝐕𝐄 𝗟𝗜𝗡𝗞️::➤ http://sportyclub.live/cricket";
        $message = "\nREAD MORE... ➤ https://sportyclub.live/cricket/news/list";

        $response = Http::withoutVerifying()->post("https://graph.facebook.com/" . env('FACEBOOK_PAGE_ID') . "/photos", [
            'url' => $url,
            'message' => $title . $link . $message . $tags,
            'access_token' => env('FACEBOOK_TOKEN'),
        ]);

        return $response;
    }

    // Generate Match Start Post and Publish on Facebook

    public function publishMatchStartPost()
    {

        $response = Http::withoutVerifying()->get(env('BASE_URI') . "api/cricket/matchlist/today", [
            'matchStatus' => 'upcoming',
        ]);

        foreach ($response['matchList'] as $match) {

            $timeStamp = $match['match_time'] - (15 * 60);
            $matchTime = date('H:i:s', ($timeStamp));
            $CurrentTime = Carbon::now()->addMinutes(90)->toTimeString();

            if ($CurrentTime > $matchTime) {
                if (!PublishMatchStartPost::where('match_id', $match['id'])->exists()) {
                    $postId = PublishMatchStartPost::get()->count() + 1;
                    $path = public_path('images/cricket/FBposts/' . $postId . "/");
                    if (!File::isDirectory($path)) {
                        File::makeDirectory($path, 0777, true, true);
                    }
                    $this->generatePostImage($postId, $match['home_Info']['en_name'], $match['away_Info']['en_name'], $match['league_Info']['en_name']);
                    // get image extenstions
                    PublishMatchStartPost::create([
                        'match_id' => $match['id'],
                        'photo_url' => '/images/cricket/FBposts/' . $postId . "/" . $postId . ".jpg",
                    ]);
                }
            }

        }
    }

    public function generatePostImage($postId, $homeTeam, $awayTeam, $leagueTitle)
    {

        if (in_array(strtolower($homeTeam), $this->teamsFlag) || in_array(strtolower($homeTeam), $this->teamsLogo)) {

            if (in_array(strtolower($homeTeam), $this->teamsFlag)) {

                if (in_array(strtolower($awayTeam), $this->teamsFlag)) {
                    $img = Image::make(public_path("images/cricket/banners/2.png"));
                    $img->insert(public_path('images/cricket/team-logos/' . str_replace(" ", "-", strtolower($homeTeam)) . '.png'), 'center-middle', 190, 290);
                    $img->insert(public_path('images/cricket/team-logos/' . str_replace(" ", "-", strtolower($awayTeam)) . '.png'), 'center-middle', 950, 290);
                } else if (in_array(strtolower($awayTeam), $this->teamsLogo)) {
                    $img = Image::make(public_path("images/cricket/banners/2.png"));
                    $img->insert(public_path('images/cricket/team-logos/' . str_replace(" ", "-", strtolower($homeTeam)) . '.png'), 'center-middle', 190, 290);
                    $img->insert(public_path('images/cricket/team-logos/' . str_replace(" ", "-", strtolower($awayTeam)) . '.png'), 'center-middle', 900, 270);
                } else {
                    $img = Image::make(public_path("images/cricket/banners/4.png"));
                    $img->insert(public_path('images/cricket/team-logos/' . str_replace(" ", "-", strtolower($homeTeam)) . '.png'), 'center-middle', 190, 290);

                }

            } else if (in_array(strtolower($homeTeam), $this->teamsLogo)) {

                if (in_array(strtolower($awayTeam), $this->teamsLogo)) {
                    $img = Image::make(public_path("images/cricket/banners/2.png"));
                    $img->insert(public_path('images/cricket/team-logos/' . str_replace(" ", "-", strtolower($homeTeam)) . '.png'), 'center-middle', 320, 270);
                    $img->insert(public_path('images/cricket/team-logos/' . str_replace(" ", "-", strtolower($awayTeam)) . '.png'), 'center-middle', 900, 270);
                } else if (in_array(strtolower($awayTeam), $this->teamsFlag)) {
                    $img = Image::make(public_path("images/cricket/banners/2.png"));
                    $img->insert(public_path('images/cricket/team-logos/' . str_replace(" ", "-", strtolower($homeTeam)) . '.png'), 'center-middle', 280, 270);
                    $img->insert(public_path('images/cricket/team-logos/' . str_replace(" ", "-", strtolower($awayTeam)) . '.png'), 'center-middle', 950, 290);

                } else {

                    $img = Image::make(public_path("images/cricket/banners/4.png"));
                    $img->insert(public_path('images/cricket/team-logos/' . str_replace(" ", "-", strtolower($homeTeam)) . '.png'), 'center-middle', 320, 270);

                }
            }

        } else {

            if (in_array(strtolower($awayTeam), $this->teamsFlag)) {
                $img = Image::make(public_path("images/cricket/banners/3.png"));
                $img->insert(public_path('images/cricket/team-logos/' . str_replace(" ", "-", strtolower($awayTeam)) . '.png'), 'center-middle', 950, 290);
            } else if (in_array(strtolower($awayTeam), $this->teamsLogo)) {
                $img = Image::make(public_path("images/cricket/banners/3.png"));
                $img->insert(public_path('images/cricket/team-logos/' . str_replace(" ", "-", strtolower($homeTeam)) . '.png'), 'center-middle', 900, 270);

            } else {
                $img = Image::make(public_path("images/cricket/banners/1.png"));
            }

        }

        // League Logo

        // home Team
        $img->text(Str::limit($homeTeam, 21), 430, 645, function ($font) {
            $font->file(public_path('fonts/arial_bold.ttf'));
            $font->size(40);
            $font->color('#783030');
            $font->align('center');
            $font->valign('bottom');
            $font->angle(0);
        });

        // Away Team
        $img->text(Str::limit($awayTeam, 18), 1030, 645, function ($font) {
            $font->file(public_path('fonts/arial_bold.ttf'));
            $font->size(40);
            $font->color('#783030');
            $font->align('center');
            $font->valign('bottom');
            $font->angle(0);
        });

        // League Details
        $img->text(Str::limit($leagueTitle, 30), 700, 195, function ($font) {
            $font->file(public_path('fonts/arial_bold.ttf'));
            $font->size(38);
            $font->color('#FFFFFF');
            $font->align('center');
            $font->valign('bottom');
            $font->angle(0);
        });

        $img->text("Click On The Link To Watch Live Cricket Match", 500, 50, function ($font) {
            $font->file(public_path('fonts/arial_bold.ttf'));
            $font->size(38);
            $font->color('#FFFFFF');
            $font->align('center');
            $font->valign('bottom');
            $font->angle(0);
        });
        $img->save(public_path("images/cricket/FBposts/" . $postId . "/" . $postId . ".jpg"));

        $message = "\n🚨🏆🏏WATCH LIVE MATCH " . $homeTeam . " VS " . $awayTeam . "🏏🏆🚨";
        $link = "\n📺𝐋𝐈𝐕𝐄 𝗟𝗜𝗡𝗞️ ::➤ http://sportyclub.live";
        $tags = "\n#livecricketmatch\n#ICC\n#sportyclub\n#livecrickettoday\n#LiveMatchToday\n#livematch";
        $url = env('BASE_URI') . "/images/cricket/FBposts/" . $postId . "/" . $postId . ".jpg";

        $response = Http::withoutVerifying()->post("https://graph.facebook.com/" . env('FACEBOOK_PAGE_ID') . "/photos", [
            'url' => $url,
            'message' => $message . $link . $tags,
            'access_token' => env('FACEBOOK_TOKEN'),
        ]);


    }
}
