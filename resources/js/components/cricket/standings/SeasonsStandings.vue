<template>
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
                  <tbody v-for="standing in seasonStandings" :key="standing">
                    <tr class="odd">
                      <td colspan="5" style="background-color: brown;color: white;">
                        {{ standing.name }} 
                      </td>
                    </tr>

                    <tr class="odd" v-for="row in standing.rows" :key="row.id">
                      <td class="sorting_1" colspan="2">
                        <div class="comon-ft-cl">
                          <figure class="d-flex align-items-center">
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
                      <td>{{ row.wins }}</td>
                      <td>{{ row.losses }}</td>
                      <td>{{ row.points }}</td>
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
</template>


<script>
import axios from "axios";
export default {
  props: {
    leagueId: {
      type: Object,
      default: null,
    },
    seasonId: {
      type: Object,
      default: null,
    },
  },

  mounted() {
    this.getLeagueStandings(this.leagueId, this.seasonId);
  },
  data() {
    return {
      seasonStandings: null,
    };
  },
  methods: {
    getLeagueStandings(leagueId, seasonId) {
      axios
        .get(
          `${this.BASE_SERVER_URI}/api/cricket/top-leagues-single-season-standings/${leagueId}/${seasonId}`
        )
        .then((response) => {
          if (typeof response.data.standings !== "undefined") {
            this.seasonStandings = response.data.standings;
          } else {
            this.seasonStandings = "";
          }
        });
    },
  },
};
</script>