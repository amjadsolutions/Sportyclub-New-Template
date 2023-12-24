@extends('layouts.main')
@section('page-styles')
    <!-- begin::meta -->
    <title>Today's Cricket News | Internation Cricket News | Cricket Headlines | Sportyclub Live</title>
    <meta name="title" content="Today's Cricket News | Internation Cricket News | Cricket Headlines | Sportyclub Live">
    <meta name="description" content="Get latest cricket news & headlines from Sportyclub Live">
    <meta name="keywords"
        content="cricket news, latest news, latest cricket news, cricket news headlines,  icc cricket news, psl news, ipl news, bigbash news, t10 news">
    <link rel="canonical" href="http://sportyclub.live/cricket/news/list">
    <!-- begin::propery -->
    <meta property="og:type" content="website">
    <meta property="og:title"
        content="Today's Cricket News | Internation Cricket News | Cricket Headlines | Sportyclub Live">
    <meta property="og:description"
        content="Get live cricket scores, cricket updates of upcoming & finished International, domestic , leagues and T20 matches. Catch all the latest news about cricket on sportyclub.">
    <meta property="og:locale" content="en_US">
    <meta property="og:image" content="https://sportyclub.live/img/sporty_club_logo.png">
    <meta property="og:url" content="http://sportyclub.live/cricket/news/list">
    <meta property="fb:pages" content="107469275516888">
    <!-- end::property -->
    <!-- begin::item prop -->
    <meta itemprop="name"
        content="Today's Cricket Match | Live Cricket Match | Cricket Update | Cricket News | Sportyclub Live">
    <meta itemprop="description"
        content="Get live cricket scores, cricket updates of upcoming & finished International, domestic , leagues and T20 matches. Catch all the latest news about cricket on sportyclub.">
    <meta itemprop="image" content="https://sportyclub.live/img/sporty_club_logo.png">
    <meta itemprop="publisher" content="Sportyclub Live">
    <meta itemprop="url" content="http://sportyclub.live/cricket/news/list">
    <meta itemprop="editor" content="Sportyclub Live">
    <meta itemprop="headline"
        content="Today's Cricket Match | Live Cricket Match | Cricket Update | Cricket News | Sportyclub Live">
    <meta itemprop="keywords"
        content="cricket news, latest news, latest cricket news, cricket news headlines,  icc cricket news, psl news, ipl news, bigbash news, t10 news">
    <!-- end::item props -->
    <!-- end::meta -->
@endsection
@section('content')
    <cricket-news-list />
@endsection
