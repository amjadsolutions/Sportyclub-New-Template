<template>
    <div class="matech-div-main">
        <div class="mn-next-part">
            <div class="container">
                <!-- begin:: tabs button -->
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <template
                        v-for="(inning, index) in matchInnings"
                        :key="inning.id"
                    >
                        <li class="nav-item" role="presentation">
                            <button
                                :class="index == 0 ? 'active' : ''"
                                class="nav-link"
                                :id="'inning-' + inning.number + '-tab'"
                                data-bs-toggle="pill"
                                :data-bs-target="'#inning-' + inning.number"
                                type="button"
                                role="tab"
                                :aria-controls="'inning-' + inning.number"
                                aria-selected="true"
                            >
                                Innings {{ inning.number }}
                            </button>
                        </li>
                        &nbsp;
                    </template>
                </ul>
                <!-- end::tabs button -->
                <div class="tab-content" id="pills-tabContent">
                    <!-- begin::1st innings -->

                    <template
                        v-for="(inning, index) in matchInnings"
                        :key="inning.id"
                    >
                        <div
                            :class="++index == 1 ? 'show active' : ''"
                            class="tab-pane fade"
                            :id="'inning-' + index"
                            role="tabpanel"
                            :aria-labelledby="'inning-' + index + '-tab'"
                        >
                            <div>
                                <h2
                                    class="comon-heading m-0"
                                    v-if="inning.number == index"
                                >
                                    {{
                                        matchDetails.event.homeTeam.shortName
                                    }}
                                    VS
                                    {{ matchDetails.event.awayTeam.shortName }}
                                </h2>
                                <div
                                    class="row g-lg-5"
                                    v-if="inning.number == index"
                                >
                                    <!-- begin::batting -->
                                    <div class="col-lg-6">
                                        <div class="table-div-left mt-4">
                                            <h4>
                                                {{
                                                    inning.battingTeam.shortName
                                                }}
                                                Batting
                                            </h4>
                                            <div
                                                id="seri1_wrapper"
                                                class="dataTables_wrapper"
                                            >
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
                                                                <th>Player</th>
                                                                <th>R</th>
                                                                <th>B</th>
                                                                <th>4s</th>
                                                                <th>6s</th>
                                                            </thead>
                                                            <tbody>
                                                                <tr
                                                                    class="odd"
                                                                    v-for="batting in inning.battingLine"
                                                                    :key="
                                                                        batting.id
                                                                    "
                                                                    style="
                                                                        cursor: pointer;
                                                                    "
                                                                >
                                                                    <td
                                                                        class="sorting_1"
                                                                        v-on:click="
                                                                            getPlayerDetails(
                                                                                batting
                                                                                    .player
                                                                                    .id,
                                                                                batting
                                                                                    .player
                                                                                    .slug
                                                                            )
                                                                        "
                                                                    >
                                                                        {{
                                                                            batting.playerName
                                                                        }}
                                                                        <br />
                                                                        <small
                                                                            v-if="
                                                                                batting.wicketTypeId ==
                                                                                1
                                                                            "
                                                                        >
                                                                            B
                                                                            {{
                                                                                batting
                                                                                    .wicketBowler
                                                                                    .shortName
                                                                            }}
                                                                        </small>
                                                                        <small
                                                                            v-else-if="
                                                                                batting.wicketTypeId ==
                                                                                2
                                                                            "
                                                                        >
                                                                            LBW
                                                                            {{
                                                                                batting.wicketBowlerName
                                                                            }}
                                                                        </small>
                                                                        <small
                                                                            v-else-if="
                                                                                batting.wicketTypeId ==
                                                                                3
                                                                            "
                                                                        >
                                                                            C
                                                                            {{
                                                                                batting.wicketCatchName
                                                                            }}
                                                                            & B
                                                                            {{
                                                                                batting
                                                                                    .wicketBowler
                                                                                    .shortName
                                                                            }}
                                                                        </small>
                                                                        <small
                                                                            v-else-if="
                                                                                batting.wicketTypeId ==
                                                                                6
                                                                            "
                                                                        >
                                                                            C &
                                                                            B
                                                                            {{
                                                                                batting
                                                                                    .wicketBowler
                                                                                    .shortName
                                                                            }}
                                                                        </small>
                                                                        <small
                                                                            v-else-if="
                                                                                batting.wicketTypeId ==
                                                                                10
                                                                            "
                                                                        >
                                                                            Not
                                                                            Out
                                                                        </small>
                                                                        <small
                                                                            v-else-if="
                                                                                batting.wicketTypeId ==
                                                                                9
                                                                            "
                                                                        >
                                                                        </small>
                                                                    </td>
                                                                    <td>
                                                                        {{
                                                                            batting.wicketTypeId !=
                                                                            9
                                                                                ? batting.score
                                                                                : ""
                                                                        }}
                                                                    </td>
                                                                    <td>
                                                                        {{
                                                                            batting.wicketTypeId !=
                                                                            9
                                                                                ? batting.balls
                                                                                : ""
                                                                        }}
                                                                    </td>
                                                                    <td>
                                                                        {{
                                                                            batting.wicketTypeId !=
                                                                            9
                                                                                ? batting.s4
                                                                                : ""
                                                                        }}
                                                                    </td>
                                                                    <td>
                                                                        {{
                                                                            batting.wicketTypeId !=
                                                                            9
                                                                                ? batting.s6
                                                                                : ""
                                                                        }}
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                            <tfoot>
                                                                <tr>
                                                                    <th
                                                                        rowspan="1"
                                                                        colspan="1"
                                                                        style="
                                                                            width: 185.6px;
                                                                        "
                                                                    >
                                                                        Extra
                                                                        &nbsp;
                                                                        ({{
                                                                            inning.extra
                                                                        }})
                                                                    </th>
                                                                    <th
                                                                        rowspan="1"
                                                                        colspan="1"
                                                                        style="
                                                                            width: 72.5625px;
                                                                        "
                                                                    ></th>
                                                                    <th
                                                                        rowspan="1"
                                                                        colspan="1"
                                                                        style="
                                                                            width: 185.6px;
                                                                        "
                                                                    >
                                                                        Total
                                                                        Runs
                                                                    </th>
                                                                    <th
                                                                        rowspan="1"
                                                                        colspan="1"
                                                                        style="
                                                                            width: 185.6375px;
                                                                        "
                                                                    >
                                                                        {{
                                                                            inning.score
                                                                        }}/{{
                                                                            inning.wickets
                                                                        }}
                                                                        ({{
                                                                            inning.overs
                                                                        }})
                                                                    </th>
                                                                </tr>
                                                            </tfoot>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end::batting -->
                                    <!-- begin::bowling -->
                                    <div class="col-lg-5">
                                        <div class="table-div-left mt-4">
                                            <h4>
                                                {{
                                                    inning.bowlingTeam.shortName
                                                }}
                                                Bowling
                                            </h4>
                                            <div
                                                id="seri1_wrapper"
                                                class="dataTables_wrapper"
                                            >
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
                                                                <th>Player</th>
                                                                <th>O</th>
                                                                <th>M</th>
                                                                <th>R</th>
                                                                <th>W</th>
                                                            </thead>
                                                            <tbody>
                                                                <tr
                                                                    class="odd"
                                                                    v-for="bowling in inning.bowlingLine"
                                                                    :key="
                                                                        bowling.id
                                                                    "
                                                                >
                                                                    <td
                                                                        class="sorting_1"
                                                                    >
                                                                        <div
                                                                            class="comon-ft-cl"
                                                                        >
                                                                            <figure
                                                                                style="
                                                                                    cursor: pointer;
                                                                                "
                                                                                class="d-flex align-items-center"
                                                                                v-on:click="
                                                                                    getPlayerDetails(
                                                                                        bowling
                                                                                            .player
                                                                                            .id,
                                                                                        bowling
                                                                                            .player
                                                                                            .slug
                                                                                    )
                                                                                "
                                                                            >
                                                                                <figcaption>
                                                                                    {{
                                                                                        bowling.playerName
                                                                                    }}
                                                                                </figcaption>
                                                                            </figure>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        {{
                                                                            bowling.over
                                                                        }}
                                                                    </td>
                                                                    <td>
                                                                        {{
                                                                            bowling.maiden
                                                                        }}
                                                                    </td>
                                                                    <td>
                                                                        {{
                                                                            bowling.run
                                                                        }}
                                                                    </td>
                                                                    <td>
                                                                        {{
                                                                            bowling.wicket
                                                                        }}
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            <br />
                                        </div>
                                        <!-- end::bowling -->
                                        <!-- begin::head to head -->
                                        <div class="table-div-left mt-4">
                                            <h4>
                                                Head To Head of
                                                {{
                                                    matchDetails.event.homeTeam
                                                        .shortName
                                                }}
                                                &
                                                {{
                                                    matchDetails.event.awayTeam
                                                        .shortName
                                                }}
                                            </h4>
                                            <div
                                                id="seri1_wrapper"
                                                class="dataTables_wrapper"
                                            >
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
                                                                    <td
                                                                        class="sorting_1"
                                                                    >
                                                                        <div
                                                                            class="comon-ft-cl"
                                                                        >
                                                                            <figure
                                                                                style="
                                                                                    cursor: pointer;
                                                                                "
                                                                                class="d-flex align-items-center"
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
                                                                                        'https://ios.app99877.com//images/cricket/teams/' +
                                                                                        matchDetails
                                                                                            .event
                                                                                            .homeTeam +
                                                                                        '/' +
                                                                                        matchDetails
                                                                                            .event
                                                                                            .homeTeam +
                                                                                        '-small' +
                                                                                        '.png'
                                                                                    "
                                                                                    alt="fbn"
                                                                                    style="
                                                                                        max-width: 20%;
                                                                                    "
                                                                                />&nbsp;&nbsp;
                                                                                {{
                                                                                    matchDetails
                                                                                        .event
                                                                                        .homeTeam
                                                                                        .name
                                                                                }}
                                                                            </figure>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        {{
                                                                            matchH2H.homeWins
                                                                        }}
                                                                    </td>

                                                                    <td>
                                                                        {{
                                                                            matchH2H.draws
                                                                        }}
                                                                    </td>
                                                                </tr>
                                                                <tr class="odd">
                                                                    <td
                                                                        class="sorting_1"
                                                                    >
                                                                        <div
                                                                            class="comon-ft-cl"
                                                                        >
                                                                            <figure
                                                                                class="d-flex align-items-center"
                                                                            >
                                                                                <figure
                                                                                    style="
                                                                                        cursor: pointer;
                                                                                    "
                                                                                    class="d-flex align-items-center"
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
                                                                                            'https://ios.app99877.com//images/cricket/teams/' +
                                                                                            matchDetails
                                                                                                .event
                                                                                                .awayTeam
                                                                                                .id +
                                                                                            '/' +
                                                                                            matchDetails
                                                                                                .event
                                                                                                .awayTeam
                                                                                                .id +
                                                                                            '-small' +
                                                                                            '.png'
                                                                                        "
                                                                                        alt="fbn"
                                                                                        style="
                                                                                            max-width: 20%;
                                                                                        "
                                                                                    />&nbsp;&nbsp;
                                                                                    {{
                                                                                        matchDetails
                                                                                            .event
                                                                                            .awayTeam
                                                                                            .name
                                                                                    }}
                                                                                    <figcaption></figcaption>
                                                                                </figure>
                                                                            </figure>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        {{
                                                                            matchH2H.awayWins
                                                                        }}
                                                                    </td>

                                                                    <td>
                                                                        {{
                                                                            matchH2H.draws
                                                                        }}
                                                                    </td>
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
                        </div>
                    </template>

                    <!-- end::1st innings -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    components: {
        axios,
    },
    data() {
        return {
            matchId: null,
            matchDetails: null,
            loading: true,

            matchInnings: null,

            matchH2H: null,
            playerInfo: null,
        };
    },
    mounted() {
        const url = window.location.href;
        const lastParam = url.split("/").slice(-1)[0];
        this.matchId = lastParam;
        this.getMatchList();
        this.getMatchInnings();
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

        getMatchInnings() {
            axios
                .get(
                    `${this.BASE_SERVER_URI}/api/cricket/sofascore/single/match/innings/${this.matchId}`
                )
                .then((response) => {
                    this.matchInnings = response.data.innings;
                });
        },
    },
};
</script>
