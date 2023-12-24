<template>
  <section class="body-part-total float-start w-100">
    <div class="playerrs-div-total py-5">
      <div class="golaskipers-div">
        <div class="container">
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
                  style="width: 40px; margin-top: 0px !important"
                />
              </h2>
            </div>
          </div>
          <!-- end::loader secton -->
          <!-- begin::lists -->
          <template v-if="!loading">
            <h1
              class="comon-heading m-0"
              style="
                color: rgb(7, 31, 64);
                font-family: Barlow Condensed, sans-seri0 !important;
                font-weight: 600 !important;
              "
            >
              Latest Cricket News
            </h1>
            <div
              class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mt-0 mt-lg-0 g-4 g-lg-4"
            >
              <div
                class="col"
                v-for="news in newsList"
                :key="news.id"
                v-on:click="getNewsDetails(news.id)"
              >
                <a href="players-details.html" class="cmonon-plyaars">
                  <!-- begin::image -->
                  <figure>
                    <img
                      :src="'https://ios.app99877.com/' + news.image"
                      alt="gl1"
                    />
                  </figure>
                  <!-- end::image -->
                  <!-- begin::title -->
                  <div
                    class="d-flex align-items-center justify-content-between"
                  >
                    <h5
                      style="
                        display: -webkit-box;
                        -webkit-line-clamp: 3; /* Limit to 3 lines */
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                      "
                    >
                      {{ news.title }}
                    </h5>
                  </div>
                  <!-- end::title -->
                </a>
              </div>
            </div>
          </template>
          <!-- end::lists -->
        </div>
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
      newsList: null,
      loading: true,
      newsDetails: null,
      totlePages: null,
    };
  },

  created() {
    this.getNewsList(1);
    this.getPageMetaContents();
  },
  methods: {
    // method to get news list from API
    getNewsList(pageNumber) {
      axios
        .get(
          `${this.BASE_SERVER_URI}/api/cricket/sofascore/news/list?pageNumber=${pageNumber}`
        )
        .then((response) => {
          this.newsList = response.data.cricketNewsList;
          this.totlePages = response.data.totalPages;
          this.loading = false;
        });
    },
    // method to get news details from API
    getNewsDetails(newsId) {
      window.open("/cricket/news/details/" + newsId, "_blank");
    },
    // meta to get page contents
    getPageMetaContents() {
      axios
        .get(
          `${this.BASE_SERVER_URI}/api/cricket/sofascore/news/list/contents/meta`
        )
        .then((response) => {
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

          this.loading = false;
        });
    },
  },
};
</script>
        
