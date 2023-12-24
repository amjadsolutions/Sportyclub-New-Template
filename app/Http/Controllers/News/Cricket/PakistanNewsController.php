<?php

namespace App\Http\Controllers\News\Cricket;

use App\Http\Controllers\News\Facebook\FacebookPostController;
use App\Http\Controllers\Controller;
use App\Models\CricketNews;
use File;
use Goutte\Client;
use Image;
class PakistanNewsController extends Controller
{
    public function crawlCricketNews()
    {
        $client = new Client();
        $url = "https://cricketpakistan.com.pk/en/news";
        $page = $client->request('GET', $url);

        $page->filter('.news_listed > li')->each(function ($node, $index) {
            $href = $node->filter('a')->attr('href');
            $this->newsDetails($href);

        });

    }

    public function newsDetails($href)
    {
        $client = new Client();
        $page = $client->request('GET', $href);
        $title = $page->filter('.single_page > h1')->text();
        $image = $page->filter('.single_img > img')->attr('src');

        $page->filter('.news_content > p')->each(function ($node, $index) use (&$newsBody) {

            $newsBody .= "<p style='font-size: 17px !important; text-align:justify'>" . $node->filter('p')->text() . "</p>";

        });

        if (!CricketNews::where('title', $title)->exists()) {

            $newsId = CricketNews::get()->count();

            $newsId == 0 ? $newsId = 1 : $newsId = $newsId + 1;

            $path = public_path('images/cricket/news/' . $newsId . "/");
            if (!File::isDirectory($path)) {
                File::makeDirectory($path, 0777, true, true);
            }
            // get image extenstion
            // store image in public folder
            $image = file_get_contents($image);
            $folderName = "images/cricket/news/" . $newsId . "/";
            file_put_contents(public_path($folderName . $newsId ."-not-edited"  . ".jpg"), $image);
            // store image into
            CricketNews::Create(
                [
                    'title' => $title,
                    'category' => "general",
                    'image' => "/" . $folderName . $newsId . ".jpg",
                    'details' => $newsBody,

                ]);
            // add the logo on Image

            $img = Image::make(public_path($folderName . $newsId ."-not-edited"  . ".jpg"));
            $img->resize(806, 540);
            $img->save(public_path($folderName . $newsId ."-not-edited" . ".jpg"));


            
            $img = Image::make(public_path("images/cricket/banners/news-template.png"));
    
       
            $img->insert(public_path($folderName . $newsId ."-not-edited" . ".jpg"), 'center', 0, -48);

            $img->resize(806, 605);


            $img->save(public_path($folderName . $newsId . ".jpg"));
            /**
             * publish post Info FB
             */
            $tags = "\n#latestnews\n#latestcricketnews\n#sportyclub\n#sportynews\n#iccnews\n#psl2024\n#iccnews\n#latestpslnews\n#psl\n#psl9";
            (new FacebookPostController)->publishFacebookPost(env('BASE_URI') . "/"  . $folderName . $newsId . ".jpg",$title,$tags);
        }
    }
}
