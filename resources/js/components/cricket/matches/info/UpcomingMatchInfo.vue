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
                    <!-- begin::mobile -->
                    <div
                      class="tab-pane fade show active mobile-version"
                      id="yd-hom1"
                      role="tabpanel"
                    >
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
                                top: -165px;
                              "
                            >
                              Match Is Starting In
                              <br />

                              {{ updateTimer }}
                            </h3>
                          </center>
                        </figure>
                        <div
                          class="left-history"
                          style="width: 100% !important; margin-top: 10px"
                        >
                          <div class="col">
                            <a
                              href="#"
                              class="items-matchs"
                              style="height: 252px !important"
                            >
                              <div class="matches-div-home">
                                <h5 style="margin-top: 75px !important">
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
                                      matchDetails.event.tournament.name
                                    }}</span
                                  >

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
                                          color: white;
                                          overflow: hidden;
                                          display: -webkit-box;
                                          -webkit-box-orient: vertical;
                                          -webkit-line-clamp: 2; /* start showing ellipsis when 3rd line is reached */
                                          white-space: pre-wrap;
                                        "
                                      >
                                        {{ matchDetails.event.homeTeam.name }}
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
                                          color: white;
                                          overflow: hidden;
                                          display: -webkit-box;
                                          -webkit-box-orient: vertical;
                                          -webkit-line-clamp: 2; /* start showing ellipsis when 3rd line is reached */
                                          white-space: pre-wrap;
                                        "
                                      >
                                        {{ matchDetails.event.awayTeam.name }}
                                      </p>
                                    </figcaption>
                                  </figure>
                                  <!-- end::away team Information -->
                                </div>
                              </div>
                            </a>
                          </div>
                          <!-- begin::head to head -->
                          <div class="table-div-left mt-4">
                            <h4>
                              Head To Head of
                              {{ matchDetails.event.homeTeam.shortName }} &
                              {{ matchDetails.event.awayTeam.shortName }}
                            </h4>
                            <div id="seri1_wrapper" class="dataTables_wrapper">
                              <div class="dataTables_scroll">
                                <div
                                  class="dataTables_scrollBody"
                                  style="
                                    position: relative;
                                    max-height: 800px;
                                    width: 100%;
                                  "
                                >
                                  <table
                                    class="display dataTable"
                                    style="width: 100%"
                                  >
                                    <thead>
                                      <th>Team</th>
                                      <th>Wins</th>
                                      <th>Draw</th>
                                    </thead>
                                    <tbody>
                                      <tr class="odd">
                                        <td class="sorting_1">
                                          <div class="comon-ft-cl">
                                            <img
                                              :src="
                                                'https://api.sofascore.app/api/v1/team/' +
                                                matchDetails.event.homeTeam.id +
                                                '/image/small'
                                              "
                                              alt="fbn"
                                              style="max-width: 20%"
                                            />&nbsp;&nbsp;
                                            {{
                                              matchDetails.event.homeTeam
                                                .shortName
                                            }}
                                          </div>
                                        </td>
                                        <td>{{ matchH2H.homeWins }}</td>

                                        <td>{{ matchH2H.draws }}</td>
                                      </tr>
                                      <tr class="odd">
                                        <td class="sorting_1">
                                          <div class="comon-ft-cl">
                                            <img
                                              :src="
                                                'https://api.sofascore.app/api/v1/team/' +
                                                matchDetails.event.awayTeam.id +
                                                '/image/small'
                                              "
                                              alt="fbn"
                                              style="max-width: 20%"
                                            />&nbsp;&nbsp;
                                            {{
                                              matchDetails.event.awayTeam
                                                .shortName
                                            }}
                                          </div>
                                        </td>
                                        <td>{{ matchH2H.awayWins }}</td>

                                        <td>{{ matchH2H.draws }}</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                            <br />
                          </div>
                          <!-- end::head to head -->
                        </div>
                      </div>
                    </div>
                    <!-- end:: mobile -->
                    <!-- begin::desktop -->
                    <div
                      class="tab-pane desktop-version"
                      id="yd-hom1"
                      role="tabpanel"
                    >
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
                              Match Is Starting In
                              <br />

                              {{ updateTimer }}
                            </h1>
                          </center>
                        </figure>
                        <div class="left-history" style="width: 40% !important">
                          <div class="col">
                            <a href="#" class="items-matchs">
                              <div class="matches-div-home">
                                <h5 style="margin-top: 75px !important">
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
                                      matchDetails.event.tournament.name
                                    }}</span
                                  >

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
                                          color: white;
                                          overflow: hidden;
                                          display: -webkit-box;
                                          -webkit-box-orient: vertical;
                                          -webkit-line-clamp: 2; /* start showing ellipsis when 3rd line is reached */
                                          white-space: pre-wrap;
                                        "
                                      >
                                        {{ matchDetails.event.homeTeam.name }}
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
                                          color: white;
                                          overflow: hidden;
                                          display: -webkit-box;
                                          -webkit-box-orient: vertical;
                                          -webkit-line-clamp: 2; /* start showing ellipsis when 3rd line is reached */
                                          white-space: pre-wrap;
                                        "
                                      >
                                        {{ matchDetails.event.awayTeam.name }}
                                      </p>
                                    </figcaption>
                                  </figure>
                                  <!-- end::away team Information -->
                                </div>
                              </div>
                            </a>
                          </div>
                          <!-- begin::head to head -->
                          <div class="table-div-left mt-4">
                            <h4>
                              Head To Head of
                              {{ matchDetails.event.homeTeam.shortName }} &
                              {{ matchDetails.event.awayTeam.shortName }}
                            </h4>
                            <div id="seri1_wrapper" class="dataTables_wrapper">
                              <div class="dataTables_scroll">
                                <div
                                  class="dataTables_scrollBody"
                                  style="
                                    position: relative;
                                    max-height: 800px;
                                    width: 100%;
                                  "
                                >
                                  <table
                                    class="display dataTable"
                                    style="width: 100%"
                                  >
                                    <thead>
                                      <th>Team</th>
                                      <th>Wins</th>
                                      <th>Draw</th>
                                    </thead>
                                    <tbody>
                                      <tr class="odd">
                                        <td class="sorting_1">
                                          <div class="comon-ft-cl">
                                            <img
                                              :src="
                                                'https://api.sofascore.app/api/v1/team/' +
                                                matchDetails.event.homeTeam.id +
                                                '/image/small'
                                              "
                                              alt="fbn"
                                              style="max-width: 20%"
                                            />&nbsp;&nbsp;
                                            {{
                                              matchDetails.event.homeTeam
                                                .shortName
                                            }}
                                          </div>
                                        </td>
                                        <td>{{ matchH2H.homeWins }}</td>

                                        <td>{{ matchH2H.draws }}</td>
                                      </tr>
                                      <tr class="odd">
                                        <td class="sorting_1">
                                          <div class="comon-ft-cl">
                                            <img
                                              :src="
                                                'https://api.sofascore.app/api/v1/team/' +
                                                matchDetails.event.awayTeam.id +
                                                '/image/small'
                                              "
                                              alt="fbn"
                                              style="max-width: 20%"
                                            />&nbsp;&nbsp;
                                            {{
                                              matchDetails.event.awayTeam
                                                .shortName
                                            }}
                                          </div>
                                        </td>
                                        <td>{{ matchH2H.awayWins }}</td>

                                        <td>{{ matchH2H.draws }}</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                            <br />
                          </div>
                          <!-- end::head to head -->
                        </div>
                      </div>
                    </div>
                    <!-- end:: desktop -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- end::live match section -->
        <section class="body-part-total float-start w-100" v-if="!loading">
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
                              <table
                                class="display dataTable"
                                style="width: 580.4px; margin-left: 0px"
                              >
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
                                      <td>Temporarily no data</td>
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
        </section>
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
import Footer from "./../../../partials/commons/Footer.vue";
export default {
  components: {
    axios,
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
      updateTimer: null,
    };
  },
  mounted() {
    const url = window.location.href;
    const lastParam = url.split("/").slice(-1)[0];
    this.matchId = lastParam;
    this.getFinishedMatchList();
    this.getMatchLineups();
    this.getMatchInnings();
    this.getPageContents();
    this.getMatchH2H();
    setInterval(() => {
      this.updateCountdown();
    }, 1000);
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

    // method to get match time
    updateCountdown() {
      var countDownDate = new Date(
        this.matchDetails.event.startTimestamp * 1000
      );

      // Update the count down every 1 second

      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      if (days > 0) {
        this.updateTimer =
          days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
      } else if (days <= 0 && hours > 0) {
        this.updateTimer = +hours + "h " + minutes + "m " + seconds + "s ";
      } else if (days <= 0 && hours <= 0 && minutes > 0) {
        this.updateTimer = minutes + "m " + seconds + "s ";
      } else {
        this.updateTimer = "";
      }
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
        });
    },
    getPlayerDetails(playerId) {
      window.open("/cricket/players-list/" + playerId, "_blank");
    },
  },
};
</script>
<style scoped>
#floater {
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
