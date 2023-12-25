{{-- begin::desktop version --}}
<header class="float-start w-100">
    {{-- style="margin-top: -4px !important" --}}
    <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container">
            {{-- logo --}}
            <a class="navbar-brand" href="{{ route('/') }}">
                <img src="/img/sporty_club.png" alt="logo" style="margin-top:-44px;width:60%">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRightmobile">
                <i class="fas fa-bars"></i>
            </button>`
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                {{-- begin::tabs --}}
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link " href="{{ route('cricket/today/live/match/list') }}"><b
                                style="color:red">LIVE<span class="blink_me" style="margin-left: 5px">'</span></b></a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link " href="{{ route('cricket/upcoming/matches') }}"><b>Upcoming<span
                                    style="margin-left: 5px">Matches</span></b></a>
                    </li>

                    <li class="nav-item">

                        <a class="nav-link " href="{{ route('cricket/previous/matches') }}"><b>Previous<span
                                    style="margin-left: 5px">Matches</span></b></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="{{ route('cricket/news/list') }}"><b>Latest<span
                                    style="margin-left: 5px">News</span></b></a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link " href="{{ route('cricket/teams/list') }}"><b>Popular<span
                                    style="margin-left: 5px">Teams</span></b></a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link " href="{{ route('cricket/top/league/list') }}"><b>Popular<span
                                    style="margin-left: 5px">Leagues</span></b></a>
                    </li>

                </ul>
                {{-- end::tabs --}}
            </div>
        </div>
    </nav>
</header>
{{-- end::desktop version --}}
{{-- begin::mobile version --}}
<div class="offcanvas offcanvas-end" id="offcanvasRightmobile" aria-modal="true" role="dialog"
    style="visibility: visible; background-color: rgb(7,31,64) !important">
    {{-- begin::dismisal button --}}
    <div class="offcanvas-header py-0">
        <button type="button" class="close-menu mt-4" data-bs-dismiss="offcanvas"
            style="background-color: white !important">
            <svg style="background-color: white !important" xmlns="http://www.w3.org/2000/svg" width="16"
                height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                <path
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z">
                </path>
            </svg>
        </button>
    </div>
    {{-- end::dismisal button --}}
    <div class="offcanvas-body">
        <div class="head-contact d-block d-lg-none">
            <a href="/" class="logo-side">
                {{-- logo --}}
                <img src="/img/sporty_club.png" alt="logo" style="width: 80%">
            </a>
            {{-- begin::tabs --}}
            <div class="mobile-menu-sec mt-3">
                <ul>
                    <li>
                        <a href="{{ route('cricket/today/live/match/list') }}"
                            style="color: white;background-color: rgb(7,31,64) !important"> Live Matches </a>
                    </li>
                    <li>
                        <a href="{{ route('cricket/upcoming/matches') }}"
                            style="color: white;background-color: rgb(7,31,64) !important"> Upcoming Matches </a>
                    </li>
                    <li>
                        <a href="{{ route('cricket/previous/matches') }}"
                            style="color: white;background-color: rgb(7,31,64) !important"> Previous Matches </a>
                    </li>

                    <li>
                        <a href="{{ route('cricket/news/list') }}"
                            style="color: white;background-color: rgb(7,31,64) !important"> Latest News</a>
                    </li>
                    <li>
                        <a href="{{ route('cricket/teams/list') }}"
                            style="color: white;background-color: rgb(7,31,64) !important"> Popular Teams</a>
                    </li>
                    <li>
                        <a href="{{ route('cricket/top/league/list') }}"
                            style="color: white;background-color: rgb(7,31,64) !important"> Popular Leagues</a>
                    </li>
                </ul>
            </div>
            {{-- end::tabs --}}
            {{-- end::tabs --}}
            {{-- begin::social icons --}}
            <ul class="side-media">
                <li> <a href="https://www.facebook.com/sportyclub.lives"> <i class="fab fa-facebook-f"></i> </a> </li>
                <li> <a href="https://www.linkedin.com/in/sportyclub-live-5852392a5/"> <i class="fab fa-instagram"></i>
                    </a> </li>
                <li> <a href="https://www.instagram.com/sportyclub_live/"> <i class="fab fa-google-plus-g"></i> </a>
                </li>

            </ul>
            {{-- end::social icons --}}
        </div>
    </div>
</div>
{{-- end::mobile version --}}
