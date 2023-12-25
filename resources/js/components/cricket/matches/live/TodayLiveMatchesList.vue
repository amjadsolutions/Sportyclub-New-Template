<template>
  <div class="result-div1 mt-5">
    <div class="container">
      <div class="row gx-lg-5">
        <section class="body-part-total float-start w-100">
          <div class="schedule-main-div">
            <div class="d-flex justify-content-between align-items-center">
              <!-- begin::loading -->
              <h2
                v-if="loading"
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
              <!-- end::loading -->

              <h2
                v-if="!loading"
                class="comon-heading m-0"
                style="
                  color: rgb(7, 31, 64);
                  font-family: Barlow Condensed, sans-seri0 !important;
                  font-weight: 600 !important;
                "
              >
                {{
                  activeBtn == "live"
                    ? "Today Live Matches"
                    : "Today All Matches"
                }}
              </h2>

              <a href="/" class="btn all-cm-btn"> Home </a>
            </div>
            <!-- begin::body -->

            <div class="table-div-left mt-4">
              <!-- begin::tabs -->
              <div class="dataTables_length" id="seri3_length">
                <a
                  v-on:click="getTodayLiveMatchList('live')"
                  class="btn all-cm-btn"
                  :style="
                    activeBtn == 'live'
                      ? 'background-color:red'
                      : 'background-color:gray'
                  "
                >
                  Live Matches</a
                >
                &nbsp;
                <a
                  :style="
                    activeBtn == 'all'
                      ? 'background-color:red'
                      : 'background-color:gray'
                  "
                  class="btn all-cm-btn"
                  v-on:click="getTodayAllMatchList('all')"
                >
                  All Matches</a
                >
              </div>
              <!-- end::tabs -->
              <div id="seri3_wrapper" class="dataTables_wrapper">
                <table
                  id="seri3"
                  class="display dataTable"
                  aria-describedby="seri3_info"
                  style="width: 100%"
                  :class="loading ? 'disabled-table' : ''"
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
                        style="width: 50px"
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
                        style="width: 587px"
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
                        style="width: 330px"
                      >
                        Result
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="seri3"
                        rowspan="1"
                        colspan="1"
                        aria-label="League: activate to sort column ascending"
                        style="width: 330px"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <!-- end::table header -->
                  <!-- begin::table body-->
                  <tbody v-if="isEmpty > 0">
                    <tr
                      class="odd"
                      style="cursor: pointer"
                      v-for="match in matchDetails"
                      :key="match.id"
                      v-on:click="
                        getMatchDetails(
                          match.id,
                          match.homeTeam.slug,
                          match.awayTeam.slug,
                          match.status.code
                        )
                      "
                    >
                      <td class="sorting_1">
                        <span>
                          <span
                            v-if="liveMatches.includes(match.status.code)"
                            style="
                              overflow: hidden;
                              display: -webkit-box;
                              -webkit-box-orient: vertical;
                              -webkit-line-clamp: 1; /* start showing ellipsis when 3rd line is reached */
                              white-space: pre-wrap;
                            "
                          >
                            <img
                              src="/img/live/livelive.gif"
                              alt="Image not Found"
                              width="50"
                              style="margin-top: 5px !important"
                            />
                          </span>

                          <span
                            style="font-size: 15px"
                            v-else-if="
                              finishMatches.includes(match.status.code)
                            "
                          >
                            {{ match.status.description }}</span
                          >

                          <span
                            style="font-size: 15px"
                            v-else-if="
                              liveendedMatches.includes(match.status.code)
                            "
                          >
                            {{ match.status.description }}
                          </span>

                          <p v-else>
                            {{ getMatchTime(match.startTimestamp) }}
                          </p>
                        </span>
                      </td>
                      <td>
                        <a href="matches-details.html" class="btn ms-ti"
                          >{{ match.homeTeam.shortName }}
                          <img
                            class="event-teams-logo"
                            :src="
                              'https://api.sofascore.app/api/v1/team/' +
                              match.homeTeam.id +
                              '/image/small'
                            "
                            alt=""
                          />
                          &nbsp; <span>vs</span> &nbsp;
                          <img
                            class="event-teams-logo"
                            :src="
                              'https://api.sofascore.app/api/v1/team/' +
                              match.awayTeam.id +
                              '/image/small'
                            "
                            alt=""
                          />
                          {{ match.awayTeam.shortName }}</a
                        >
                      </td>
                      <td>
                        <span>
                          <span
                            v-if="liveMatches.includes(match.status.code)"
                            style="
                              overflow: hidden;
                              display: -webkit-box;
                              -webkit-box-orient: vertical;
                              -webkit-line-clamp: 3; /* start showing ellipsis when 3rd line is reached */
                              white-space: pre-wrap;
                            "
                          >
                            {{ match.tournament.name }}
                          </span>

                          <span
                            style="font-size: 15px"
                            v-else-if="
                              finishMatches.includes(match.status.code)
                            "
                          >
                            {{ match.note }}</span
                          >

                          <span
                            style="font-size: 15px"
                            v-else-if="
                              liveendedMatches.includes(match.status.code)
                            "
                          >
                            {{ match.status.description }}
                          </span>

                          <p v-else>{{ match.tournament.name }}</p>
                        </span>
                      </td>
                      <td>
                        <a
                          data-bs-toggle="modal"
                          data-bs-target="#bookModal"
                          class="btn details-btn"
                        >
                          Details
                        </a>
                      </td>
                    </tr>
                  </tbody>
                  <tbody v-else>
                    <tr class="odd" style="cursor: pointer">
                      <td class="sorting_1" colspan="4">Currently no Match is Live, Check <a href="/cricket/upcoming/matches">Upcoming</a> or <a href="/cricket/previous/matches">Finished</a></td>
                    </tr>
                  </tbody>
                  <!-- end::table body -->
                </table>
              </div>
            </div>
            <!-- end::body -->
          </div>
        </section>
      </div>
    </div>
  </div>
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
      activeBtn: "live",
      liveMatches: [20, 21, 22, 45],
      finishMatches: [100],
      upcomingMatches: [0],
      liveendedMatches: [143],
      isEmpty: null,
    };
  },
  mounted() {
    this.getTodayLiveMatchList("live");
  },

  methods: {
    // method to call matchList API
    getTodayLiveMatchList(status) {
      this.activeBtn = status;
      this.loading = true;
      axios
        .get(`${this.BASE_SERVER_URI}/api/cricket/sofascore/today/live/matches`)
        .then((response) => {
          this.matchDetails = response.data.events;
          this.isEmpty = this.matchDetails.length;
          this.loading = false;
        });
    },

    // method to return live matches
    getTodayAllMatchList(status) {
      this.loading = true;
      this.activeBtn = status;
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
          this.matchDetails = response.data.events;
          this.loading = false;
        });
    },

    // method to get team details
    getMatchDetails(id, homeTeam, awayTeam, status) {
      let team = homeTeam.toLowerCase() + "-vs-" + awayTeam.toLowerCase();

      if (
        this.liveMatches.includes(status) ||
        this.liveendedMatches.includes(status)
      ) {
        window.open("/cricket/today/live/match/" + team + "/" + id, "_blank");
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
    // method to get match time
    getMatchTime(timeStamp) {
      const date = new Date(timeStamp * 1000);
      return date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });
    },
  },
};
</script>
<style scoped>
.disabled-table {
  pointer-events: none;
  opacity: 0.7;
}
/* Smartphones (portrait and landscape) ----------- */
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .mobile-version {
    display: block;
  }
  .desktop-version {
    display: none;
  }
}

/* Smartphones (portrait) ----------- */
@media only screen and (max-width: 320px) {
  .mobile-version {
    display: block;
  }
  .desktop-version {
    display: none;
  }
}

/* iPads (portrait and landscape) ----------- */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .mobile-version {
    display: none;
  }
  .desktop-version {
    display: block;
  }
}

/* Desktops and laptops ----------- */
@media only screen and (min-width: 1224px) {
  .mobile-version {
    display: none;
  }
  .desktop-version {
    display: block;
  }
}

/* Large screens ----------- */
@media only screen and (min-width: 1824px) {
  .mobile-version {
    display: none;
  }
  .desktop-version {
    display: block;
  }
  /* Styles */
}
</style>
