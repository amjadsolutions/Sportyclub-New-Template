<template v-if="!loading">
    <span v-if="odiTeamsList">
        <teamplate v-for="standings in odiTeamsList" :key="standings.id">
            <div
                class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 g-4 g-lg-5"
            >
                <div class="col-lg-12 col-xl-12">
                    <h2
                        class="comon-heading m-0"
                        style="
                            color: rgb(7, 31, 64);
                            font-family: Barlow Condensed, sans-seri0 !important;
                            font-weight: 600 !important;
                        "
                    >
                        {{ standings && standings.name ? standings.name : "" }}
                        Teams
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
                            background-color: rgb(12, 26, 44);
                            cursor: pointer;
                        "
                        v-on:click="getTeamDetails(row.team.id, row.team.slug)"
                    >
                        <h5 class="mn-mc-titel">
                            {{ row.team.name }}
                        </h5>

                        <hr />
                        <div
                            class="d-flex align-items-center justify-content-center mt-2"
                        >
                            <img
                                :src="getImageUrl(row.team.id, '-small')"
                                @error="
                                    $event.target.src =
                                        'https://ios.app99877.com//images/cricket/default/default-team.png'
                                "
                                alt="image not found"
                            />
                        </div>
                    </a>
                </div>
            </div>
        </teamplate>
    </span>
</template>
<script>
import axios from "axios";
export default {
    components: {
        axios,
    },
    data() {
        return {
            leagueId: null,
            loading: true,
            odiTeamsList: null,
            pslTeamsList: null,
        };
    },

    created() {
        this.getOdiInternationalTeams(20661);
    },
    methods: {
        // method to get odi international teams
        getOdiInternationalTeams(leagueId) {
            this.leagueId = leagueId;
            axios
                .get(
                    `${this.BASE_SERVER_URI}/api/cricket/sofascore/topLeagues/season/standings/list/${leagueId}`
                )
                .then((response) => {
                    axios
                        .get(
                            `${this.BASE_SERVER_URI}/api/cricket/sofascore/topLeagues/singe/season/standings/${this.leagueId}/${response.data.seasons[0].id}`
                        )
                        .then((response) => {
                            this.odiTeamsList = response.data.standings;
                        });
                    this.loading = false;
                });
        },
        // method to psl teams

        //   method to get team details
        getTeamDetails(teamId, slug) {
            var basePath = window.location.origin;
            var w = window.open();
            w.document.location.href =
                basePath + "/cricket/" + slug + "/team/details/" + teamId;
            w.document.target = "_blank";
        },
        getImageUrl(id) {
            // Check if the actual image URL is available
            if (id) {
                return (
                    "https://ios.app99877.com//images/cricket/teams/" +
                    id +
                    "/" +
                    id +
                    ".png"
                );
            }
            return "https://ios.app99877.com//images/cricket/default/default-team.png";
        },
    },
};
</script>
