<template>
  <section class="section section-md bg-white">
    <div class="container">
      <div class="row row-50">
        <!-- begin::loading section -->
        <div
          class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 mt-0 mt-lg-0 g-4 g-lg-5"
          v-if="loading"
        >
          <div class="col-lg-12">
            <h2
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
            </h2>
          </div>
        </div>
        <!-- end::loading section -->
        <!-- begin::live match section -->
        <section class="body-part-total float-start w-100">
          <div class="our-history-div" style="margin-top: 0px !important">
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
                  <div
                    class="tab-content"
                    id="pills-tabContent"
                    v-if="!loading"
                  >
                    <!-- begin::mobile version-->
                    <div id="yd-hom1" role="tabpanel" class="mobile-version">
                      <div class="comon-fild-ads1 d-lg-flex">
                        <figure style="width: 100% !important; height: 252px">
                          <!-- begin::img -->
                          <img src="/img/default/bg_not_start.png" alt="" />
                          <!-- end::img -->
                          <center>
                            <h3
                              style="
                                color: white;
                                z-index: 1;
                                position: relative;
                                top: -185px;
                              "
                            >
                              {{ matchDetails.event.note }}
                              <br />

                              {{ updateTimer }}
                            </h3>
                          </center>
                        </figure>
                        <div
                          class="left-history"
                          style="width: 100% !important"
                        >
                          <div class="col">
                            <a
                              href="#"
                              class="items-matchs"
                              style="margin-top: 10px; height: 252px !important"
                            >
                              <div class="matches-div-home">
                                <h5 style="margin-top: 100px !important">
                                  <span
                                    style="
                                      overflow: hidden;
                                      display: -webkit-box;
                                      -webkit-box-orient: vertical;
                                      -webkit-line-clamp: 2; /* start showing ellipsis when 3rd line is reached */
                                      white-space: pre-wrap;
                                    "
                                  >
                                    {{ matchDetails.event.tournament.name }}
                                  </span>

                                  <span class="d-block">
                                    {{
                                      matchDetails.event.status.description
                                    }}</span
                                  >
                                </h5>
                                <div
                                  class="d-flex align-items-center justify-content-between"
                                >
                                  <!-- begin::home team Information -->
                                  <figure>
                                    <img
                                      :src="
                                        'https://api.sofascore.app/api/v1/team/' +
                                        matchDetails.event.homeTeam.id +
                                        '/image'
                                      "
                                      alt="cl2"
                                      style="width: 68%; height: 31%"
                                    />
                                    <figcaption>
                                      <p
                                        style="
                                          overflow: hidden;
                                          display: -webkit-box;
                                          -webkit-box-orient: vertical;
                                          -webkit-line-clamp: 2; /* start showing ellipsis when 3rd line is reached */
                                          white-space: pre-wrap;
                                        "
                                      >
                                        {{ matchDetails.event.homeTeam.name }}
                                      </p>
                                      <p
                                        style="font-size: 14px"
                                        v-if="
                                          matchDetails.event &&
                                          matchDetails.event.homeScore &&
                                          matchDetails.event.homeScore
                                            .innings &&
                                          matchDetails.event.homeScore.innings
                                            .inning1
                                        "
                                      >
                                        {{
                                          matchDetails.event.homeScore.innings
                                            .inning1.score +
                                          "/" +
                                          matchDetails.event.homeScore.innings
                                            .inning1.wickets
                                        }}
                                        {{
                                          "(" +
                                          matchDetails.event.homeScore.innings
                                            .inning1.overs +
                                          ")"
                                        }}
                                      </p>

                                      <p
                                        style="font-size: 14px"
                                        v-if="
                                          matchDetails.event &&
                                          matchDetails.event.homeScore &&
                                          matchDetails.event.homeScore
                                            .innings &&
                                          matchDetails.event.homeScore.innings
                                            .inning2
                                        "
                                      >
                                        {{
                                          matchDetails.event.homeScore.innings
                                            .inning2.score +
                                          "/" +
                                          matchDetails.event.homeScore.innings
                                            .inning2.wickets
                                        }}
                                        {{
                                          "(" +
                                          matchDetails.event.homeScore.innings
                                            .inning2.overs +
                                          ")"
                                        }}
                                      </p>
                                    </figcaption>
                                  </figure>

                                  <!-- end::home team Information -->

                                  <h4 style="margin-top: -150px !important">
                                    VS
                                  </h4>

                                  <!-- begin::away team Information -->
                                  <figure>
                                    <img
                                      :src="
                                        'https://api.sofascore.app/api/v1/team/' +
                                        matchDetails.event.awayTeam.id +
                                        '/image'
                                      "
                                      alt="cl2"
                                      style="width: 68%; height: 31%"
                                    />
                                    <figcaption>
                                      <p
                                        style="
                                          overflow: hidden;
                                          display: -webkit-box;
                                          -webkit-box-orient: vertical;
                                          -webkit-line-clamp: 2; /* start showing ellipsis when 3rd line is reached */
                                          white-space: pre-wrap;
                                        "
                                      >
                                        {{ matchDetails.event.awayTeam.name }}
                                      </p>
                                      <p
                                        style="font-size: 14px"
                                        v-if="
                                          matchDetails.event &&
                                          matchDetails.event.awayScore &&
                                          matchDetails.event.awayScore
                                            .innings &&
                                          matchDetails.event.awayScore.innings
                                            .inning1
                                        "
                                      >
                                        {{
                                          matchDetails.event.awayScore.innings
                                            .inning1.score +
                                          "/" +
                                          matchDetails.event.awayScore.innings
                                            .inning1.wickets
                                        }}
                                        {{
                                          "(" +
                                          matchDetails.event.awayScore.innings
                                            .inning1.overs +
                                          ")"
                                        }}
                                      </p>
                                      <p
                                        style="font-size: 14px"
                                        v-if="
                                          matchDetails.event &&
                                          matchDetails.event.awayScore &&
                                          matchDetails.event.awayScore
                                            .innings &&
                                          matchDetails.event.awayScore.innings
                                            .inning2
                                        "
                                      >
                                        {{
                                          matchDetails.event.awayScore.innings
                                            .inning2.score +
                                          "/" +
                                          matchDetails.event.awayScore.innings
                                            .inning2.wickets
                                        }}
                                        {{
                                          "(" +
                                          matchDetails.event.awayScore.innings
                                            .inning2.overs +
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
                    <!-- end::mobile version-->
                    <!-- begin::desktop version-->
                    <div id="yd-hom1" role="tabpanel" class="desktop-version">
                      <div class="comon-fild-ads1 d-lg-flex">
                        <figure style="width: 60% !important; height: 400px">
                          <!-- begin::img -->
                          <img src="/img/default/bg_not_start.png" alt="" />
                          <!-- end::img -->
                          <center>
                            <h1
                              style="
                                color: white;
                                z-index: 1;
                                position: relative;
                                top: -260px;
                              "
                            >
                              {{ matchDetails.event.note }}
                              <br />

                              {{ updateTimer }}
                            </h1>
                          </center>
                        </figure>
                        <div class="left-history" style="width: 40% !important">
                          <div class="col">
                            <a href="#" class="items-matchs">
                              <div class="matches-div-home">
                                <h5
                                  style="
                                    margin-top: 75px !important;
                                    overflow: hidden;
                                    display: -webkit-box;
                                    -webkit-box-orient: vertical;
                                    -webkit-line-clamp: 2; /* start showing ellipsis when 3rd line is reached */
                                    white-space: pre-wrap;
                                  "
                                >
                                  {{ matchDetails.event.tournament.name }}
                                  <span class="d-block">
                                    {{
                                      matchDetails.event.status.description
                                    }}</span
                                  >
                                </h5>
                                <div
                                  class="d-flex align-items-center justify-content-between"
                                >
                                  <!-- begin::home team Information -->
                                  <figure>
                                    <img
                                      :src="
                                        'https://api.sofascore.app/api/v1/team/' +
                                        matchDetails.event.homeTeam.id +
                                        '/image'
                                      "
                                      alt="cl2"
                                      style="width: 48%; height: 31%"
                                    />
                                    <figcaption>
                                      <p
                                        style="
                                          overflow: hidden;
                                          display: -webkit-box;
                                          -webkit-box-orient: vertical;
                                          -webkit-line-clamp: 2; /* start showing ellipsis when 3rd line is reached */
                                          white-space: pre-wrap;
                                        "
                                      >
                                        {{ matchDetails.event.homeTeam.name }}
                                      </p>
                                      <p
                                        style="font-size: 14px"
                                        v-if="
                                          matchDetails.event &&
                                          matchDetails.event.homeScore &&
                                          matchDetails.event.homeScore
                                            .innings &&
                                          matchDetails.event.homeScore.innings
                                            .inning1
                                        "
                                      >
                                        {{
                                          matchDetails.event.homeScore.innings
                                            .inning1.score +
                                          "/" +
                                          matchDetails.event.homeScore.innings
                                            .inning1.wickets
                                        }}
                                        {{
                                          "(" +
                                          matchDetails.event.homeScore.innings
                                            .inning1.overs +
                                          ")"
                                        }}
                                      </p>

                                      <p
                                        style="font-size: 14px"
                                        v-if="
                                          matchDetails.event &&
                                          matchDetails.event.homeScore &&
                                          matchDetails.event.homeScore
                                            .innings &&
                                          matchDetails.event.homeScore.innings
                                            .inning2
                                        "
                                      >
                                        {{
                                          matchDetails.event.homeScore.innings
                                            .inning2.score +
                                          "/" +
                                          matchDetails.event.homeScore.innings
                                            .inning2.wickets
                                        }}
                                        {{
                                          "(" +
                                          matchDetails.event.homeScore.innings
                                            .inning2.overs +
                                          ")"
                                        }}
                                      </p>
                                    </figcaption>
                                  </figure>

                                  <!-- end::home team Information -->

                                  <h4 style="margin-top: -150px !important">
                                    VS
                                  </h4>

                                  <!-- begin::away team Information -->
                                  <figure>
                                    <img
                                      :src="
                                        'https://api.sofascore.app/api/v1/team/' +
                                        matchDetails.event.awayTeam.id +
                                        '/image'
                                      "
                                      alt="cl2"
                                      style="width: 48%; height: 31%"
                                    />
                                    <figcaption>
                                      <p
                                        style="
                                          overflow: hidden;
                                          display: -webkit-box;
                                          -webkit-box-orient: vertical;
                                          -webkit-line-clamp: 2; /* start showing ellipsis when 3rd line is reached */
                                          white-space: pre-wrap;
                                        "
                                      >
                                        {{ matchDetails.event.awayTeam.name }}
                                      </p>
                                      <p
                                        style="font-size: 14px"
                                        v-if="
                                          matchDetails.event &&
                                          matchDetails.event.awayScore &&
                                          matchDetails.event.awayScore
                                            .innings &&
                                          matchDetails.event.awayScore.innings
                                            .inning1
                                        "
                                      >
                                        {{
                                          matchDetails.event.awayScore.innings
                                            .inning1.score +
                                          "/" +
                                          matchDetails.event.awayScore.innings
                                            .inning1.wickets
                                        }}
                                        {{
                                          "(" +
                                          matchDetails.event.awayScore.innings
                                            .inning1.overs +
                                          ")"
                                        }}
                                      </p>
                                      <p
                                        style="font-size: 14px"
                                        v-if="
                                          matchDetails.event &&
                                          matchDetails.event.awayScore &&
                                          matchDetails.event.awayScore
                                            .innings &&
                                          matchDetails.event.awayScore.innings
                                            .inning2
                                        "
                                      >
                                        {{
                                          matchDetails.event.awayScore.innings
                                            .inning2.score +
                                          "/" +
                                          matchDetails.event.awayScore.innings
                                            .inning2.wickets
                                        }}
                                        {{
                                          "(" +
                                          matchDetails.event.awayScore.innings
                                            .inning2.overs +
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
                    <!-- end::desktop version-->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- end::live match section -->
        <section class="body-part-total float-start w-100" v-if="!loading">
          <!-- end::match result -->
          <!-- begin::scoreboard section -->
          <Scoreboard />
          <!-- begin::match info and standings -->
          <div class="matech-div-details-main my-5">
            <div class="mn-next-part">
              <div class="container">
                <div class="d-lg-flex align-items-start"></div>
                <div class="d-lg-flex align-items-start" v-if="!loading">
                  <!-- begin::about match info -->

                  <div class="col-lg-6">
                    <p v-html="aboutMatch" class="mt-3 pe-lg-3"></p>
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
                      <div id="seri1_wrapper" class="dataTables_wrapper">
                        <div class="dataTables_scroll">
                          <div class="dataTables_scrollHead">
                            <div class="dataTables_scrollHeadInner">
                              <!-- style="width: 580.4px; margin-left: 0px" -->
                              <table class="display dataTable">
                                <thead>
                                  <tr>
                                    <th
                                      class="sorting sorting_asc"
                                      aria-controls="seri1"
                                      rowspan="1"
                                      colspan="2"
                                      style="width: 169.6px"
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
                                      style="width: 56.5625px"
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
                                      style="width: 49.6px"
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
                                      style="width: 46.6375px"
                                      aria-label="L: activate to sort column ascending"
                                    >
                                      Pts
                                    </th>
                                  </tr>
                                </thead>

                                <template v-if="seasonStandings != ''">
                                  <tbody
                                    v-for="standing in seasonStandings"
                                    :key="standing"
                                  >
                                    <tr class="odd">
                                      <td colspan="5">
                                        {{ standing.name }}
                                      </td>
                                    </tr>

                                    <tr
                                      class="odd"
                                      v-for="row in standing.rows"
                                      :key="row.id"
                                    >
                                      <td class="sorting_1" colspan="2">
                                        <div class="comon-ft-cl">
                                          <figure
                                            class="d-flex align-items-center"
                                          >
                                            <img
                                              :src="
                                                'https://api.sofascore.app/api/v1/team/' +
                                                row.team.id +
                                                '/image/small'
                                              "
                                              alt="fbn"
                                              style="max-width: 20%"
                                            />&nbsp;&nbsp;
                                            {{ row.team.name }}
                                            <figcaption></figcaption>
                                          </figure>
                                        </div>
                                      </td>
                                      <td>
                                        {{ row.wins }}
                                      </td>
                                      <td>
                                        {{ row.losses }}
                                      </td>
                                      <td>
                                        {{ row.points }}
                                      </td>
                                    </tr>
                                  </tbody>
                                </template>
                                <template v-else>
                                  <tbody>
                                    <tr>
                                      
                                      <td colspan="4">Temporarily no data</td>
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
      </div>
    </div>
  </section>
  <!-- begin::footer section -->
  <span v-if="!loading">
    <footer class="py-5 float-start w-100">
      <div class="container">
        <Footer />
      </div>
    </footer>
  </span>
  <!-- end::footer section -->
</template>

<script>
import axios from "axios";
import MatchSquad from "./../../players/MatchPlayerList.vue";
import Footer from "./../../../partials/commons/Footer.vue";
import Scoreboard from "./../../scoreboard/Scoreboard.vue";
export default {
  components: {
    axios,
    MatchSquad,
    Footer,
    Scoreboard,
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
    };
  },
  mounted() {
    const url = window.location.href;
    const lastParam = url.split("/").slice(-1)[0];
    this.matchId = lastParam;
    this.getFinishedMatchList();
    this.getMatchInnings();
    this.getMatchH2H();
    this.getPageContents();
  },

  methods: {
    // method to call matchList API
    getFinishedMatchList() {
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
          $("link[rel='canonical']").attr("href", response.data.contents.url);

          // begin::meta
          $("meta[name='title']").attr("content", response.data.contents.title);
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
          `${this.BASE_SERVER_URI}/api/cricket/sofascore/single/match/h2h/${this.matchId}`
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

    getMatchInnings() {
      axios
        .get(
          `${this.BASE_SERVER_URI}/api/cricket/sofascore/single/match/innings/${this.matchId}`
        )
        .then((response) => {
          this.matchInnings = response.data.innings;
        });
    },
    getPlayerDetails(playerId) {
      window.open("/cricket/players-list/" + playerId, "_blank");
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
  .desktop-version {
    display: block;
  }
}

/* Large Devices, Wide Screens */
@media only screen and (min-width: 1200px) {
  .mobile-version {
    display: none;
  }
  .desktop-version {
    display: block;
  }
}
</style>
