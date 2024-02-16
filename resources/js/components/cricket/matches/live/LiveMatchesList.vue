<template>
    <!-- begin::slider -->
    <div class="result-div1 mt-5" style="margin-top: 0px !important">
        <div class="container">
            <!-- begin::loader section -->
            <div
                class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 g-4 g-lg-5 mt-2"
                v-if="loading"
            >
                <div class="col-lg-12 col-xl-12">
                    <h3
                        class="comon-heading m-0"
                        style="
                            color: rgb(7, 31, 64);
                            font-family: Barlow Condensed, sans-seri0 !important;
                            font-weight: 600 !important;
                        "
                    >
                        Loading...
                        <img
                            src="/img/spinner.gif"
                            alt="Image not Found"
                            style="width: 40px; margin-top: 0px !important"
                        />
                    </h3>
                </div>
            </div>
            <!-- end::loader secton -->
            <div class="row gx-lg-5 desktop-version" v-if="!loading">
                <br />
                <div class="col-lg-12 col-xl-12">
                    <!-- begin::page header -->
                    <div
                        class="d-flex justify-content-between align-items-center"
                    >
                        <h2
                            class="comon-heading m-0"
                            style="
                                color: rgb(7, 31, 64);
                                font-family: Barlow Condensed, sans-seri0 !important;
                                font-weight: 600 !important;
                            "
                        >
                            Today Fixtures Tests
                        </h2>
                        <a
                            href="cricket/today/live/match/list"
                            class="btn all-cm-btn"
                        >
                            Live Matches
                        </a>
                    </div>
                    <!-- end::page header -->
                </div>
                <div class="col-lg-12 col-xl-12" v-if="!loading">
                    <!-- begin::page header -->
                    <div
                        class="d-flex justify-content-between align-items-center"
                    >
                        <h4
                            style="
                                color: rgb(7, 31, 64);
                                font-family: Barlow Condensed, sans-seri0 !important;
                                font-weight: 300 !important;
                            "
                        >
                            <template
                                v-for="(league, index) in liveLeaguesList"
                                :key="league"
                            >
                                <a
                                    href=""
                                    v-if="index < 5"
                                    class="btn all-cm-btn"
                                    style="cursor: pointer"
                                >
                                    {{ league }}
                                </a>

                                &nbsp;
                            </template>
                        </h4>
                    </div>
                    <!-- end::page header -->
                    <div
                        class="row row-cols-1 row-cols-lg-2 gy-5 g-lg-4 mt-0 mt-lg-0"
                    >
                        <Carousel autoplay="0" :breakpoints="breakpoints">
                            <!-- begin::slide -->
                            <Slide v-for="match in matchList" :key="match.id">
                                <div class="col-lg-12">
                                    <a
                                        style="cursor: pointer"
                                        class="items-matchs"
                                        v-on:click="
                                            getMatchDetails(
                                                match.id,
                                                match.homeTeam.slug,
                                                match.awayTeam.slug,
                                                match.status.code
                                            )
                                        "
                                    >
                                        <span
                                            v-if="
                                                liveMatches.includes(
                                                    match.status.code
                                                )
                                            "
                                            style="
                                                position: absolute;
                                                left: 12px;
                                            "
                                        >
                                            <img
                                                src="/img/live/livelive.gif"
                                                alt="Image not Found"
                                                width="50"
                                                style="
                                                    margin-top: 5px !important;
                                                "
                                            />
                                        </span>
                                        <figure class="m-0 bg-mc-1">
                                            <img
                                                src="https://oxentictemplates.in/templatemonster/soocer/images/bg-mc.jpg"
                                                alt="bg-ms"
                                            />
                                        </figure>
                                        <div class="matches-div-home">
                                            <h5>
                                                <span class="d-block">
                                                    <small
                                                        v-if="
                                                            liveMatches.includes(
                                                                match.status
                                                                    .code
                                                            )
                                                        "
                                                    >
                                                        <span
                                                            style="
                                                                color: white;
                                                                overflow: hidden;
                                                                display: -webkit-box;
                                                                -webkit-box-orient: vertical;
                                                                -webkit-line-clamp: 1; /* start showing ellipsis when 3rd line is reached */
                                                                white-space: pre-wrap;
                                                            "
                                                        >
                                                            {{
                                                                match.tournament
                                                                    .name
                                                            }}
                                                        </span>
                                                        <span
                                                            style="
                                                                font-size: 15px;
                                                            "
                                                        >
                                                            {{
                                                                match.status
                                                                    .description
                                                            }}
                                                        </span>
                                                    </small>

                                                    <small
                                                        style="color: white"
                                                        v-else-if="
                                                            finishMatches.includes(
                                                                match.status
                                                                    .code
                                                            )
                                                        "
                                                    >
                                                        <span
                                                            style="
                                                                font-size: 15px;
                                                            "
                                                        >
                                                            {{
                                                                match.note
                                                            }}</span
                                                        >
                                                    </small>

                                                    <small
                                                        style="color: white"
                                                        v-else-if="
                                                            liveendedMatches.includes(
                                                                match.status
                                                                    .code
                                                            )
                                                        "
                                                    >
                                                        <span
                                                            style="
                                                                font-size: 15px;
                                                            "
                                                        >
                                                            {{
                                                                match.status
                                                                    .description
                                                            }}
                                                        </span>
                                                    </small>
                                                    <small
                                                        style="color: white"
                                                        v-else
                                                    >
                                                        <p>
                                                            {{
                                                                match.tournament
                                                                    .name
                                                            }}
                                                        </p>
                                                        <span
                                                            style="
                                                                font-size: 15px;
                                                            "
                                                        >
                                                            {{
                                                                getMatchTime(
                                                                    match.startTimestamp
                                                                )
                                                            }}
                                                        </span>
                                                    </small>
                                                </span>
                                            </h5>
                                            <div
                                                class="d-flex align-items-center justify-content-between"
                                            >
                                                <figure>
                                                    <img
                                                        :src="
                                                            'https://api.sofascore.app/api/v1/team/' +
                                                            match.homeTeam.id +
                                                            '/image'
                                                        "
                                                        alt="cl2"
                                                    />
                                                    <figcaption
                                                        style="
                                                            width: 130% !important;
                                                        "
                                                    >
                                                        <span
                                                            style="
                                                                font-size: 16px !important;
                                                                color: white;
                                                                overflow: hidden;
                                                                display: -webkit-box;
                                                                -webkit-box-orient: vertical;
                                                                -webkit-line-clamp: 3; /* start showing ellipsis when 3rd line is reached */
                                                                white-space: pre-wrap;
                                                            "
                                                        >
                                                            {{
                                                                match.homeTeam
                                                                    .shortName
                                                            }}
                                                        </span>
                                                        <small
                                                            style="
                                                                font-size: 13px !important;
                                                            "
                                                        >
                                                            {{
                                                                match.homeScore
                                                                    .innings &&
                                                                match.homeScore
                                                                    .innings
                                                                    .inning1
                                                                    ? match
                                                                          .homeScore
                                                                          .innings
                                                                          .inning1
                                                                          .score +
                                                                      "/" +
                                                                      match
                                                                          .homeScore
                                                                          .innings
                                                                          .inning1
                                                                          .wickets
                                                                    : "" + ""
                                                            }}
                                                            {{
                                                                match.homeScore
                                                                    .innings &&
                                                                match.homeScore
                                                                    .innings
                                                                    .inning1
                                                                    ? "(" +
                                                                      match
                                                                          .homeScore
                                                                          .innings
                                                                          .inning1
                                                                          .overs +
                                                                      ")"
                                                                    : "" + ""
                                                            }}
                                                        </small>
                                                    </figcaption>
                                                </figure>

                                                <h5 style="color: white">VS</h5>
                                                <figure>
                                                    <img
                                                        :src="
                                                            'https://api.sofascore.app/api/v1/team/' +
                                                            match.awayTeam.id +
                                                            '/image'
                                                        "
                                                        alt="cl2"
                                                    />
                                                    <figcaption
                                                        style="
                                                            width: 130% !important;
                                                        "
                                                    >
                                                        <span
                                                            style="
                                                                font-size: 16px !important;
                                                                color: white;
                                                                overflow: hidden;
                                                                display: -webkit-box;
                                                                -webkit-box-orient: vertical;
                                                                -webkit-line-clamp: 3; /* start showing ellipsis when 3rd line is reached */
                                                                white-space: pre-wrap;
                                                            "
                                                        >
                                                            {{
                                                                match.awayTeam
                                                                    .shortName
                                                            }}
                                                        </span>
                                                        <small
                                                            style="
                                                                font-size: 13px !important;
                                                            "
                                                        >
                                                            {{
                                                                match.awayScore
                                                                    .innings &&
                                                                match.awayScore
                                                                    .innings
                                                                    .inning1
                                                                    ? match
                                                                          .awayScore
                                                                          .innings
                                                                          .inning1
                                                                          .score +
                                                                      "/" +
                                                                      match
                                                                          .awayScore
                                                                          .innings
                                                                          .inning1
                                                                          .wickets
                                                                    : "" + ""
                                                            }}
                                                            {{
                                                                match.awayScore
                                                                    .innings &&
                                                                match.awayScore
                                                                    .innings
                                                                    .inning1
                                                                    ? "(" +
                                                                      match
                                                                          .awayScore
                                                                          .innings
                                                                          .inning1
                                                                          .overs +
                                                                      ")"
                                                                    : "" + ""
                                                            }}
                                                        </small>
                                                    </figcaption>
                                                </figure>
                                            </div>
                                            <h5>
                                                <span
                                                    style="
                                                        color: white;
                                                        overflow: hidden;
                                                        display: -webkit-box;
                                                        -webkit-box-orient: vertical;
                                                        -webkit-line-clamp: 2; /* start showing ellipsis when 3rd line is reached */
                                                        white-space: pre-wrap;
                                                        font-size: 15px !important;
                                                    "
                                                >
                                                    {{ match.season.name }}
                                                </span>
                                            </h5>
                                        </div>
                                    </a>
                                </div>
                            </Slide>
                            <!-- end::slide -->
                            <template #addons>
                                <Navigation />
                            </template>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <br />
    </div>
    <!-- end::slider -->
    <!-- begin::matches & latest cricket news -->
    <section class="body-part-total float-start w-100" v-if="!loading">
        <div
            class="playerrs-div-total py-5"
            style="padding-top: 0px !important"
        >
            <div class="golaskipers-div">
                <div class="container">
                    <!-- begin::live & finished matches matches -->
                    <section class="body-part-total float-start w-100">
                        <div
                            class="schedule-main-div my-5"
                            style="margin-top: 0px !important"
                        >
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-8">
                                        <!-- begin::live matches -->
                                        <div
                                            class="table-div-left mt-4"
                                            v-if="liveMatchList.length > 0"
                                        >
                                            <h2
                                                class="comon-heading m-0"
                                                style="
                                                    color: rgb(7, 31, 64);
                                                    font-family: Barlow
                                                            Condensed,
                                                        sans-seri0 !important;
                                                    font-weight: 600 !important;
                                                "
                                            >
                                                Today Live Matches
                                            </h2>
                                            <br />
                                            <div
                                                id="seri3_wrapper"
                                                class="dataTables_wrapper"
                                            >
                                                <table
                                                    id="seri3"
                                                    class="display dataTable"
                                                    style="width: 100%"
                                                    aria-describedby="seri3_info"
                                                >
                                                    <!-- begin::table header -->
                                                    <thead>
                                                        <tr>
                                                            <th
                                                                class="sorting sorting_asc"
                                                                tabindex="0"
                                                                aria-controls="seri3"
                                                                rowspan="1"
                                                                colspan="1"
                                                                aria-sort="ascending"
                                                                aria-label="Date: activate to sort column descending"
                                                                style="
                                                                    width: 123px;
                                                                "
                                                            >
                                                                Date
                                                            </th>
                                                            <th
                                                                class="sorting"
                                                                tabindex="0"
                                                                aria-controls="seri3"
                                                                rowspan="1"
                                                                colspan="1"
                                                                aria-label="Event: activate to sort column ascending"
                                                                style="
                                                                    width: 287px;
                                                                "
                                                            >
                                                                Event
                                                            </th>

                                                            <th
                                                                class="sorting"
                                                                tabindex="0"
                                                                aria-controls="seri3"
                                                                rowspan="1"
                                                                colspan="1"
                                                                aria-label="League: activate to sort column ascending"
                                                                style="
                                                                    width: 330px;
                                                                "
                                                            >
                                                                Result
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <!-- end::table header -->
                                                    <!-- begin::tbody -->
                                                    <tbody>
                                                        <template
                                                            v-for="match in liveMatchList"
                                                            :key="match.id"
                                                        >
                                                            <tr
                                                                class="odd"
                                                                v-on:click="
                                                                    getMatchDetails(
                                                                        match.id,
                                                                        match
                                                                            .homeTeam
                                                                            .slug,
                                                                        match
                                                                            .awayTeam
                                                                            .slug,
                                                                        match
                                                                            .status
                                                                            .code
                                                                    )
                                                                "
                                                            >
                                                                <td
                                                                    class="sorting_1"
                                                                >
                                                                    <img
                                                                        src="/img/live/livelive.gif"
                                                                        alt="Image not Found"
                                                                        width="50"
                                                                        style="
                                                                            margin-top: 5px !important;
                                                                        "
                                                                    />
                                                                </td>
                                                                <td>
                                                                    <a
                                                                        class="btn ms-ti"
                                                                    >
                                                                        {{
                                                                            match
                                                                                .homeTeam
                                                                                .shortName
                                                                        }}
                                                                        <img
                                                                            class="event-teams-logo"
                                                                            :src="
                                                                                'https://api.sofascore.app/api/v1/team/' +
                                                                                match
                                                                                    .homeTeam
                                                                                    .id +
                                                                                '/image/small'
                                                                            "
                                                                            alt=""
                                                                        />
                                                                        &nbsp;
                                                                        <span
                                                                            >vs</span
                                                                        >
                                                                        &nbsp;
                                                                        <img
                                                                            class="event-teams-logo"
                                                                            :src="
                                                                                'https://api.sofascore.app/api/v1/team/' +
                                                                                match
                                                                                    .awayTeam
                                                                                    .id +
                                                                                '/image/small'
                                                                            "
                                                                            alt=""
                                                                        />
                                                                        {{
                                                                            match
                                                                                .awayTeam
                                                                                .shortName
                                                                        }}
                                                                    </a>
                                                                </td>

                                                                <td>
                                                                    {{
                                                                        match
                                                                            .tournament
                                                                            .name
                                                                    }}
                                                                </td>
                                                            </tr>
                                                        </template>
                                                    </tbody>
                                                    <!-- end::tbody -->
                                                </table>
                                            </div>
                                        </div>
                                        <!-- end::live matches -->
                                        <br />
                                        <!-- begin:: finished matches -->
                                        <div class="table-div-left mt-4">
                                            <h2
                                                class="comon-heading m-0"
                                                style="
                                                    color: rgb(7, 31, 64);
                                                    font-family: Barlow
                                                            Condensed,
                                                        sans-seri0 !important;
                                                    font-weight: 600 !important;
                                                "
                                            >
                                                Today Finished Matches
                                            </h2>
                                            <br />
                                            <div
                                                id="seri3_wrapper"
                                                class="dataTables_wrapper"
                                            >
                                                <table
                                                    id="seri3"
                                                    class="display dataTable"
                                                    style="width: 100%"
                                                    aria-describedby="seri3_info"
                                                >
                                                    <!-- begin::table header -->
                                                    <thead>
                                                        <tr>
                                                            <th
                                                                class="sorting sorting_asc"
                                                                tabindex="0"
                                                                aria-controls="seri3"
                                                                rowspan="1"
                                                                colspan="1"
                                                                aria-sort="ascending"
                                                                aria-label="Date: activate to sort column descending"
                                                                style="
                                                                    width: 123px;
                                                                "
                                                            >
                                                                Date
                                                            </th>
                                                            <th
                                                                class="sorting"
                                                                tabindex="0"
                                                                aria-controls="seri3"
                                                                rowspan="1"
                                                                colspan="1"
                                                                aria-label="Event: activate to sort column ascending"
                                                                style="
                                                                    width: 287px;
                                                                "
                                                            >
                                                                Event
                                                            </th>

                                                            <th
                                                                class="sorting"
                                                                tabindex="0"
                                                                aria-controls="seri3"
                                                                rowspan="1"
                                                                colspan="1"
                                                                aria-label="League: activate to sort column ascending"
                                                                style="
                                                                    width: 330px;
                                                                "
                                                            >
                                                                Result
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <!-- end::table header -->
                                                    <!-- begin::tbody -->
                                                    <tbody>
                                                        <template
                                                            v-for="match in finishedMatchList"
                                                            :key="match.id"
                                                        >
                                                            <tr
                                                                class="odd"
                                                                v-if="
                                                                    match.note
                                                                "
                                                                v-on:click="
                                                                    getMatchDetails(
                                                                        match.id,
                                                                        match
                                                                            .homeTeam
                                                                            .slug,
                                                                        match
                                                                            .awayTeam
                                                                            .slug,
                                                                        match
                                                                            .status
                                                                            .code
                                                                    )
                                                                "
                                                            >
                                                                <td
                                                                    class="sorting_1"
                                                                >
                                                                    {{
                                                                        getMatchDate(
                                                                            match.startTimestamp
                                                                        )
                                                                    }}
                                                                </td>
                                                                <td>
                                                                    <a
                                                                        class="btn ms-ti"
                                                                    >
                                                                        {{
                                                                            match
                                                                                .homeTeam
                                                                                .shortName
                                                                        }}
                                                                        <img
                                                                            class="event-teams-logo"
                                                                            :src="
                                                                                'https://api.sofascore.app/api/v1/team/' +
                                                                                match
                                                                                    .homeTeam
                                                                                    .id +
                                                                                '/image/small'
                                                                            "
                                                                            alt=""
                                                                        />
                                                                        &nbsp;
                                                                        <span
                                                                            >vs</span
                                                                        >
                                                                        &nbsp;
                                                                        <img
                                                                            class="event-teams-logo"
                                                                            :src="
                                                                                'https://api.sofascore.app/api/v1/team/' +
                                                                                match
                                                                                    .awayTeam
                                                                                    .id +
                                                                                '/image/small'
                                                                            "
                                                                            alt=""
                                                                        />
                                                                        {{
                                                                            match
                                                                                .awayTeam
                                                                                .shortName
                                                                        }}
                                                                    </a>
                                                                </td>

                                                                <td>
                                                                    {{
                                                                        match.note
                                                                    }}
                                                                </td>
                                                            </tr>
                                                        </template>
                                                    </tbody>
                                                    <!-- end::tbody -->
                                                </table>
                                            </div>
                                        </div>
                                        <!-- end:: finished matchess -->
                                    </div>
                                    <!-- begin::top leagues -->
                                    <div class="col-lg-4 mt-4">
                                        <div class="table-div-left">
                                            <h4>Top Leagues</h4>
                                            <div
                                                id="seri2_wrapper"
                                                class="dataTables_wrapper"
                                            >
                                                <div class="dataTables_scroll">
                                                    <div
                                                        class="dataTables_scrollHead"
                                                        style="
                                                            overflow: hidden;
                                                            position: relative;
                                                            border: 0px;
                                                            width: 100%;
                                                        "
                                                    >
                                                        <div
                                                            class="dataTables_scrollHeadInner"
                                                            style="
                                                                box-sizing: content-box;
                                                            "
                                                        >
                                                            <table
                                                                class="display dataTable"
                                                            >
                                                                <!-- begin::tbody -->
                                                                <tbody>
                                                                    <tr
                                                                        style="
                                                                            cursor: pointer;
                                                                        "
                                                                        class="odd"
                                                                        v-for="league in topLeaguesList"
                                                                        :key="
                                                                            league.id
                                                                        "
                                                                        v-on:click="
                                                                            getTopLeagueDetails(
                                                                                league.id,
                                                                                league.slug
                                                                            )
                                                                        "
                                                                    >
                                                                        <td>
                                                                            <img
                                                                                :src="
                                                                                    'https://api.sofascore.app/api/v1/unique-tournament/' +
                                                                                    league.id +
                                                                                    '/image'
                                                                                "
                                                                                width="40"
                                                                                style="
                                                                                    float: left !important;
                                                                                "
                                                                            />

                                                                            <b
                                                                                style="
                                                                                    float: left !important;
                                                                                    margin-left: 7px !important;
                                                                                    margin-top: 10px !important;
                                                                                "
                                                                            >
                                                                                {{
                                                                                    league.nameEn
                                                                                }}</b
                                                                            >
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                                <!-- end::tbody -->
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end::top leagues -->
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- end::live  & finished matches -->

                    <!-- begin::news list -->

                    <div
                        class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mt-0 mt-lg-0 g-4 g-lg-4"
                    >
                        <div
                            class="col"
                            v-for="news in newsList"
                            :key="news.id"
                            v-on:click="getNewsDetails(news.id)"
                        >
                            <a class="cmonon-plyaars">
                                <!-- begin::image -->
                                <figure>
                                    <img
                                        :src="
                                            'https://ios.app99877.com/' +
                                            news.image
                                        "
                                        alt="gl1"
                                    />
                                </figure>
                                <!-- end::image -->
                                <!-- begin::title -->
                                <div
                                    class="d-flex align-items-center justify-content-between"
                                >
                                    <h5
                                        style="
                                            display: -webkit-box;
                                            -webkit-line-clamp: 3; /* Limit to 3 lines */
                                            -webkit-box-orient: vertical;
                                            overflow: hidden;
                                        "
                                    >
                                        {{ news.title }}
                                    </h5>
                                </div>
                                <!-- end::title -->
                            </a>
                        </div>
                    </div>
                    <!-- end::news list -->
                </div>
            </div>
        </div>
    </section>
    <!-- end::latest cricket news -->
    <!-- begin::footer -->
    <span v-if="!loading">
        <footer class="py-5 float-start w-100">
            <div class="container">
                <Footer />
            </div>
        </footer>
    </span>
    <!-- end::footer -->
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import Footer from "./../../../partials/commons/Footer.vue";

