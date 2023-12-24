<template>
  <div>
    <!-- begin::hot news -->
    <div
      style="margin-right: 15px"
      v-for="(news, index) in newsList"
      :key="news.id"
    >
      <span v-if="index < 1">
        <a
          v-on:click="getNewsDetails(news.id)"
          class="comon-news-links"
          style="
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1; /* start showing ellipsis when 3rd line is reached */
            white-space: pre-wrap;
            cursor: pointer;
          "
        >
          <marquee behavior="" direction="">
            <span style="line-height: 90px">
              {{ news.title }}
            </span></marquee
          >
        </a>
      </span>
    </div>
    <!-- end::hot news -->
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
      newsList: null,
      loading: true,
    };
  },

  created() {
    this.getNewsList();
  },
  methods: {
    // method to get news list
    getNewsList() {
      axios
        .get(`${this.BASE_SERVER_URI}/api/cricket/sofascore/news/list`)
        .then((response) => {
          this.newsList = response.data.cricketNewsList;
          this.loading = false;
        });
    },
    // method to get news details from API
    getNewsDetails(newsId) {
      window.open("/cricket/news/details/" + newsId, "_blank");
    },
  },
};
</script>
<style scoped>
div #floater {
  display: none !important;
}
.m-date {
  width: 75px !important;
}
.accordion-button::after {
  display: none;
}
</style>