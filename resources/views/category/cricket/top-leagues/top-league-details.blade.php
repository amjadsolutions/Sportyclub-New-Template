@extends('layouts.main')
@section('page-styles')
    <meta charset="UTF-8">

    <meta name="robots" content="index, follow">
    <meta name="viewport" content="width=device-width, user-scalable=no">
    {{-- begin::og title --}}
    <meta property="og:title" content="Watch Live Cricket Matches And Catch Latest Cricket News On SportyClub" />
    <meta property="og:description"
        content="Watch Live,Upcoming,Finished Cricket Matches And Catch Latest and Breaking Cricket News On SportyClub. Join us now!" />
    <meta property="og:image" content="{{ asset('img/sporty_club_logo.png') }}" />
    <meta property="og:url" content="https://sportyclub.live/cricket" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="SportyClub" />
    {{-- end::og title --}}
    {{-- begin::meta --}}
    <meta name="description"
        content="Watch Live,Upcoming,Finished Cricket Matches And Catch Latest and Breaking Cricket News On SportyClub. Join us now!">
    <meta name="keywords"
        content="live cricket match, live match, cricket online streaming, sportyclub, sportyclub live, News, Cricket News, Latest Cricket News, Cricket Breaking News, ICC, PSL, IPL, BigBash, LPL, BPL">
    <title>Watch Live Cricket Matches And Catch Latest Cricket News On SportyClub</title>
    <link rel="canonical" href="https://sportyclub.live/cricket">

    <link rel="stylesheet" href="{{ asset('css/owl-carousel/owl.carousel.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/owl-carousel/owl.theme.default.min.css') }}">
    {{-- end::meta tags --}}
@endsection
@section('content')
    <top-league-details />
@endsection
