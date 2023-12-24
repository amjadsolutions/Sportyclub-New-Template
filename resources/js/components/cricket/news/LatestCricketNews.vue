<template>
  <section class="body-part-total float-start w-100" v-if="!loading">
    <div class="golaskipers-div">
      <div class="container">
        <!-- begin::latest cricket -->
        <h1 class="comon-heading m-0">Latest News</h1>
        <div
          class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mt-0 mt-lg-0 g-4 g-lg-4"
        >
          <div class="col" v-for="news in newsList" :key="news.id">
            <a
             
              class="cmonon-plyaars"
              v-on:click="getnewsDetails(news.id)"
            >
              <figure>
                <img :src="BASE_SERVER_URI + '/' + news.image" alt="gl1" />
                <figcaption>
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
                </figcaption>
              </figure>
              <div class="d-flex align-items-center justify-content-between">
                <h5>
                  <p
                    style="
                      overflow: hidden;
                      display: -webkit-box;
                      -webkit-box-orient: vertical;
                      -webkit-line-clamp: 2; /* start showing ellipsis when 3rd line is reached */
                      white-space: pre-wrap;
                    "
                  >
                    {{ news.title }}
                  </p>
                  <span class="d-block">
                    {{
                      news.created_at.split("-", 3)[0] +
                      "-" +
                      news.created_at.split("-", 3)[1] +
                      "-" +
                      news.created_at.split("-", 3)[2].slice(0, 2)
                    }}</span
                  >
                </h5>
              </div>
            </a>
          </div>
        </div>
        <!-- end::latest cricket -->
      </div>
    </div>
  </section>
</template>
  <script>
import axios from "axios";
export default {
  components: {
    axios,
  },
  data() {
    return {
      newsList: null,
      loading: true,
      newsDetails: null,
    };
  },

  created() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      axios
        .get(`${this.BASE_SERVER_URI}/api/cricket/sofascore/news/list`)
        .then((response) => {
          this.newsList = response.data.cricketNewsList;
          this.loading = false;
        });
    },
    getnewsDetails(newsId) {
      window.open("/cricket/news/details/" + newsId, "_blank");
    },
  },
};
</script>