export default defineComponent({
    name: "Autoplay",
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,

        Footer,
    },

    // Other component options and methods

    data() {
        return {
            liveLeaguesList: null,
            liveMatches: [20, 21, 22, 23, 24, 45],
            finishMatches: [100],
            upcomingMatches: [0],
            liveendedMatches: [143],
            matchList: null,
            liveMatchList: null,
            finishedMatchList: null,
            topLeaguesList: null,
            newsList: null,
            loading: true,
            breakpoints: {
                300: {
                    itemsToShow: 1,
                    snapAlign: "center",
                },
                // 700px and up
                700: {
                    itemsToShow: 1,
                    snapAlign: "center",
                },
                // 1024 and up
                1024: {
                    itemsToShow: 4,
                    snapAlign: "start",
                },
            },

            dayNum: 1,
        };
    },
    created() {
   
        this.getNewsList(1);
        this.getLiveMatchList();
        this.getTodayMatchList();
        this.getFinishedMatchList();
        this.getTopLeaguesList();

        setInterval(() => {
            this.getTodayMatchList();
        }, 3000);
    },
    methods: {
        // method to get Live Matches
        getLiveMatchList() {
            axios
                .get(
                    `${this.BASE_SERVER_URI}/api/cricket/sofascore/today/live/matches`
                )
                .then((response) => {
                    this.liveMatchList = response.data.liveMatches.events;
                    this.liveLeaguesList = response.data.liveLeagues;
                    console.log(this.liveMatchList);
                    this.loading = false;
                });
        },
        // method to return live matches
        getTodayMatchList() {
            const date = new Date();
            const year = date.getFullYear();
            const month = `0${date.getMonth() + 1}`.slice(-2);
            const day = `0${date.getDate()}`.slice(-2);
            const formattedDate = `${year}-${month}-${day}`;

            axios
                .get(
                    `${this.BASE_SERVER_URI}/api/cricket/sofascore/today/all/matches/${formattedDate}`
                )
                .then((response) => {
                    this.matchList = response.data.events;
                });
        },

        // method to get match time
        getMatchTime(timeStamp) {
            const date = new Date(timeStamp * 1000);

            return date.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
            });
        },
        // method to get match date
        getMatchDate(timeStamp) {
            const date = new Date(timeStamp * 1000);
            const options = { year: "numeric", month: "long", day: "numeric" };
            return new Intl.DateTimeFormat("en-US", options).format(date);
        },

        // method to get yesterday matchList
        getFinishedMatchList() {
            // get yeasterday date
            const date = new Date();
            const previous = new Date(date.getTime());
            previous.setDate(date.getDate() - 1);
            const year = previous.getFullYear();
            const month = `0${previous.getMonth() + 1}`.slice(-2);
            const day = `0${previous.getDate()}`.slice(-2);
            const formattedDate = `${year}-${month}-${day}`;

            axios
                .get(
                    `${this.BASE_SERVER_URI}/api/cricket/sofascore/today/all/matches/${formattedDate}`
                )
                .then((response) => {
                    this.finishedMatchList = response.data.events;
                });
        },

        // method to return top leagues list
        getTopLeaguesList() {
            axios
                .get(
                    `${this.BASE_SERVER_URI}/api/cricket/sofascore/topLeagues/list`
                )
                .then((response) => {
                    this.topLeaguesList = response.data.topLeagues;
                });
        },

        // method to render live,upcoming or finish match page.
        getMatchDetails(id, homeTeam, awayTeam, status) {
            let team = homeTeam.toLowerCase() + "-vs-" + awayTeam.toLowerCase();

            if (
                this.liveMatches.includes(status) ||
                this.liveendedMatches.includes(status)
            ) {
                window.open(
                    "/cricket/today/live/match/" + team + "/" + id,
                    "_blank"
                );
            } else if (this.upcomingMatches.includes(status)) {
                window.open(
                    "/cricket/today/upcoming/match/" + team + "/" + id,
                    "_blank"
                );
            } else if (this.finishMatches.includes(status)) {
                window.open(
                    "/cricket/today/previous/match/" + team + "/" + id,
                    "_blank"
                );
            }
        },

        // method to get topLeague Details
        getTopLeagueDetails(leagueId, league) {
            window.open(
                "cricket/top/league/details/" + league + "/" + leagueId,
                "_blank"
            );
        },
        // method to get news list from API
        getNewsList(pageNumber) {
            axios
                .get(
                    `${this.BASE_SERVER_URI}/api/cricket/sofascore/news/list?pageNumber=${pageNumber}`
                )
                .then((response) => {
                    this.newsList = response.data.cricketNewsList;
                });
        },
        // method to get news details from API test
        getNewsDetails(newsId) {
            window.open("/cricket/news/details/" + newsId, "_blank");
        },
    },
});
</script>
<style>
.carousel {
    width: 100% !important;
}

