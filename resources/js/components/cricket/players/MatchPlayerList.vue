<template>
    <div
        class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 mt-0 mt-lg-0 g-4 g-lg-5"
        v-if="!loading"
    >
        <!-- begin::home players -->
        <div class="col-lg-12">
            <h1 class="comon-heading m-0">
                {{ matchDetails.event.homeTeam.shortName }} Squad
            </h1>
        </div>
        <div class="col" v-for="player in homeLineups" :key="player.id">
            <div v-if="!player.substitute">
                <center>
                    <a
                        class="cmonon-plyaars"
                        v-on:click="
                            getPlayerDetails(
                                player.player.id,
                                player.player.slug
                            )
                        "
                        style="cursor: pointer"
                    >
                        <figure>
                            <img
                                style="max-width: 50% !important"
                                :src="
                                    'https://ios.app99877.com//images/cricket/players/' +
                                    player.player.id +
                                    '/' +
                                    player.player.id +
                                    '.png'
                                "
                                @error="$event.target.src = defaultPlayerPhoto"
                                alt="gps1"
                                class="mobile-version"
                            />
                            <img
                                style="max-width: 80% !important"
                                :src="
                                    'https://ios.app99877.com//images/cricket/players/' +
                                    player.player.id +
                                    '/' +
                                    player.player.id +
                                    '.png'
                                "
                                @error="$event.target.src = defaultPlayerPhoto"
                                alt="gps1"
                                class="desktop-version"
                            />
                        </figure>

                        <div>
                            <h5>
                                {{ player.player.name }}
                                <span
                                    v-if="player.player.position == 'BM'"
                                    class="d-block"
                                >
                                    Batsman
                                </span>
                                <span
                                    v-else-if="player.player.position == 'AR'"
                                    class="d-block"
                                >
                                    All Rounder
                                </span>
                                <span
                                    v-else-if="player.player.position == 'B'"
                                    class="d-block"
                                >
                                    Bowler
                                </span>
                                <span
                                    v-else-if="player.player.position == 'WK'"
                                    class="d-block"
                                >
                                    Wicket Keeper
                                </span>
                            </h5>

                            <span class="num text-center" v-if="player.captain">
                                C</span
                            >
                        </div>
                    </a>
                </center>
            </div>
        </div>
        <!-- end::home players -->

        <!-- begin::away players -->
        <div class="col-lg-12">
            <h1 class="comon-heading m-0">
                {{ matchDetails.event.awayTeam.shortName }} Squad
            </h1>
        </div>
        <div class="col" v-for="player in awayLineups" :key="player.id">
            <div v-if="!player.substitute">
                <center>
                    <a
                        class="cmonon-plyaars"
                        v-on:click="
                            getPlayerDetails(
                                player.player.id,
                                player.player.slug
                            )
                        "
                        style="cursor: pointer"
                    >
                        <figure>
                            <img
                                style="max-width: 50% !important"
                                :src="
                                    'https://ios.app99877.com//images/cricket/players/' +
                                    player.player.id +
                                    '/' +
                                    player.player.id +
                                    '.png'
                                "
                                @error="$event.target.src = defaultPlayerPhoto"
                                alt="gps1"
                                class="mobile-version"
                            />
                            <img
                                style="max-width: 80% !important"
                                :src="
                                    'https://ios.app99877.com//images/cricket/players/' +
                                    player.player.id +
                                    '/' +
                                    player.player.id +
                                    '.png'
                                "
                                @error="$event.target.src = defaultPlayerPhoto"
                                alt="gps1"
                                class="desktop-version"
                            />
                        </figure>

                        <div>
                            <h5>
                                {{ player.player.name }}
                                <span
                                    v-if="player.player.position == 'BM'"
                                    class="d-block"
                                >
                                    Batsman
                                </span>
                                <span
                                    v-else-if="player.player.position == 'AR'"
                                    class="d-block"
                                >
                                    All Rounder
                                </span>
                                <span
                                    v-else-if="player.player.position == 'B'"
                                    class="d-block"
                                >
                                    Bowler
                                </span>
                                <span
                                    v-else-if="player.player.position == 'WK'"
                                    class="d-block"
                                >
                                    Wicket Keeper
                                </span>
                            </h5>

                            <span class="num text-center" v-if="player.captain">
                                C</span
                            >
                        </div>
                    </a>
                </center>
            </div>
        </div>
        <!-- end::home players -->
    </div>
    <br />
</template>
<script>
import axios from "axios";
export default {
    props: {
        matchId: {
            type: Object,
            default: null,
        },
    },

    mounted() {
        this.getMatchLineups();
        this.getFinishedMatchList();
    },
    data() {
        return {
            homeLineups: null,
            matchInnings: null,
            defaultPlayerPhoto: "/img/default/player-default.png",
            matchDetails: null,
            awayLineups: null,
            loading: true,
        };
    },
    methods: {
        getMatchLineups() {
            axios
                .get(
                    `${this.BASE_SERVER_URI}/api/cricket/sofascore/single/match/lineups/${this.matchId}`
                )
                .then((response) => {
                    this.homeLineups =
                        response.data && response.data.home
                            ? response.data.home["players"]
                            : "";
                    this.awayLineups =
                        response.data && response.data.home
                            ? response.data.away["players"]
                            : "";
                });
        },
        // method to player details
        getPlayerDetails(playerId, slug) {
            window.open(
                "/cricket/" + slug + "/player/details/" + playerId,
                "_blank"
            );
        },

        getFinishedMatchList() {
            axios
                .get(
                    `${this.BASE_SERVER_URI}/api/cricket/sofascore/single/match/details/${this.matchId}`
                )
                .then((response) => {
                    this.matchDetails = response.data;
                    this.loading = false;
                });
        },
    },
};
</script>
