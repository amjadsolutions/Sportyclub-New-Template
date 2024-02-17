<template>
    <section class="section section-md bg-white">
        <div class="container">
            <div class="row row-50">
                <!-- begin::loader section -->
                <h2
                    v-if="loading"
                    class="comon-heading mt-5"
                    style="
                        color: rgb(7, 31, 64);
                        font-family: Barlow Condensed, sans-seri0 !important;
                        font-weight: 600 !important;
                        margin-top: 10px !important;
                    "
                >
                    Loading...
                    <img
                        src="/img/spinner.gif"
                        alt="Image not Found"
                        style="width: 40px; margin-top: 0px !important"
                    />
                </h2>
                <!-- end::loader secton -->
                <!-- begin::live match section -->
                <section class="body-part-total float-start w-100">
                    <div
                        class="our-history-div"
                        style="margin-top: 0px !important"
                    >
                        <div
                            class="tab-content mna-bg"
                            id="myTabContent"
                            style="background-color: white !important"
                        >
                            <div class="container">
                                <div
                                    class="tab-pane fade show active"
                                    id="home"
                                    role="tabpanel"
                                >
                                    <!-- begin::server buttons -->
                                    <span>
                                        <ul
                                            class="nav nav-pills mb-3"
                                            id="pills-tab"
                                            role="tablist"
                                        >
                                            <li
                                                class="nav-item"
                                                role="presentation"
                                                v-on:click="
                                                    changeServer(
                                                        'https://crichdstreaming.xyz/embed2.php?id=ptvsp'
                                                    )
                                                "
                                            >
                                                <button
                                                    class="nav-link active"
                                                    id="pills-home-tab"
                                                    data-bs-toggle="pill"
                                                    data-bs-target="#yd-hom1"
                                                    type="button"
                                                    role="tab"
                                                >
                                                    <i
                                                        class="fas fa-calendar-alt"
                                                    ></i>
                                                    Server 1
                                                </button>
                                            </li>
                                            <li
                                                class="nav-item"
                                                role="presentation"
                                                v-on:click="
                                                    changeServer(
                                                        '//stream.crichd.vip/update/skys1.php'
                                                    )
                                                "
                                            >
                                                <button
                                                    class="nav-link"
                                                    id="pills-profile-tab"
                                                    data-bs-toggle="pill"
                                                    data-bs-target="#yd-hom2"
                                                    type="button"
                                                    role="tab"
                                                >
                                                    <i
                                                        class="fas fa-calendar-alt"
                                                    ></i>
                                                    Server 2
                                                </button>
                                            </li>
                                            <li
                                                class="nav-item"
                                                role="presentation"
                                                v-on:click="
                                                    changeServer(
                                                        '//stream.crichd.vip/update/sspsl.php'
                                                    )
                                                "
                                            >
                                                <button
                                                    class="nav-link"
                                                    data-bs-toggle="pill"
                                                    data-bs-target="#yd-hom3"
                                                    type="button"
                                                    role="tab"
                                                >
                                                    <i
                                                        class="fas fa-calendar-alt"
                                                    ></i>
                                                    Server 3
                                                </button>
                                            </li>

                                            <li
                                                class="nav-item"
                                                role="presentation"
                                                v-on:click="
                                                    changeServer(
                                                        '//stream.crichd.vip/update/ssgrandstand.php'
                                                    )
                                                "
                                            >
                                                <button
                                                    class="nav-link"
                                                    data-bs-toggle="pill"
                                                    data-bs-target="#yd-hom4"
                                                    type="button"
                                                    role="tab"
                                                >
                                                    <i
                                                        class="fas fa-calendar-alt"
                                                    ></i>
                                                    Server 4
                                                </button>
                                            </li>
                                        </ul>
                                    </span>
                                    <!-- end::servers buttons -->
                                    <!-- begin::mobile version -->
                                    <div
                                        class="tab-content mobile-version"
                                        id="pills-tabContent"
                                        v-if="!loading"
                                    >
                                        <!-- begin::server 1 container -->
                                        <div
                                            class="tab-pane fade show active"
                                            id="yd-hom1"
                                            role="tabpanel"
                                        >
                                            <div
                                                class="comon-fild-ads1 d-lg-flex"
                                            >
                                                <figure
                                                    style="
                                                        width: 100% !important;
                                                        height: 400px;
                                                    "
                                                >
                                                    <iframe
                                                        gesture="media"
                                                        :src="currentServer"
                                                        height="400"
                                                        width="350"
                                                    ></iframe>
                                                </figure>
                                                <div
                                                    class="left-history"
                                                    style="
                                                        width: 100% !important;
                                                        margin-top: 10px;
                                                    "
                                                >
                                                    <div class="col-12">
                                                        <a
                                                            class="items-matchs"
                                                            style="
                                                                height: 252px !important;
                                                            "
                                                        >
                                                            <div
                                                                class="matches-div-home"
                                                            >
                                                                <h5
                                                                    style="
                                                                        margin-top: 75px !important;
                                                                    "
                                                                >
                                                                    <span
                                                                        style="
                                                                            overflow: hidden;
                                                                            display: -webkit-box;
                                                                            -webkit-box-orient: vertical;
                                                                            -webkit-line-clamp: 1; /* start showing ellipsis when 3rd line is reached */
                                                                            white-space: pre-wrap;
                                                                        "
                                                                    >
                                                                        {{
                                                                            matchDetails
                                                                                .event
                                                                                .tournament
                                                                                .name
                                                                        }}
                                                                    </span>

                                                                    <span
                                                                        class="d-block"
                                                                    >
                                                                        {{
                                                                            matchDetails
                                                                                .event
                                                                                .status
                                                                                .description
                                                                        }}</span
                                                                    >
                                                                </h5>
                                                                <div
                                                                    class="d-flex align-items-center justify-content-between"
                                                                >
                                                                    <!-- begin::home team Information -->
                                                                    <figure
                                                                        style="
                                                                            cursor: pointer;
                                                                        "
                                                                        v-on:click="
                                                                            getTeamDetails(
                                                                                matchDetails
                                                                                    .event
                                                                                    .homeTeam
                                                                                    .id,
                                                                                matchDetails
                                                                                    .event
                                                                                    .homeTeam
                                                                                    .slug
                                                                            )
                                                                        "
                                                                    >
                                                                        <img
                                                                            :src="
                                                                                'https://api.sofascore.app/api/v1/team/' +
                                                                                matchDetails
                                                                                    .event
                                                                                    .homeTeam
                                                                                    .id +
                                                                                '/image'
                                                                            "
                                                                            alt="cl2"
                                                                            style="
                                                                                width: 61%;
                                                                                height: 31%;
                                                                            "
                                                                        />
                                                                        <figcaption>
                                                                            <p
                                                                                style="
                                                                                    overflow: hidden;
                                                                                    display: -webkit-box;
                                                                                    -webkit-box-orient: vertical;
                                                                                    -webkit-line-clamp: 1; /* start showing ellipsis when 3rd line is reached */
                                                                                    white-space: pre-wrap;
                                                                                "
                                                                            >
                                                                                {{
                                                                                    matchDetails
                                                                                        .event
                                                                                        .homeTeam
                                                                                        .name
                                                                                }}
                                                                            </p>
                                                                            <p
                                                                                style="
                                                                                    font-size: 14px;
                                                                                "
                                                                                v-if="
                                                                                    matchDetails.event &&
                                                                                    matchDetails
                                                                                        .event
                                                                                        .homeScore &&
                                                                                    matchDetails
                                                                                        .event
                                                                                        .homeScore
                                                                                        .innings &&
                                                                                    matchDetails
                                                                                        .event
                                                                                        .homeScore
                                                                                        .innings
                                                                                        .inning1
                                                                                "
                                                                            >
                                                                                {{
                                                                                    matchDetails
                                                                                        .event
                                                                                        .homeScore
                                                                                        .innings
                                                                                        .inning1
                                                                                        .score +
                                                                                    "/" +
                                                                                    matchDetails
                                                                                        .event
                                                                                        .homeScore
                                                                                        .innings
                                                                                        .inning1
                                                                                        .wickets
                                                                                }}
                                                                                {{
                                                                                    "(" +
                                                                                    matchDetails
                                                                                        .event
                                                                                        .homeScore
                                                                                        .innings
                                                                                        .inning1
                                                                                        .overs +
                                                                                    ")"
                                                                                }}
                                                                            </p>

                                                                            <p
                                                                                style="
                                                                                    font-size: 14px;
                                                                                "
                                                                                v-if="
                                                                                    matchDetails.event &&
                                                                                    matchDetails
                                                                                        .event
                                                                                        .homeScore &&
                                                                                    matchDetails
                                                                                        .event
                                                                                        .homeScore
                                                                                        .innings &&
                                                                                    matchDetails
                                                                                        .event
                                                                                        .homeScore
                                                                                        .innings
                                                                                        .inning2
                                                                                "
                                                                            >
                                                                                {{
                                                                                    matchDetails
                                                                                        .event
                                                                                        .homeScore
                                                                                        .innings
                                                                                        .inning2
                                                                                        .score +
                                                                                    "/" +
                                                                                    matchDetails
                                                                                        .event
                                                                                        .homeScore
                                                                                        .innings
                                                                                        .inning2
                                                                                        .wickets
                                                                                }}
                                                                                {{
                                                                                    "(" +
                                                                                    matchDetails
                                                                                        .event
                                                                                        .homeScore
                                                                                        .innings
                                                                                        .inning2
                                                                                        .overs +
                                                                                    ")"
                                                                                }}
                                                                            </p>
                                                                            <small
                                                                                style="
                                                                                    float: right;
                                                                                "
                                                                                v-for="batter in currentBatters"
                                                                                :key="
                                                                                    batter.id
                                                                                "
                                                                            >
                                                                                <small
                                                                                    v-if="
                                                                                        batter.wicketTypeId ==
                                                                                        10
                                                                                    "
                                                                                >
                                                                                    {{
                                                                                        batter
                                                                                            .player
                                                                                            .name
                                                                                    }}</small
                                                                                ><br />
                                                                            </small>
                                                                        </figcaption>
                                                                    </figure>

                                                                    <!-- end::home team Information -->

                                                                    <h4
                                                                        style="
                                                                            margin-top: -150px !important;
                                                                        "
                                                                    >
                                                                        <span
                                                                            v-if="
                                                                                liveMatches.includes(
                                                                                    matchDetails
                                                                                        .event
                                                                                        .status
                                                                                        .code
                                                                                )
                                                                            "
                                                                        >
                                                                            <img
                                                                                src="/img/live/livelive.gif"
                                                                                alt="Image not Found"
                                                                                width="50"
                                                                                style="
                                                                                    width: 100% !important;
                                                                                    margin-top: 5px !important;
                                                                                "
                                                                            />
                                                                        </span>
                                                                        <span
                                                                            v-else
                                                                        >
                                                                            {{
                                                                                matchDetails
                                                                                    .event
                                                                                    .status
                                                                                    .description
                                                                            }}
                                                                        </span>
                                                                    </h4>

                                                                    <!-- begin::away team Information -->
                                                                    <figure
                                                                        style="
                                                                            cursor: pointer;
                                                                        "
                                                                        v-on:click="
                                                                            getTeamDetails(
                                                                                matchDetails
                                                                                    .event
                                                                                    .awayTeam
                                                                                    .id,
                                                                                matchDetails
                                                                                    .event
                                                                                    .awayTeam
                                                                                    .slug
                                                                            )
                                                                        "
                                                                    >
                                                                        <img
                                                                            :src="
                                                                                'https://api.sofascore.app/api/v1/team/' +
                                                                                matchDetails
                                                                                    .event
                                                                                    .awayTeam
                                                                                    .id +
                                                                                '/image'
                                                                            "
                                                                            alt="cl2"
                                                                            style="
                                                                                width: 61%;
                                                                                height: 31%;
                                                                            "
                                                                        />
                                                                        <figcaption>
                                                                            <p
                                                                                style="
                                                                                    overflow: hidden;
                                                                                    display: -webkit-box;
                                                                                    -webkit-box-orient: vertical;
                                                                                    -webkit-line-clamp: 1; /* start showing ellipsis when 3rd line is reached */
                                                                                    white-space: pre-wrap;
                                                                                "
                                                                            >
                                                                                {{
                                                                                    matchDetails
                                                                                        .event
                                                                                        .awayTeam
                                                                                        .name
                                                                                }}
                                                                            </p>
                                                                            <p
                                                                                style="
                                                                                    font-size: 14px;
                                                                                "
                                                                                v-if="
                                                                                    matchDetails.event &&
                                                                                    matchDetails
                                                                                        .event
                                                                                        .awayScore &&
                                                                                    matchDetails
                                                                                        .event
                                                                                        .awayScore
                                                                                        .innings &&
                                                                                    matchDetails
                                                                                        .event
                                                                                        .awayScore
                                                                                        .innings
                                                                                        .inning1
                                                                                "
                                                                            >
                                                                                {{
                                                                                    matchDetails
                                                                                        .event
                                                                                        .awayScore
                                                                                        .innings
                                                                                        .inning1
                                                                                        .score +
                                                                                    "/" +
                                                                                    matchDetails
                                                                                        .event
                                                                                        .awayScore
                                                                                        .innings
                                                                                        .inning1
                                                                                        .wickets
                                                                                }}
                                                                                {{
                                                                                    "(" +
                                                                                    matchDetails
                                                                                        .event
                                                                                        .awayScore
                                                                                        .innings
                                                                                        .inning1
                                                                                        .overs +
                                                                                    ")"
                                                                                }}
                                                                            </p>
                                                                            <p
                                                                                style="
                                                                                    font-size: 14px;
                                                                                "
                                                                                v-if="
                                                                                    matchDetails.event &&
                                                                                    matchDetails
                                                                                        .event
                                                                                        .awayScore &&
                                                                                    matchDetails
                                                                                        .event
                                                                                        .awayScore
                                                                                        .innings &&
                                                                                    matchDetails
                                                                                        .event
                                                                                        .awayScore
                                                                                        .innings
                                                                                        .inning2
                                                                                "
                                                                            >
                                                                                {{
                                                                                    matchDetails
                                                                                        .event
                                                                                        .awayScore
                                                                                        .innings
                                                                                        .inning2
                                                                                        .score +
                                                                                    "/" +
                                                                                    matchDetails
                                                                                        .event
                                                                                        .awayScore
                                                                                        .innings
                                                                                        .inning2
                                                                                        .wickets
                                                                                }}
                                                                                {{
                                                                                    "(" +
                                                                                    matchDetails
                                                                                        .event
                                                                                        .awayScore
                                                                                        .innings
                                                                                        .inning2
                                                                                        .overs +
                                                                                    ")"
                                                                                }}
                                                                            </p>
                                                                        </figcaption>
                                                                    </figure>
                                                                    <!-- end::away team Information -->
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- end::server 1 container -->
                                    </div>
                                    <!-- end::mobile version -->
                                    <!-- begin::desktop version -->
                                    <div
                                        class="tab-content desktop-version"
                                        id="pills-tabContent"
                                        v-if="!loading"
                                    >
                                        <!-- begin::server 1 container -->
                                        <div
                                            class="tab-pane fade show active"
                                            id="yd-hom1"
                                            role="tabpanel"
                                        >
                                            <div
                                                class="comon-fild-ads1 d-lg-flex"
                                            >
                                                <figure
                                                    style="
                                                        width: 60% !important;
                                                        height: 400px;
                                                    "
                                                >
                                                    <!-- begin::ifream -->
                                                    <iframe
                                                        gesture="media"
                                                        allow="encrypted-media"
                                                        :src="currentServer"
                                                        height="400"
                                                        width="750"
                                                        title="Iframe Example"
                                                    ></iframe>
                                                    <!-- end::ifream -->
                                                </figure>
                                                <div
                                                    class="left-history"
                                                    style="
                                                        width: 40% !important;
                                                    "
                                                >
                                                    <div class="col-12">
                                                        <a class="items-matchs">
                                                            <div
                                                                class="matches-div-home"
                                                            >
                                                                <h5
                                                                    style="
                                                                        margin-top: 75px !important;
                                                                    "
                                                                >
                                                                    <span
                                                                        style="
                                                                            overflow: hidden;
                                                                            display: -webkit-box;
                                                                            -webkit-box-orient: vertical;
                                                                            -webkit-line-clamp: 1; /* start showing ellipsis when 3rd line is reached */
                                                                            white-space: pre-wrap;
                                                                        "
                                                                    >
                                                                        {{
                                                                            matchDetails
                                                                                .event
                                                                                .tournament
                                                                                .name
                                                                        }}
                                                                    </span>

                                                                    <span
                                                                        class="d-block"
                                                                    >
                                                                        {{
                                                                            matchDetails
                                                                                .event
                                                                                .status
                                                                                .description
                                                                        }}</span
                                                                    >
                                                                </h5>
                                                                <div
                                                                    class="d-flex align-items-center justify-content-between"
                                                                >
                                                                    <!-- begin::home team Information -->
                                                                    <figure
                                                                        style="
                                                                            cursor: pointer;
                                                                        "
                                                                        v-on:click="
                                                                            getTeamDetails(
                                                                                matchDetails
                                                                                    .event
                                                                                    .homeTeam
                                                                                    .id,
                                                                                matchDetails
                                                                                    .event
                                                                                    .homeTeam
                                                                                    .slug
                                                                            )
                                                                        "
                                                                    >
                                                                        <img
                                                                            :src="
                                                                                'https://api.sofascore.app/api/v1/team/' +
                                                                                matchDetails
                                                                                    .event
                                                                                    .homeTeam
                                                                                    .id +
                                                                                '/image'
                                                                            "
                                                                            alt="cl2"
                                                                            style="
                                                                                width: 48%;
                                                                                height: 31%;
                                                                            "
                                                                        />
                                                                        <figcaption>
                                                                            <p
                                                                                style="
                                                                                    overflow: hidden;
                                                                                    display: -webkit-box;
                                                                                    -webkit-box-orient: vertical;
                                                                                    -webkit-line-clamp: 1; /* start showing ellipsis when 3rd line is reached */
                                                                                    white-space: pre-wrap;
                                                                                "
                                                                            >
                                                                                {{
                                                                                    matchDetails
                                                                                        .event
                                                                                        .homeTeam
                                                                                        .name
                                                                                }}
                                                                            </p>

                                                                            <p
                                                                                style="
                                                                                    font-size: 14px;
                                                                                "
                                                                                v-if="
                                                                                    matchDetails.event &&
                                                                                    matchDetails
                                                                                        .event
                                                                                        .homeScore &&
                                                                                    matchDetails
                                                                                        .event
                                                                                        .homeScore
                                                                                        .innings &&
                                                                                    matchDetails
                                                                                        .event
                                                                                        .homeScore
                                                                                        .innings
                                                                                        .inning1
                                                                                "
                                                                            >
                                                                                {{
                                                                                    matchDetails
                                                                                        .event
                                                                                        .homeScore
                                                                                        .innings
                                                                                        .inning1
                                                                                        .score +
                                                                                    "/" +
                                                                                    matchDetails
                                                                                        .event
                                                                                        .homeScore
                                                                                        .innings
                                                                                        .inning1
                                                                                        .wickets
                                                                                }}
                                                                                {{
                                                                                    "(" +
                                                                                    matchDetails
                                                                                        .event
                                                                                        .homeScore
                                                                                        .innings
                                                                                        .inning1
                                                                                        .overs +
                                                                                    ")"
                                                                                }}
                                                                            </p>

                                                                            <p
                                                                                style="
                                                                                    font-size: 14px;
                                                                                "
                                                                                v-if="
                                                                                    matchDetails.event &&
                                                                                    matchDetails
                                                                                        .event
                                                                                        .homeScore &&
                                                                                    matchDetails
                                                                                        .event
                                                                                        .homeScore
                                                                                        .innings &&
                                                                                    matchDetails
                                                                                        .event
                                                                                        .homeScore
                                                                                        .innings
                                                                                        .inning2
                                                                                "
                                                                            >
                                                                                {{
                                                                                    matchDetails
                                                                                        .event
                                                                                        .homeScore
                                                                                        .innings
                                                                                        .inning2
                                                                                        .score +
                                                                                    "/" +
                                                                                    matchDetails
                                                                                        .event
                                                                                        .homeScore
                                                                                        .innings
                                                                                        .inning2
                                                                                        .wickets
                                                                                }}
                                                                                {{
                                                                                    "(" +
                                                                                    matchDetails
                                                                                        .event
                                                                                        .homeScore
                                                                                        .innings
                                                                                        .inning2
                                                                                        .overs +
                                                                                    ")"
                                                                                }}
                                                                            </p>
                                                                            <small
                                                                                style="
                                                                                    float: right;
                                                                                "
                                                                                v-for="batter in currentBatters"
                                                                                :key="
                                                                                    batter.id
                                                                                "
                                                                            >
                                                                                <small
                                                                                    v-if="
                                                                                        batter.wicketTypeId ==
                                                                                        10
                                                                                    "
                                                                                >
                                                                                    {{
                                                                                        batter
                                                                                            .player
                                                                                            .name
                                                                                    }}</small
                                                                                ><br />
                                                                            </small>
                                                                        </figcaption>
                                                                    </figure>

                                                                    <!-- end::home team Information -->

                                                                    <h4
                                                                        style="
                                                                            margin-top: -150px !important;
                                                                        "
                                                                    >
                                                                        <span
                                                                            v-if="
                                                                                liveMatches.includes(
                                                                                    matchDetails
                                                                                        .event
                                                                                        .status
                                                                                        .code
                                                                                )
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
                                                                        <span
                                                                            v-else
                                                                        >
                                                                            {{
                                                                                matchDetails
                                                                                    .event
                                                                                    .status
                                                                                    .description
                                                                            }}
                                                                        </span>
                                                                    </h4>

                                                                    <!-- begin::away team Information -->
                                                                    <figure
                                                                        style="
                                                                            cursor: pointer;
                                                                        "
                                                                        v-on:click="
                                                                            getTeamDetails(
                                                                                matchDetails
                                                                                    .event
                                                                                    .awayTeam
                                                                                    .id,
                                                                                matchDetails
                                                                                    .event
                                                                                    .awayTeam
                                                                                    .slug
                                                                            )
                                                                        "
                                                                    >
                                                                        <img
                                                                            :src="
                                                                                'https://api.sofascore.app/api/v1/team/' +
                                                                                matchDetails
                                                                                    .event
                                                                                    .awayTeam
                                                                                    .id +
                                                                                '/image'
                                                                            "
                                                                            alt="cl2"
                                                                            style="
                                                                                width: 48%;
                                                                                height: 31%;
                                                                            "
                                                                        />
                                                                        <figcaption>
                                                                            <p
                                                                                style="
                                                                                    overflow: hidden;
                                                                                    display: -webkit-box;
                                                                                    -webkit-box-orient: vertical;
                                                                                    -webkit-line-clamp: 3; /* start showing ellipsis when 3rd line is reached */
                                                                                    white-space: pre-wrap;
                                                                                "
                                                                            >
                                                                                {{
                                                                                    matchDetails
                                                                                        .event
                                                                                        .awayTeam
                                                                                        .name
                                                                                }}
                                                                            </p>
                                                                            <p
                                                                                style="
                                                                                    font-size: 14px;
                                                                                "
                                                                                v-if="
                                                                                    matchDetails.event &&
                                                                                    matchDetails
                                                                                        .event
                                                                                        .awayScore &&
                                                                                    matchDetails
                                                                                        .event
                                                                                        .awayScore
                                                                                        .innings &&
                                                                                    matchDetails
                                                                                        .event
                                                                                        .awayScore
                                                                                        .innings
                                                                                        .inning1
                                                                                "
                                                                            >
                                                                                {{
                                                                                    matchDetails
                                                                                        .event
                                                                                        .awayScore
                                                                                        .innings
                                                                                        .inning1
                                                                                        .score +
                                                                                    "/" +
                                                                                    matchDetails
                                                                                        .event
                                                                                        .awayScore
                                                                                        .innings
                                                                                        .inning1
                                                                                        .wickets
                                                                                }}
                                                                                {{
                                                                                    "(" +
                                                                                    matchDetails
                                                                                        .event
                                                                                        .awayScore
                                                                                        .innings
                                                                                        .inning1
                                                                                        .overs +
                                                                                    ")"
                                                                                }}
                                                                            </p>
                                                                            <p
                                                                                style="
                                                                                    font-size: 14px;
                                                                                "
                                                                                v-if="
                                                                                    matchDetails.event &&
                                                                                    matchDetails
                                                                                        .event
                                                                                        .awayScore &&
                                                                                    matchDetails
                                                                                        .event
                                                                                        .awayScore
                                                                                        .innings &&
                                                                                    matchDetails
                                                                                        .event
                                                                                        .awayScore
                                                                                        .innings
                                                                                        .inning2
                                                                                "
                                                                            >
                                                                                {{
                                                                                    matchDetails
                                                                                        .event
                                                                                        .awayScore
                                                                                        .innings
                                                                                        .inning2
                                                                                        .score +
                                                                                    "/" +
                                                                                    matchDetails
                                                                                        .event
                                                                                        .awayScore
                                                                                        .innings
                                                                                        .inning2
                                                                                        .wickets
                                                                                }}
                                                                                {{
                                                                                    "(" +
                                                                                    matchDetails
                                                                                        .event
                                                                                        .awayScore
                                                                                        .innings
                                                                                        .inning2
                                                                                        .overs +
                                                                                    ")"
                                                                                }}
                                                                            </p>
                                                                        </figcaption>
                                                                    </figure>
                                                                    <!-- end::away team Information -->
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- end::server 1 container -->
                                    </div>
                                    <!-- end::desktop version -->
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- end::live match section -->

                <section
                    class="body-part-total float-start w-100"
                    v-if="!loading"
                >
                    <!-- end::match result -->
                    <!-- begin::scoreboard section -->
                    <Scoreboard />
                    <!-- end:: scoreboard section-->
                    <!-- begin::match info and standings -->
                    <div class="matech-div-details-main my-5">
                        <div class="mn-next-part">
                            <div class="container">
                                <div class="d-lg-flex align-items-start"></div>
                                <div
                                    class="d-lg-flex align-items-start"
                                    v-if="!loading"
                                >
                                    <!-- begin::about match info -->

                                    <div class="col-lg-6">
                                        <p
                                            v-html="aboutMatch"
                                            class="mt-3 pe-lg-3"
                                        ></p>
                                    </div>

                                    <!-- end::match info -->
                                    <!-- begin::standings -->

                                    <div class="col-lg-6">
                                        <!-- begin::match standings -->
                                        <h2
                                            class="comon-heading"
                                            style="
                                                overflow: hidden;
                                                display: -webkit-box;
                                                -webkit-box-orient: vertical;
                                                -webkit-line-clamp: 1; /* start showing ellipsis when 3rd line is reached */
                                                white-space: pre-wrap;
                                            "
                                        ></h2>
                                        <div class="table-div-left">
                                            <h4>Standings</h4>
                                            <div
                                                id="seri1_wrapper"
                                                class="dataTables_wrapper"
                                            >
                                                <div class="dataTables_scroll">
                                                    <div
                                                        class="dataTables_scrollHead"
                                                    >
                                                        <div
                                                            class="dataTables_scrollHeadInner"
                                                        >
                                                            <table
                                                                class="display dataTable"
                                                                style="
                                                                    width: 580.4px;
                                                                    margin-left: 0px;
                                                                "
                                                            >
                                                                <thead>
                                                                    <tr>
                                                                        <th
                                                                            class="sorting sorting_asc"
                                                                            aria-controls="seri1"
                                                                            rowspan="1"
                                                                            colspan="2"
                                                                            style="
                                                                                width: 169.6px;
                                                                            "
                                                                            aria-sort="ascending"
                                                                            aria-label="Club: activate to sort column descending"
                                                                        >
                                                                            Team
                                                                        </th>
                                                                        <th
                                                                            class="sorting"
                                                                            tabindex="0"
                                                                            aria-controls="seri1"
                                                                            rowspan="1"
                                                                            colspan="1"
                                                                            style="
                                                                                width: 56.5625px;
                                                                            "
                                                                            aria-label="W: activate to sort column ascending"
                                                                        >
                                                                            W
                                                                        </th>
                                                                        <th
                                                                            class="sorting"
                                                                            tabindex="0"
                                                                            aria-controls="seri1"
                                                                            rowspan="1"
                                                                            colspan="1"
                                                                            style="
                                                                                width: 49.6px;
                                                                            "
                                                                            aria-label="D: activate to sort column ascending"
                                                                        >
                                                                            L
                                                                        </th>
                                                                        <th
                                                                            class="sorting"
                                                                            tabindex="0"
                                                                            aria-controls="seri1"
                                                                            rowspan="1"
                                                                            colspan="1"
                                                                            style="
                                                                                width: 46.6375px;
                                                                            "
                                                                            aria-label="L: activate to sort column ascending"
                                                                        >
                                                                            Pts
                                                                        </th>
                                                                    </tr>
                                                                </thead>

                                                                <template
                                                                    v-if="
                                                                        seasonStandings !=
                                                                        ''
                                                                    "
                                                                >
                                                                    <tbody
                                                                        v-for="standing in seasonStandings"
                                                                        :key="
                                                                            standing
                                                                        "
                                                                    >
                                                                        <tr
                                                                            class="odd"
                                                                        >
                                                                            <td
                                                                                colspan="5"
                                                                            >
                                                                                {{
                                                                                    standing.name
                                                                                }}
                                                                            </td>
                                                                        </tr>

                                                                        <tr
                                                                            class="odd"
                                                                            v-for="row in standing.rows"
                                                                            :key="
                                                                                row.id
                                                                            "
                                                                        >
                                                                            <td
                                                                                class="sorting_1"
                                                                                colspan="2"
                                                                            >
                                                                                <div
                                                                                    class="comon-ft-cl"
                                                                                >
                                                                                    <figure
                                                                                        class="d-flex align-items-center"
                                                                                    >
                                                                                        <img
                                                                                            :src="
                                                                                                'https://api.sofascore.app/api/v1/team/' +
                                                                                                row
                                                                                                    .team
                                                                                                    .id +
                                                                                                '/image/small'
                                                                                            "
                                                                                            alt="fbn"
                                                                                            style="
                                                                                                max-width: 20%;
                                                                                            "
                                                                                        />&nbsp;&nbsp;
                                                                                        {{
                                                                                            row
                                                                                                .team
                                                                                                .name
                                                                                        }}
                                                                                        <figcaption></figcaption>
                                                                                    </figure>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                {{
                                                                                    row.wins
                                                                                }}
                                                                            </td>
                                                                            <td>
                                                                                {{
                                                                                    row.losses
                                                                                }}
                                                                            </td>
                                                                            <td>
                                                                                {{
                                                                                    row.points
                                                                                }}
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </template>
                                                                <template
                                                                    v-else
                                                                >
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                Temporarily
                                                                                no
                                                                                data
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </template>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- end::match standings -->
                                    </div>

                                    <!-- end::standings -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end::match info and standings -->
                    <!-- begin::players -->
                    <!-- end of players -->
                    <MatchSquad :matchId="matchId" />
                </section>
                <!-- end::scoreboard section  -->
            </div>
        </div>
    </section>
    <span v-if="!loading">
        <footer class="py-5 float-start w-100">
            <div class="container">
                <Footer />
            </div>
        </footer>
    </span>
