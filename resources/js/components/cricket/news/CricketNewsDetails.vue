<template>
  <section class="body-part-total float-start w-100">
    <div class="playerrs-div-total">
      <div class="golaskipers-div">
        <div class="container">
          <!-- begin::loader section -->
          <div
            class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 mt-0 mt-lg-0 g-4 g-lg-5"
            v-if="loading"
          >
            <div class="col-lg-12 col-xl-12">
              <div class="d-flex justify-content-between align-items-center">
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
          </div>
          <!-- end::loader sectopn -->
          <!-- begin::details -->
          <section class="body-part-total float-start w-100" v-if="!loading">
            <div class="blog-details-page comon-services-pge py-5">
              <div class="container">
                <div class="row gx-lg-5">
                  <div class="col-lg-7 col-xl-8">
                    <div class="blog-post">
                      <!-- image for mobile version -->
                      <figure
                        class="mobile-version"
                        style="height: 260px !important"
                      >
                        <center>
                          <img
                            :src="
                              'https://ios.app99877.com/' + newsDetails.image
                            "
                            alt="post"
                            style="
                              width: 100% !important;
                              height: 246px !important;
                            "
                          />
                        </center>
                      </figure>

                      <!--image for desktop version -->
                      <figure
                        class="desktop-version"
                        style="
                          height: 400px !important;
                          background-image: url('http://127.0.0.1:8000/img/default/bg_not_start.png');
                        "
                      >
                        <center>
                          <img
                            :src="
                              'https://ios.app99877.com/' + newsDetails.image
                            "
                            alt="post"
                            style="width: 70% !important"
                          />
                        </center>
                      </figure>

                      <div class="d-lg-flex justify-content-between share-div">
                        <!-- <ul class="list-unstyled d-flex">
                          <li><i class="far fa-user"></i> By Author</li>
                          <li><i class="far fa-calendar-alt"></i> Admin</li>
                        </ul> -->
                        <!-- <a
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          <i class="fas fa-share-alt"></i> Share</a
                        > -->
                      </div>
                      <h2 class="comon-heading mt-4">
                        {{ newsDetails.title }}
                      </h2>
                      <p v-html="newsDetails.details"></p>
                    </div>
                  </div>
                  <div class="col-lg-5 col-xl-4">
                    <div class="recent-post-div" style="margin-top: -20px">
                      <h2 class="mb-4 comon-heading">Recent Post</h2>
                      <div class="recent-post-div-insiide">
                        <a
                          v-for="news in newslists"
                          :key="news.id"
                          href="#"
                          class="d-flex w-100 justify-content-between align-items-center"
                          v-on:click="getnewsDetails(news.id)"
                        >
                          <figure>
                            <img
                              :src="'https://ios.app99877.com/' + news.image"
                              alt="post"
                            />
                          </figure>
                          <h5>{{ news.title }}</h5>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <!-- end::details -->
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
      loading: true,
      newsDetails: null,
      newslists: null,
    };
  },

  created() {
    const url = window.location.href;
    const lastParam = url.split("/").slice(-1)[0];
    this.getCurrentNewsDetails(lastParam);
    this.getPageMetaContents(lastParam);
  },
  methods: {
    // method to get news list from API
    getCurrentNewsDetails(newsId) {
      axios
        .get(
          `${this.BASE_SERVER_URI}/api/cricket/sofascore/news/details/${newsId}`
        )
        .then((response) => {
          this.newsDetails = response.data.cricketNewsDetails;
          this.newslists = response.data.cricketNewsList;
          this.loading = false;
        });
    },
    getnewsDetails(newsId) {
      window.open("/cricket/news/details/" + newsId, "_blank");
    },
    getPageMetaContents(newsId) {
      axios
        .get(
          `${this.BASE_SERVER_URI}/api/cricket/sofascore/news/details/contents/meta/${newsId}`
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
        
<style>
div #floater {
  display: none !important;
}

.m-date {
  width: 75px !important;
}
/* Extra Small Devices, Phones */
@media only screen and (min-width: 480px) {
  .mobile-version {
    display: block;
  }
  .desktop-version {
    display: none;
  }
}

/* Small Devices, Tablets */
@media only screen and (min-width: 768px) {
  .mobile-version {
    display: block;
  }
  .desktop-version {
    display: none;
  }
}

/* Medium Devices, Desktops */
@media only screen and (min-width: 992px) {
  .mobile-version {
    display: none;
  }
  .desktop-version {
    display: block;
  }
}

/* Large Devices, Wide Screens */
@media only screen and (min-width: 1200px) {
  .mobile-version {
    display: none;
  }
  .desktop-version {
    display: block;
  }
}
</style>