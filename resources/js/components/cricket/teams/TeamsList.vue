<template>
    <section class="body-part-total float-start w-100">
        <div class="our-news-div-main py-5">
            <div class="container">
                <div class="d-flex justify-content-between align-items-center">
                    <!-- begin::loader section -->
                    <div
                        class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 g-4 g-lg-5"
                        v-if="loading"
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
                        </div>
                    </div>
                    <!-- end::loader secton -->
                </div>
                <!-- begin::icc teams -->
                <teamplate v-if="!loading">
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
                                International Cricket Teams
                            </h2>
                        </div>
                    </div>
                    <br />
                    <div
                        class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-5 gx-md-5 gy-lg-0 gx-lg-5 mt-0"
                    >
                        <div
                            class="col-lg-3"
                            v-for="team in iCCTeamsList"
                            :key="team.id"
                            style="margin-top: 10px"
                        >
                            <a
                                class="top-next-mc text-center"
                                style="
                                    background-color: rgb(12, 26, 44);
                                    cursor: pointer;
                                "
                                v-on:click="getTeamDetails(team.id, team.slug)"
                            >
                                <h5 class="mn-mc-titel">{{ team.nameEn }}</h5>
                                <hr />
                                <div
                                    class="d-flex align-items-center justify-content-center mt-2"
                                >
                                    <img
                                        :src="
                                            'https://api.sofascore.app/api/v1/team/' +
                                            team.id +
                                            '/image'
                                        "
                                        alt="image not found"
                                    />
                                </div>
                            </a>
                        </div>
                    </div>
                </teamplate>
                <!-- end::icc teams -->
                <!-- begin::psl teams -->
                <teamplate v-if="!loading">
                    <br />
                    <br />
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
                                Indian Premier League Teams
                            </h2>
                        </div>
                    </div>
                    <br />
                    <div
                        class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-5 gx-md-5 gy-lg-0 gx-lg-5 mt-0"
                    >
                        <div
                            class="col-lg-3"
                            v-for="team in iplTeamsList"
                            :key="team.id"
                            style="margin-top: 10px"
                        >
                            <a
                                class="top-next-mc text-center"
                                style="
                                    background-color: rgb(12, 26, 44);
                                    cursor: pointer;
                                "
                                v-on:click="getTeamDetails(team.id, team.slug)"
                            >
                                <h5 class="mn-mc-titel">{{ team.nameEn }}</h5>
                                <hr />
                                <div
                                    class="d-flex align-items-center justify-content-center mt-2"
                                >
                                    <img
                                        :src="
                                            'https://api.sofascore.app/api/v1/team/' +
                                            team.id +
                                            '/image'
                                        "
                                        alt="image not found"
                                    />
                                </div>
                            </a>
                        </div>
                    </div>
                </teamplate>
                <!-- end::psl teams -->
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
            iCCTeamsList: null,
            iplTeamsList: null,
            loading: true,
        };
    },

    created() {
        this.getTeamsList();
        this.getIplTeamsList();
    },
    methods: {
        getTeamsList() {
            axios
                .get(`${this.BASE_SERVER_URI}/api/cricket/sofascore/teams/list`)
                .then((response) => {
                    this.iCCTeamsList = response.data.teamList;
                    this.loading = false;
                });
        },
        getIplTeamsList() {
            axios
                .get(`${this.BASE_SERVER_URI}/api/cricket/sofascore/teams/ipl`)
                .then((response) => {
                    this.iplTeamsList = response.data.teamList;
                    this.loading = false;
                });
        },
        getTeamDetails(teamId, slug) {
            var basePath = window.location.origin;
            var w = window.open();
            w.document.location.href =
                basePath + "/cricket/" + slug + "/team/details/" + teamId;
            w.document.target = "_blank";
        },
    },
};
</script>