</template>

<script>
import axios from "axios";
import Scoreboard from "./../../scoreboard/Scoreboard.vue";
import MatchSquad from "./../../players/MatchPlayerList.vue";
import Footer from "./../../../partials/commons/Footer.vue";
export default {
    components: {
        axios,
        MatchSquad,
        Scoreboard,
        Footer,
    },
    data() {
        return {
            matchId: null,
            matchDetails: null,
            loading: true,
            seasonStandings: null,
            homeLineups: null,
            awayLineups: null,
            matchInnings: null,
            defaulPlayerImg: "/img/default/player-default.png",
            aboutMatch: null,
            matchH2H: null,
            playerInfo: null,
            currentBatters: null,
            currentServer: "https://crichdstreaming.xyz/embed2.php?id=ptvsp",
            liveMatches: [20, 21, 22, 45],
        };
    },

    created() {
        // refresh frontend every 30 seconds
        setInterval(() => {
            axios
                .get(
                    `${this.BASE_SERVER_URI}/api/cricket/sofascore/single/match/details/${this.matchId}`
                )
                .then((response) => {
                    this.matchDetails = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        }, 5000);
    },
    mounted() {
        const url = window.location.href;
        const lastParam = url.split("/").slice(-1)[0];
        this.matchId = lastParam;
        this.getMatchList();
        this.getMatchLineups();
        this.getMatchInnings();
        this.getPageContents();
        this.getMatchH2H();
    },

    methods: {
        // method to call matchList API
        getMatchList() {
            axios
                .get(
                    `${this.BASE_SERVER_URI}/api/cricket/sofascore/single/match/details/${this.matchId}`
                )
                .then((response) => {
                    this.matchDetails = response.data;
                    this.loading = false;

                    this.getLeagueStandings(
                        this.matchDetails.event.tournament.uniqueTournament.id,
                        this.matchDetails.event.season.id
                    );
                });
        },
        // method to get page contents
        getPageContents() {
            // Get the current URL
            var currentURL = window.location.href;

            // Word to check in the URL
            var status = "example";

            // Check if the word is present in the URL
            if (currentURL.indexOf("live") !== -1) {
                status = "live";
            } else if (currentURL.indexOf("upcoming") !== -1) {
                status = "upcoming";
            } else {
                status = "finished";
            }

            axios
                .get(
                    `${this.BASE_SERVER_URI}/api/cricket/sofascore/single/match/contents/${this.matchId}?status=${status}`
                )
                .then((response) => {
                    $("meta[name='keywords']").attr(
                        "content",
                        response.data.contents.keywords
                    );
                    this.aboutMatch = response.data.contents.about;
                    $("title").text(response.data.contents.title);
                    $("link[rel='canonical']").attr(
                        "href",
                        response.data.contents.url
                    );

                    // begin::meta
                    $("meta[name='title']").attr(
                        "content",
                        response.data.contents.title
                    );
                    $("meta[name='description']").attr(
                        "content",
                        response.data.contents.description
                    );
                    // end::meta

                    // begin::meta og
                    $('meta[property="og:title"]').attr(
                        "content",
                        response.data.contents.title
                    );
                    $('meta[property="og:description"]').attr(
                        "content",
                        response.data.contents.description
                    );
                    $('meta[property="og:url"]').attr(
                        "content",
                        response.data.contents.url
                    );

                    $('meta[property="og:url"]').attr(
                        "content",
                        response.data.contents.url
                    );

                    // end::meta og
                });
        },

        // method to get h2h of specific match
        getMatchH2H() {
            axios
                .get(
                    `${this.BASE_SERVER_URI}/api/cricket/sofascore/specisinglefic/match/h2h/${this.matchId}`
                )
                .then((response) => {
                    this.matchH2H = response.data.teamDuel;
                });
        },

        // method to get League Standings
        getLeagueStandings(leagueId, seasonId) {
            axios
                .get(
                    `${this.BASE_SERVER_URI}/api/cricket/sofascore/topLeagues/singe/season/standings/${leagueId}/${seasonId}`
                )
                .then((response) => {
                    if (typeof response.data.standings !== "undefined") {
                        this.seasonStandings = response.data.standings;
                    } else {
                        this.seasonStandings = "";
                    }
                });
        },

        // method to change server
        changeServer(server) {
            this.currentServer = server;
        },
        // method to get team details
        getTeamDetails(teamId, slug) {
            window.open(
                "/cricket/" + slug + "/team/details/" + teamId,
                "_blank"
            );
        },
        // method to get player details
        getPlayerDetails(playerId, slug) {
            window.open(
                "/cricket/" + slug + "/player/details/" + playerId,
                "_blank"
            );
        },
        // method to get match linups
        getMatchLineups() {
            axios
                .get(
                    `${this.BASE_SERVER_URI}/api/cricket/sofascore/single/match/lineups/${this.matchId}`
                )
                .then((response) => {
                    this.homeLineups = response.data.home["players"];
                    this.awayLineups = response.data.away["players"];
                });
        },

        getMatchInnings() {
            axios
                .get(
                    `${this.BASE_SERVER_URI}/api/cricket/sofascore/single/match/innings/${this.matchId}`
                )
                .then((response) => {
                    this.matchInnings = response.data.innings;
                    this.currentBatters = response.data.innings;
                });
        },
    },
};
</script>
<style>
div #floater {
    display: none !important;
}
.m-date {
    width: 75px !important;
}
.accordion-button::after {
    display: none;
}

/* Custom, iPhone Retina */
@media only screen and (min-width: 320px) {
    .mobile-version {
        display: block;
    }
    .desktop-version {
        display: none;
    }
}

/* Extra Small Devices, Phones */
@media only screen and (min-width: 480px) {
    .mobile-version {
        display: block;
    }
    .desktop-version {
        display: none;
    }
}

/* Small Devices, Tablets */
@media only screen and (min-width: 768px) {
    .mobile-version {
        display: block;
    }
    .desktop-version {
        display: none;
    }
}

/* Medium Devices, Desktops */
@media only screen and (min-width: 992px) {
    .mobile-version {
        display: none;
    }
}

/* Large Devices, Wide Screens */
@media only screen and (min-width: 1200px) {
    .mobile-version {
        display: none;
    }
}
</style>