.carousel__prev {
    color: white;
    padding: 10px;
    background-color: red;
    margin-right: 0px;
    border-radius: 50%;
    margin-left: 0px !important;
}

.carousel__next {
    color: white;
    padding: 10px;
    background-color: red;
    margin-right: 0px;
    border-radius: 50%;
    margin-left: 0px !important;
    font-size: 10px;
}

.Footer__Container-sc-tvqd7y-0 {
    display: none;
}

/* Custom, iPhone Retina */
@media only screen and (min-width: 320px) {
    .items-matchs {
        width: 100%;
    }
    .mobile-version {
        display: block;
    }
    .desktop-version {
        display: none;
    }
}

/* Extra Small Devices, Phones */
@media only screen and (min-width: 480px) {
    .items-matchs {
        width: 100%;
    }
    .mobile-version {
        display: block;
    }
    .desktop-version {
        display: none;
    }
}

/* Small Devices, Tablets */
@media only screen and (min-width: 768px) {
    .items-matchs {
        width: 100%;
    }
    .mobile-version {
        display: block;
    }
    .desktop-version {
        display: none;
    }
}

/* Medium Devices, Desktops */
@media only screen and (min-width: 992px) {
    .items-matchs {
        width: 100%;
    }
    .mobile-version {
        display: none;
    }
    .desktop-version {
        display: block;
    }
}

/* Large Devices, Wide Screens */
@media only screen and (min-width: 1200px) {
    .items-matchs {
        width: 95%;
    }
    .mobile-version {
        display: none;
    }
    .desktop-version {
        display: block;
    }
}
@media only screen and (max-width: 600px) {
    .event-teams-logo {
        display: none;
    }
    .mobile-version {
        display: none;
    }
    .desktop-version {
        display: block;
    }
}
</style>
