@extends('layouts.main')

@section('page-styles')
    <!-- begin::meta -->
    <title>Today's Cricket Match | Live Cricket Match | Cricket Update | Cricket News | Sportyclub Live</title>
    <meta name="title"
        content="Today's Cricket Match | Live Cricket Match |  Cricket Update | Cricket News | Sportyclub Live">
    <meta name="description"
        content="Get live cricket scores, cricket updates of upcoming & finished International, domestic , leagues and T20 matches. Catch all the latest news about cricket on Sportyclub Live.">
    <meta name="keywords"
        content="cricket news, latest news, latest cricket news, cricket news headlines,today's match live score, cricket update,today cricket scores,latest cricket scores,cricket result,cricket live update, icc cricket news, psl news, ipl news, bigbash news, t10 news, today live cricket match, live cricket match">
    <link rel="canonical" href="http://sportyclub.live">
    <!-- begin::propery -->
    <meta property="og:type" content="website">
    <meta property="og:title"
        content="Today's Cricket Match | Live Cricket Match |  Cricket Update | Cricket News | Sportyclub Live">
    <meta property="og:description"
        content="Get live cricket scores, cricket updates of upcoming & finished International, domestic , leagues and T20 matches. Catch all the latest news about cricket on Sportyclub Live.">
    <meta property="og:locale" content="en_US">
    <meta property="og:image" content="https://sportyclub.live/img/sporty_club.png">
    <meta property="og:url" content="http://sportyclub.live">
    <meta property="fb:pages" content="107469275516888">
    <!-- end::property -->
    <!-- end::meta -->
@endsection
@section('content')
    {{-- begin::live match list component --}}
    <live-match-list />
    {{-- end::live matchList component --}}
@endsection
