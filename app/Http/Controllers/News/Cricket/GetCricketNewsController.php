<?php

namespace App\Http\Controllers\News\Cricket;

use App\Http\Controllers\Controller;
use App\Models\CricketNews;

class GetCricketNewsController extends Controller
{
    /**
     * method to get news list news page
     */
    public function getNewsListPage()
    {
        return view('category.cricket.news.news-list');
    }

    /**
     * method to return news details page
     */
    public function getNewsDetailsPage()
    {
        return view('category.cricket.news.news-details');
    }

    /**
     * method to fetch news List from DB
     */
    public function getCricketNewsList()
    {
        empty($pageNumber) ? $pageNumber = 1 : $pageNumber = $pageNumber;

        $pageNumber = request()->query('pageNumber');
        $newsList = CricketNews::latest()->take(500)->get()->toArray();
        return [
            "currentPage" => $pageNumber,
            "totalPages" => ceil(count($newsList) / 12),
            "cricketNewsList" => array_slice($newsList, $pageNumber * 12, 12),
        ];
    }
    /**
     * method to fetch news Details from DB
     */
    public function getCricketNewsDetails($id)
    {
        $newsDetails = CricketNews::where('id', $id)->first();
        $newsList = CricketNews::where('id', '!=', $id)->orderBy('created_at', 'desc')->take(5)->get();
        return [
            'cricketNewsDetails' => $newsDetails,
            'cricketNewsList' => $newsList,
        ];
    }
    /**
     * method to return meta contents of news list page
     */

    public function getNewsListPageMetaContents()
    {
        $content = [];
        $content['description'] = "Stay up-to-date with the latest cricket news and updates from Sportyclub Live. Get breaking news, analysis, match reports, rankings,  and much more on cricket from around the world.";
        $content['title'] = "Cricket Latest News | Cricket Updates | Match Report - Sportyclub Live";
        $content['url'] = "https://ios.app99877.com/cricket/news/list";
        $content['keywords'] = "Cricket News,Live Blogs,Live cricket blogs,cricket breaking news,cricket latest news,Cricket match schedule,Live match updates, Cricket breaking news";
        return [
            'contents' => $content,
        ];
    }
    /**
     * method to return meta contents of news details page
     */

    public function getNewsDetailsPageMetaContents($newsId)
    {
        $content = [];
        $content['description'] = "Stay up-to-date with the latest cricket news and updates from Sportyclub Live. Get breaking news, analysis, match reports, rankings,  and much more on cricket from around the world.";
        $content['title'] = "Cricket Latest News | Cricket Updates | Match Report - Sportyclub Live";
        $content['url'] = "https://ios.app99877.com/cricket/news/details/" . $newsId;
        $content['keywords'] = "Cricket News,Live Blogs,Live cricket blogs,cricket breaking news,cricket latest news,Cricket match schedule,Live match updates, Cricket breaking news, IPL News, PSL News, BBL News, BPL News";

        return [
            'contents' => $content,
        ];
    }
}
