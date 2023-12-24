<?php

namespace App\Http\Controllers\news\cricket;

use App\Http\Controllers\News\Facebook\FacebookPostController;
use App\Http\Controllers\Controller;
use File;
use Goutte\Client;
use Illuminate\Http\Request;
use Image;
use App\Models\CricketNews;

class IPLController extends Controller
{

    public function crawlIPLNews()
    {
        $client = new Client();
        $url = "https://sportstar.thehindu.com/cricket/ipl/ipl-news/";
        $page = $client->request('GET', $url);

        $page->filter('.row-element')->each(function ($node, $index) {

            $href = $node->filter('.content > h3 > a')->attr('href');

            $this->newsDetails($href);

        });

    }

    public function newsDetails($href)
    {

        $client = new Client();

        $page = $client->request('GET', $href);
        $title = $page->filter('.title')->text();



        $page->filter('.top-pic > .picture > picture > source')->each(function ($node, $index) use (&$image) {

            if ($index == 0) {
                $image = $node->filter('source')->attr('srcset');
            }

        });

        $page->filter('.articlebodycontent > p')->each(function ($node, $index) use (&$newsBody) {

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
            file_put_contents(public_path($folderName . $newsId . "-not-edited" . ".jpg"), $image);
            // store image into
            CricketNews::Create(
                [
                    'title' => $title,
                    'category' => "ipl",
                    'image' => "/" . $folderName . $newsId . ".jpg",
                    'details' => $newsBody,

                ]);
       
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
                $tags = "\n#latestnews\n#latestcricketnews\n#sportyclub\n#sportynews\n#iccnews\n#ipl2024\n#iccnews\n#latestiplnews\n#ipl\n#cricketnews";
                (new FacebookPostController)->publishFacebookPost(env('BASE_URI') . "/"  . $folderName . $newsId . ".jpg",$title, $tags);
        }
    }

}
