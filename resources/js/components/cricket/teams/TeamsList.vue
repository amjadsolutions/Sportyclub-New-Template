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
                <ICCODIWORLDCUP />
                <br>
                <PSL />
              <br>
              <IPL />
                <!-- end::icc teams -->
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
import PSL from "./leagues/psl-league.vue";
import IPL from "./leagues/ipl-league.vue";
import ICCODIWORLDCUP from "./leagues/icc-odi-worldcup.vue";

export default {
    components: {
        axios,
        Footer,
        PSL,
        IPL,
        ICCODIWORLDCUP
    },
    data() {
        return {
            // loading: true,
        };
    },
};
</script>
