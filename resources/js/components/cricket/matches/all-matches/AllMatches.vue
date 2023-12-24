<template>
  <section class="body-part-total float-start w-100">
    <div class="schedule-main-div">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center">
          <h2 class="comon-heading m-0">
            {{ loading ? "Loading..." : pageTitle }}
            <img
              v-if="loading"
              src="/img/spinner.gif"
              alt="Image not Found"
              style="width: 40px"
            />
          </h2>
          <!--v-if--><a href="/" class="btn all-cm-btn"> Home </a>
        </div>
        <div class="table-div-left mt-4">
          <div id="seri3_wrapper" class="dataTables_wrapper">
            <div class="dataTables_length" id="seri3_length">
              <label
                >Select Date
                <select
                  name="seri3_length"
                  aria-controls="seri3"
                  class=""
                  id="finished-matches"
                  v-on:change="getMatchList()"
                >
                  <option>Today</option>
                  <option>Tomorrow</option>
                  <option>Yesterday</option>
                </select>
              </label>
            </div>

            <table
              id="seri3"
              class="display dataTable"
              style="width: 100%"
              aria-describedby="seri3_info"
            >
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
                    Time
                  </th>
                  <th
                    class="sorting"
                    tabindex="0"
                    aria-controls="seri3"
                    rowspan="1"
                    colspan="2"
                    aria-label="Event: activate to sort column ascending"
                    style="width: 287px"
                  >
                    Teams
                  </th>

                  <th
                    class="sorting"
                    tabindex="0"
                    aria-controls="seri3"
                    rowspan="1"
                    colspan="1"
                    aria-label=" Season : activate to sort column ascending"
                    style="width: 109px"
                  >
                    League
                  </th>

                  <th
                    class="sorting"
                    tabindex="0"
                    aria-controls="seri3"
                    rowspan="1"
                    colspan="1"
                    aria-label="Action: activate to sort column ascending"
                    style="width: 178px"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="match in matchList" :key="match.id">
                  <td class="sorting_1">
                    <span v-if="liveMatches.includes(match.status_id)">
                      <img
                        src="/img/live/livelive.gif"
                        alt="Image not Found"
                        width="50"
                      />
                    </span>

                    <span v-else>
                      {{
                        match.status_id == 100
                          ? "Finished"
                          : getMatchTime(match.match_time)
                      }}
                    </span>
                  </td>
                  <td colspan="2">
                    <a href="" class="btn ms-ti">
                      {{ match.home_Info.en_name }} VS
                      {{ match.away_Info.en_name }}
                    </a>
                  </td>

                  <td>
                    {{
                      match.status_id == 100
                        ? match.status_id == 100
                          ? "won by " + match.extra_scores &&
                            match.extra_scores.results &&
                            match.extra_scores.results.result === 1
                            ? getWinnerDetails(
                                match.home_Info.en_name,
                                match.extra_scores.results.margin,
                                match.extra_scores.results.result
                              )
                            : getWinnerDetails(
                                match.away_Info.en_name,
                                match.extra_scores.results.margin,
                                match.extra_scores.results.result
                              )
                          : match.league_Info.en_name
                        : match.league_Info.en_name
                    }}
                  </td>

                  <td>
                    <a
                      data-bs-toggle="modal"
                      data-bs-target="#bookModal"
                      class="btn details-btn"
                      v-on:click="getMatchDetails(match.id, match.status_id)"
                    >
                      Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-arrow-up-right-square-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z"
                        ></path>
                      </svg>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
  
  <script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Autoplay",
  components: {},
  data() {
    return {
      matchList: null,
      dayNum: 0,
      loading: true,
      pageTitle: "Today Fixtures",
      liveMatches: [532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543],
      finishMatches: [100],
      upcomingMatches: [1],
    };
  },
  created() {
    this.getMatchList();
  },
  methods: {
    prevDate(daysBefore) {
      let current = new Date();
      current.setTime(current.getTime() + daysBefore * 24 * 60 * 60 * 1000); // Subtract 7 days
      return `${current.getFullYear()}-${
        current.getMonth() + 1
      }-${current.getDate()}`;
    },
    // method to return winner Team
    getWinnerDetails(team, margin, type) {
      return type === 1 ? " Won by " + team : " Won by " + team;
    },

    // method to return live matches
    getMatchList() {
      this.loading = true;
      //   get today matchlist
      if (
        typeof $("#finished-matches :selected").val() === "undefined" ||
        $("#finished-matches :selected").val() === "Today"
      ) {
        this.dayNum = 0;
        this.pageTitle = "Today Fixtures";
        axios
          .get(`${this.BASE_SERVER_URI}/api/cricket/matchlist/today`)
          .then((response) => {
            this.matchList = response.data.matchList;
            this.loading = false;
          });
      }
      //   get tomorrow matchList
      else if ($("#finished-matches :selected").val() === "Tomorrow") {
        this.dayNum = 1;
        this.pageTitle = "Tomorrow Fixtures";
        axios
          .get(`${this.BASE_SERVER_URI}/api/cricket/matchlist/past/1`)
          .then((response) => {
            this.matchList = response.data.matchList;
            this.loading = false;
          });
      }
      //   get Yeasterday matchList
      else {
        this.dayNum = -1;
        this.pageTitle = "Yesterday Fixtures";
        axios
          .get(`${this.BASE_SERVER_URI}/api/cricket/matchlist/past/-1`)
          .then((response) => {
            this.matchList = response.data.matchList;
            this.loading = false;
          });
      }
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
    getMatchDetails(matchId, status) {
      if (
        typeof $("#finished-matches :selected").val() === "undefined" ||
        $("#finished-matches :selected").val() === "Today"
      ) {
        if (this.liveMatches.includes(status)) {
          window.open("/cricket/today/live/match/" + matchId, "_blank");
        } else if (this.upcomingMatches.includes(status)) {
          window.open("/cricket/today/upcoming/match/" + matchId, "_blank");
        } else if (this.finishMatches.includes(status)) {
          window.open("/cricket/today/finished/match/" + matchId, "_blank");
        }
      }
      //   get tomorrow matchList
      else if ($("#finished-matches :selected").val() === "Tomorrow") {
        window.open(
          "next-match-details/" + matchId + "/" + this.dayNum,
          "_blank"
        );
      }
      //   get Yeasterday matchList
      else {
        window.open(
          "past-match-details/" + matchId + "/" + this.dayNum,
          "_blank"
        );
      }
    },
  },
});
</script>