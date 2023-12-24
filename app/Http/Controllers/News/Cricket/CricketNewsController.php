<?php

namespace App\Http\Controllers\News\Cricket;

use App\Http\Controllers\Controller;
use App\Http\Controllers\News\Facebook\FacebookPostController;
use App\Models\CricketNews;
use File;
use Goutte\Client;
use Image;

class CricketNewsController extends Controller
{

    public function crawlWorldCupData($url = "https://sports.ndtv.com/icc-cricket-world-cup-2023")
    {
        $client = new Client();
        $page = $client->request('GET', $url);

        $this->newsDetails($page->filter('.img-gr_c')->attr('href'));

        $page->filter('.ls-ns_ul > .ls-ns_li')->each(function ($node, $index) {
            $href = $node->filter('a')->attr('href');
            if ($index < 1) {
                $this->newsDetails($href);
            }
        });
    }
    /**
     * method to crawl Cricket News
     */
    public function crawlCricketNews($url)
    {
        $client = new Client();
        $page = $client->request('GET', $url);

        $this->newsDetails($page->filter('.img-gr_c')->attr('href'));

        $page->filter('.ls-ns_ul > .ls-ns_li')->each(function ($node, $index) {
            $href = $node->filter('a')->attr('href');
            if ($index < 6) {
                $this->newsDetails($href);
            }
        });
    }
    /**
     * method to Crawl News Details
     */

    public function newsDetails($href)
    {

        $client = new Client();
        $page = $client->request('GET', $href);

        $title = $page->filter('.sp-ttl')->text();

        $image = $page->filter('.ins_instory_dv > .ins_instory_dv_cont > img')->attr('src');

        /**
         * crawl news body
         */
        $page->filter('.story__content > div > p')->each(function ($node, $index) use (&$newsBody) {
            if (!str_contains($node->filter('p')->text(), "Advertisement")) {
                $newsBody .= "<p style='font-size: 17px !important; text-align:justify'>" . str_replace("NDTV", "SportyClub", $node->filter('p')->text()) . "</p>";
            }

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
            $tags = "\n#latestnews\n#latestcricketnews\n#sportyclub\n#sportynews\n#iccnews\n#cricketnews\n#livecricket\n#livecricketstreaming\n#livecricket";
            (new FacebookPostController)->publishFacebookPost(env('BASE_URI') . "/"  . $folderName . $newsId . ".jpg",$title,$tags);
        }
    }

}
