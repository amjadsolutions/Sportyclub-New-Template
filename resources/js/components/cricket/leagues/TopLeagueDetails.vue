<template>
    <section class="body-part-total float-start w-100">
        <div class="result-div1 mt-5">
            <div class="container">
                <div class="row gx-lg-5">
                    <section class="body-part-total float-start w-100">
                        <div class="schedule-main-div">
                            <div class="container">
                                <div class="row">
                                    <!-- begin::loading -->
                                    <h2
                                        v-if="loading"
                                        class="comon-heading m-0"
                                        style="
                                            color: rgb(7, 31, 64);
                                            font-family: Barlow Condensed,
                                                sans-seri0 !important;
                                            font-weight: 600 !important;
                                        "
                                    >
                                        Loading...
                                        <img
                                            src="/img/spinner.gif"
                                            alt="Image not Found"
                                            style="
                                                width: 40px;
                                                margin-top: 0px !important;
                                            "
                                        />
                                    </h2>
                                    <!-- end::loading -->
                                    <!-- begin::about section -->
                                    <div class="col-lg-6" v-if="!loading">
                                        <div class="players-details-div">
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
                                                {{
                                                    topLeagueInfo
                                                        .uniqueTournament.name
                                                }}
                                                <span class="d-block mt-2">
                                                    {{
                                                        topLeagueInfo
                                                            .uniqueTournament
                                                            .category.name
                                                    }}
                                                </span>
                                            </h2>

                                            <ul class="list-unstyled mt-2">
                                                <li>
                                                    <span>
                                                        Depending Champion
                                                        :</span
                                                    >
                                                    <span>
                                                        {{
                                                            topLeagueInfo
                                                                .uniqueTournament
                                                                .titleHolder &&
                                                            topLeagueInfo
                                                                .uniqueTournament
                                                                .titleHolder
                                                                .name
                                                                ? topLeagueInfo
                                                                      .uniqueTournament
                                                                      .titleHolder
                                                                      .name
                                                                : " --"
                                                        }}
                                                    </span>
                                                </li>
                                                <li>
                                                    <span> Short Name :</span>
                                                    <span>
                                                        {{
                                                            topLeagueInfo
                                                                .uniqueTournament
                                                                .titleHolder &&
                                                            topLeagueInfo
                                                                .uniqueTournament
                                                                .titleHolder
                                                                .shortName
                                                                ? topLeagueInfo
                                                                      .uniqueTournament
                                                                      .titleHolder
                                                                      .shortName
                                                                : " --"
                                                        }}
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        Most Titles No's :</span
                                                    >
                                                    <span>
                                                        {{
                                                            topLeagueInfo
                                                                .uniqueTournament
                                                                .titleHolderTitles
                                                                ? topLeagueInfo
                                                                      .uniqueTournament
                                                                      .titleHolderTitles
                                                                : " --"
                                                        }}
                                                    </span>
                                                </li>

                                                <li>
                                                    <span> Most Titles :</span>
                                                    <template
                                                        v-if="
                                                            topLeagueInfo
                                                                .uniqueTournament
                                                                .mostTitlesTeams
                                                        "
                                                    >
                                                        <span
                                                            style="color: brown"
                                                            v-for="mostTitle in topLeagueInfo
                                                                .uniqueTournament
                                                                .mostTitlesTeams"
                                                            :key="
                                                                mostTitle.name
                                                            "
                                                        >
                                                            {{
                                                                mostTitle.name +
                                                                "(" +
                                                                mostTitle.shortName +
                                                                ")"
                                                            }}
                                                            ,
                                                        </span>
                                                    </template>
                                                    <template v-else>
                                                        --
                                                    </template>
                                                </li>
                                            </ul>
                                            <h2 class="comon-heading mt-3 mb-3">
                                                About League
                                            </h2>
                                            <p v-html="topLeagueDetails"></p>
                                        </div>
                                    </div>
                                    <!-- end::about section -->
                                    <!-- begin::standings -->
                                    <div class="col-lg-6" v-if="!loading">
                                        <!-- begin::match standings -->
                                        <h2
                                            class="comon-heading"
                                            style="
                                                overflow: hidden;
                                                display: -webkit-box;
                                                -webkit-box-orient: vertical;
                                                -webkit-line-clamp: 1;
                                                white-space: pre-wrap;
                                            "
                                        ></h2>
                                        <div class="table-div-left">
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
                                                            <!-- begin::selection of season -->
                                                            <div
                                                                class="dataTables_length"
                                                                id="seri3_length"
                                                            >
                                                                <label
                                                                    >Select
                                                                    Season
                                                                    <select
                                                                        name="seri3_length"
                                                                        aria-controls="seri3"
                                                                        class=""
                                                                        id="finished-matches"
                                                                        v-on:change="
                                                                            getSeasonsStandingsData()
                                                                        "
                                                                    >
                                                                        <option
                                                                            :selected="
                                                                                selected
                                                                            "
                                                                            :value="
                                                                                season.id
                                                                            "
                                                                            v-for="season in allSeasonStandingsList"
                                                                            :key="
                                                                                season.id
                                                                            "
                                                                        >
                                                                            {{
                                                                                season.year
                                                                            }}
                                                                        </option>
                                                                    </select></label
                                                                >
                                                            </div>
                                                            <!-- end::selection of season -->
                                                            <table
                                                                class="display dataTable"
                                                                style="
                                                                    margin-left: 0px;
                                                                "
                                                                :class="
                                                                    laodingTable
                                                                        ? 'disabled-table'
                                                                        : ''
                                                                "
                                                            >
                                                                <!-- begin::table header -->
                                                                <thead>
                                                                    <tr>
                                                                        <th
                                                                            class="sorting sorting_asc"
                                                                            aria-controls="seri1"
                                                                            rowspan="1"
                                                                            colspan="2"
                                                                            aria-sort="ascending"
                                                                            aria-label="Club: activate to sort column descending"
                                                                            style="
                                                                                width: 169.6px;
                                                                            "
                                                                        >
                                                                            Team
                                                                        </th>
                                                                        <th
                                                                            class="sorting"
                                                                            tabindex="0"
                                                                            aria-controls="seri1"
                                                                            rowspan="1"
                                                                            colspan="1"
                                                                            aria-label="W: activate to sort column ascending"
                                                                            style="
                                                                                width: 56.5625px;
                                                                            "
                                                                        >
                                                                            W
                                                                        </th>
                                                                        <th
                                                                            class="sorting"
                                                                            tabindex="0"
                                                                            aria-controls="seri1"
                                                                            rowspan="1"
                                                                            colspan="1"
                                                                            aria-label="D: activate to sort column ascending"
                                                                            style="
                                                                                width: 49.6px;
                                                                            "
                                                                        >
                                                                            L
                                                                        </th>
                                                                        <th
                                                                            class="sorting"
                                                                            tabindex="0"
                                                                            aria-controls="seri1"
                                                                            rowspan="1"
                                                                            colspan="1"
                                                                            aria-label="L: activate to sort column ascending"
                                                                            style="
                                                                                width: 46.6375px;
                                                                            "
                                                                        >
                                                                            Pts
                                                                        </th>
                                                                    </tr>
                                                                </thead>
                                                                <!-- end::table header -->
                                                                <!-- begin::table body -->
                                                                <template
                                                                    v-if="
                                                                        seasonStandingsDetails
                                                                    "
                                                                >
                                                                    <tbody
                                                                        v-for="standings in seasonStandingsDetails"
                                                                        :key="
                                                                            standings.id
                                                                        "
                                                                    >
                                                                        <tr
                                                                            style="
                                                                                background-color: rgb(
                                                                                    7,
                                                                                    31,
                                                                                    64
                                                                                );
                                                                                color: white;
                                                                            "
                                                                        >
                                                                            <td
                                                                                colspan="6"
                                                                                style="
                                                                                    text-align: center;
                                                                                "
                                                                            >
                                                                                <b
                                                                                    >{{
                                                                                        standings.name
                                                                                    }}
                                                                                </b>
                                                                            </td>
                                                                        </tr>

                                                                        <tr
                                                                            class="odd"
                                                                            v-for="row in standings.rows"
                                                                            :key="
                                                                                row.id
                                                                            "
                                                                        >
                                                                            <td
                                                                                class="sorting_1"
                                                                                colspan="2"
                                                                                style="
                                                                                    cursor: pointer;
                                                                                "
                                                                                v-on:click="
                                                                                    getTeamDetails(
                                                                                        row
                                                                                            .team
                                                                                            .id,
                                                                                        row
                                                                                            .team
                                                                                            .slug
                                                                                    )
                                                                                "
                                                                            >
                                                                                <div
                                                                                    class="comon-ft-cl"
                                                                                >
                                                                                    <figure
                                                                                        class="d-flex align-items-center"
                                                                                    >
                                                                                        <img
                                                                                            :src="
                                                                                                getImageUrl(
                                                                                                    row,
                                                                                                    '-small'
                                                                                                )
                                                                                            "
                                                                                            alt="Team Image"
                                                                                            @error="
                                                                                                $event.target.src =
                                                                                                    'https://ios.app99877.com//images/cricket/default/default-team-small.png'
                                                                                            "
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
                                                                        <tr
                                                                            class="odd"
                                                                        >
                                                                            <td>
                                                                                Temporarily
                                                                                no
                                                                                data..
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </template>
                                                                <!-- ebd::table body -->
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
                                <br />
                                <teamplate v-if="seasonStandingsDetails">
                                    <span
                                        v-for="standings in seasonStandingsDetails"
                                        :key="standings.id"
                                    >
                                        <div
                                            class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 g-4 g-lg-5"
                                        >
                                            <div class="col-lg-12 col-xl-12">
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
                                                    {{ standings.name }} Teams
                                                </h2>
                                            </div>
                                        </div>
                                        <br />
                                        <div
                                            class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-5 gx-md-5 gy-lg-0 gx-lg-5 mt-0"
                                        >
                                            <div
                                                class="col-lg-3"
                                                v-for="row in standings.rows"
                                                :key="row.id"
                                                style="margin-top: 10px"
                                            >
                                                <a
                                                    class="top-next-mc text-center"
                                                    style="
                                                        background-color: rgb(
                                                            12,
                                                            26,
                                                            44
                                                        );
                                                        cursor: pointer;
                                                    "
                                                    v-on:click="
                                                        getTeamDetails(
                                                            row.team.id,
                                                            row.team.slug
                                                        )
                                                    "
                                                >
                                                    <h5 class="mn-mc-titel">
                                                        {{ row.team.name }}
                                                    </h5>
                                                    <hr />
                                                    <div
                                                        class="d-flex align-items-center justify-content-center mt-2"
                                                    >
                                                        <img
                                                            :src="
                                                                getImageUrl(
                                                                    row,
                                                                    ''
                                                                )
                                                            "
                                                            alt="Team Image"
                                                            @error="
                                                                $event.target.src =
                                                                    'https://ios.app99877.com//images/cricket/default/default-team.png'
                                                            "
                                                        />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </span>
                                </teamplate>
                                <br />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </section>
    <section
        class="body-part-total float-start w-100"
        v-if="!loading && topLeagueInfo.uniqueTournament.id == 11165"
    >
        <div class="playerrs-div-total py-5">
            <div class="golaskipers-div">
                <div class="container">
                    <!-- begin::loader section --><!--v-if--><!-- end::loader secton --><!-- begin::lists -->
                    <h1
                        class="comon-heading m-0"
                        style="
                            color: rgb(7, 31, 64);
                            font-family: 'Barlow Condensed', sans-seri0 !important;
                            font-weight: 600 !important;
                        "
                    >
                        IPL News
                    </h1>
                    <div
                        class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mt-0 mt-lg-0 g-4 g-lg-4"
                    >
                        <div
                            class="col"
                            v-for="news in leagueNews"
                            :key="news.id"
                            v-on:click="getNewsDetails(news.id)"
                        >
                            <a
                                href="players-details.html"
                                class="cmonon-plyaars"
                                ><!-- begin::image -->
                                <figure>
                                    <img
                                        :src="
                                            'https://ios.app99877.com/' +
                                            news.image
                                        "
                                        alt="gl1"
                                    />
                                </figure>
                                <!-- end::image --><!-- begin::title -->
                                <div
                                    class="d-flex align-items-center justify-content-between"
                                >
                                    <h5
                                        style="
                                            display: -webkit-box;
                                            -webkit-line-clamp: 3;
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
                    <!-- end::lists -->
                </div>
            </div>
        </div>
    </section>
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
import axios from "axios";
import Footer from "./../../partials/commons/Footer.vue";
export default {
    components: {
        axios,
        Footer,
    },
    data() {
        return {
            leagueId: null,
            loading: true,
            topLeagueInfo: null,
            topLeagueDetails: null,
            allSeasonStandingsList: null,
            seasonStandingsDetails: null,
            latestSeason: null,
            changeLeagueText: null,
            leagueNews: null,
            laodingTable: true,
        };
    },
    mounted() {
        const url = window.location.href;
        const lastParam = url.split("/").slice(-1)[0];
        this.leagueId = lastParam;
        this.getTeamContentsMeta(lastParam);
        this.getTopLeagueDetails(lastParam);
        this.getTopLeagueInfo(lastParam);
        this.getTopLeagueSeasonStandingsList(lastParam);
        this.getLeagueNews();
    },

    methods: {
        // method to call top league Informations...
        getTopLeagueInfo(leagueId) {
            axios
                .get(
                    `${this.BASE_SERVER_URI}/api/cricket/sofascore/topLeagues/info/${leagueId}`
                )
                .then((response) => {
                    this.topLeagueInfo = response.data;
                    this.loading = false;
                });
        },
        // method to get news details
        getNewsDetails(newsId) {
            window.open("/cricket/news/details/" + newsId, "_blank");
        },
        // method to get league News
        getLeagueNews() {
            axios
                .get(
                    `${this.BASE_SERVER_URI}/api/cricket/sofascore/topLeagues/ipl`
                )
                .then((response) => {
                    this.leagueNews = response.data.cricketNewsList;
                });
        },
        // method to get topLeague Details
        getTopLeagueDetails(leagueId) {
            axios
                .get(
                    `${this.BASE_SERVER_URI}/api/cricket/sofascore/topLeagues/contents/${leagueId}`
                )
                .then((response) => {
                    this.changeLeagueText = response.data.content.about;
                    this.changeLeagueText = this.changeLeagueText.replaceAll(
                        "sofascore.com",
                        "sportyclub.live"
                    );
                    this.topLeagueDetails = this.changeLeagueText.replaceAll(
                        "Sofascore",
                        "Sportyclub"
                    );
                });
        },
        // method to get meta contents of top leagues
        getTeamContentsMeta(leagueId) {
            axios
                .get(
                    `${this.BASE_SERVER_URI}/api/cricket/sofascore/topLeagues/contents/meta/${leagueId}`
                )
                .then((response) => {
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

        // method to get top league Season Stanidngs
        getTopLeagueSeasonStandingsList(leagueId) {
            axios
                .get(
                    `${this.BASE_SERVER_URI}/api/cricket/sofascore/topLeagues/season/standings/list/${leagueId}`
                )
                .then((response) => {
                    this.allSeasonStandingsList = response.data.seasons;
                    this.latestSeason = response.data.seasons[0].id;
                    this.getSeasonsStandingsData();
                });
        },

        // get top leagues standings Data
        getSeasonsStandingsData() {
            this.laodingTable = true;
            if (typeof $("#finished-matches :selected").val() === "undefined") {
                var seasonId = this.latestSeason;
            } else {
                seasonId = $("#finished-matches :selected").val();
            }
            axios
                .get(
                    `${this.BASE_SERVER_URI}/api/cricket/sofascore/topLeagues/singe/season/standings/${this.leagueId}/${seasonId}`
                )
                .then((response) => {
                    this.seasonStandingsDetails = response.data.standings;
                    this.laodingTable = false;
                });
        },
        // method to get team Details
        getTeamDetails(teamId, slug) {
            var basePath = window.location.origin;
            var w = window.open();
            w.document.location.href =
                basePath + "/cricket/" + slug + "/team/details/" + teamId;
            w.document.target = "_blank";
        },
        getImageUrl(row, size) {
            // Check if the actual image URL is available
            if (row && row.team && row.team.id) {
                return (
                    "https://ios.app99877.com//images/cricket/teams/" +
                    row.team.id +
                    "/" +
                    row.team.id +
                    size +
                    ".png"
                );
            }

            // If actual image URL is not available, return the default image URL
            return "https://ios.app99877.com//images/cricket/default/default-team-small.png";
        },
    },
};
</script>
<style>
.disabled-table {
    pointer-events: none;
    /* Disable interactions */
    opacity: 0.7;
    /* Adjust the opacity to visually indicate it's disabled */
    /* You can also apply other styles to make it visually disabled */
    /* For example, changing the background color or adding a border */
    background-color: #f0f0f0;
    border: 1px solid #ccc;
}
</style>
