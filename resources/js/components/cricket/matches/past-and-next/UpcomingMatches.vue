<template>
  <section class="body-part-total float-start w-100">
    <div class="schedule-main-div">
      <br />
      <div class="container">
        <!-- begin::header section -->
        <div class="d-flex justify-content-between align-items-center">
          <h2
            class="comon-heading mt-4"
            style="
              color: rgb(7, 31, 64);
              font-family: Barlow Condensed, sans-seri0 !important;
              font-weight: 600 !important;
            "
          >
            {{ loading ? "Loading..." : "Upcoming Matches" }}
            <img
              v-if="loading"
              src="/img/spinner.gif"
              alt="Image not Found"
              style="width: 40px"
            />
          </h2>
          <a href="/" class="btn all-cm-btn"> Home </a>
        </div>
        <!-- end::header section -->
        <div class="table-div-left mt-4">
          <div id="seri3_wrapper" class="dataTables_wrapper">
            <!-- begin::tabs -->
            <div class="dataTables_length" id="seri3_length">
              <template v-for="val in [1, 2, 3, 4, 5, 6, 7, 8]" :key="val">
                <a
                  v-on:click="getUpcomingMatchList(val)"
                  class="btn all-cm-btn"
                  :style="
                    dayClickedBtnVal == val
                      ? 'background-color: rgb(238,29,54);'
                      : 'background-color: gray;'
                  "
                  style="margin-top: 5px !important"
                >
                  <img
                    src="/img/spinner.gif"
                    alt="Image not Found"
                    style="width: 20px"
                    v-if="dayClickedBtnVal == val && loadingBtn"
                  />
                  {{ prevDate(val) }}
                </a>
                &nbsp;
              </template>
            </div>
            <!-- end::tabs -->
            <div id="seri3_wrapper" class="dataTables_wrapper">
              <table
                id="seri3"
                class="display dataTable"
                :class="loading || loadingBtn ? 'disabled' : ''"
                aria-describedby="seri3_info"
                style="width: 100%"
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
                      style="width: 123px"
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
                      style="width: 287px"
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
                <tbody>
                  <tr
                    style="cursor: pointer"
                    class="odd"
                    v-for="match in matchList"
                    :key="match.id"
                    v-on:click="
                      getMatchDetails(
                        match.id,
                        match.homeTeam.slug,
                        match.awayTeam.slug
                      )
                    "
                  >
                    <!-- if data is available -->
                    <template v-if="upcomingMatches.includes(match.status.code)">
                      <td class="sorting_1">
                        {{ getMatchTime(match.startTimestamp) }}
                      </td>
                      <td>
                        <a class="btn ms-ti">
                          {{ match.homeTeam.shortName }}
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
                        {{ match.tournament.name }}
                      </td>
                      <td>
                        <a
                          data-bs-toggle="modal"
                          data-bs-target="#bookModal"
                          class="btn details-btn"
                          v-on:click="
                            getMatchDetails(
                              match.id,
                              match.homeTeam.slug,
                              match.awayTeam.slug
                            )
                          "
                        >
                          Details
                        </a>
                      </td>
                    </template>
           
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
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
import { defineComponent } from "vue";
import Footer from "./../../../partials/commons/Footer.vue";
import axios from "axios";
export default defineComponent({
  name: "Autoplay",
  components: {
    axios,
    Footer,
  },
  data() {
    return {
      matchList: null,
      loading: true,
      selectedDate: null,
      loadingBtn: true,
      dayClickedBtnVal: null,
      upcomingMatches: [0],
    };
  },
  created() {
    this.getUpcomingMatchList(1);
  },
  methods: {
    prevDate(daysBefore) {
      let current = new Date();
      current.setTime(current.getTime() + daysBefore * 24 * 60 * 60 * 1000); // Subtract 7 days
      return `${current.getFullYear()}-${
        current.getMonth() + 1
      }-${current.getDate()}`;
    },

    // method to return live matches
    getUpcomingMatchList(val) {
      const current = new Date();
      current.setTime(current.getTime() + val * 24 * 60 * 60 * 1000);
      this.selectedDate = `${current.getFullYear()}-${
        current.getMonth() + 1
      }-${current.getDate()}`;
      this.dayClickedBtnVal = val;
      this.loadingBtn = true;
      axios
        .get(
          `${this.BASE_SERVER_URI}/api/cricket/sofascore/today/all/matches/${this.selectedDate}`
        )
        .then((response) => {
          this.matchList = response.data.events;
          this.loading = false;
          this.loadingBtn = false;
        });
    },

    // method to return match time
    getMatchTime(time_stamp) {
      var date = new Date(time_stamp * 1000);
      return (
        ("0" + date.getHours()).slice(-2) +
        ":" +
        ("0" + date.getMinutes()).slice(-2)
      );
    },

    // method to render live,upcoming or finish match page.
    getMatchDetails(matchId, homeSlug, awaySlug) {
      let team = homeSlug + "-" + awaySlug;
      window.open(
        "/cricket/today/upcoming/match/" + team + "/" + matchId,
        "_blank"
      );
    },
  },
});
</script>
<style scoped>
.disabled {
  opacity: 0.7;
  pointer-events: none;
}
</style>
