<template>
  <section class="body-part-total float-start w-100">
    <div class="matech-div-details-main my-5">
      <div class="mn-next-part">
        <div class="container">
          <!-- begin::loader section -->
          <div class="col-lg-12 col-xl-12" v-if="loading">
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
          <div class="d-lg-flex align-items-start">
            <div class="col-lg-4" v-if="!loading">
              <div class="">
                <div class="m-0 bg-mc-1">
                  <img
                    :src="
                      'https://api.sofascore.app/api/v1/team/' +
                      teamDetails.id +
                      '/image'
                    "
                    alt="image not found"
                    style="opacity: 1.3 !important; width: 80%"
                  />
                </div>
              </div>
            </div>
            <div class="col-lg-8" v-if="!loading">
              <h2 class="comon-heading m-0">
                {{ teamDetails.name }}
              </h2>
              <p class="mt-3 pe-lg-3" v-html="teamContents"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- begin team squad -->
    <div class="container" v-if="!loading">
      <div
        class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 mt-0 mt-lg-0 g-4 g-lg-5"
      >
        <!-- begin::home players -->
        <div class="col-lg-12">
          <h1 class="comon-heading m-0">{{ teamDetails.name }} Squad</h1>
        </div>
        <div
          class="col"
          v-for="player in teamSquad"
          :key="player.id"
          style="cursor: pointer"
        >
          <center>
            <a
              class="cmonon-plyaars"
              v-on:click="
                getPlayerDetails(player.player.id, player.player.slug)
              "
              style="cursor: pointer"
            >
              <figure>
                <img
                  style="max-width: 50% !important"
                  :src="
                    'https://api.sofascore.app/api/v1/player/' +
                    player.player.id +
                    '/image'
                  "
                  alt="gps1"
                  class="mobile-version"
                />
                <img
                  style="max-width: 80% !important"
                  :src="defaultPlayerPhoto"
                  alt="gps1"
                  class="desktop-version"
                />
              </figure>

              <div>
                <h5>
                  {{ player.player.name }}
                  <span v-if="player.player.position == 'BM'" class="d-block">
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

                <span class="num text-center" v-if="player.captain"> C</span>
              </div>
            </a>
          </center>
        </div>

        <!-- end::home players -->
      </div>
    </div>
    <!-- end::team -->
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
      teamDetails: null,
      teamContents: null,
      teamSquad: null,
      loading: true,
      defaultPlayerPhoto: "/img/default/player-default.png",
      changeLeagueText: null,
    };
  },

  created() {
    const url = window.location.href;
    const lastParam = url.split("/").slice(-1)[0];
    this.getTeamDetails(lastParam);
    this.getTeamContents(lastParam);
    this.getTeamContentsMeta(lastParam);
    this.getTeamSquad(lastParam);
  },

  methods: {
    // method to get team details
    getTeamDetails(teamId) {
      axios
        .get(
          `${this.BASE_SERVER_URI}/api/cricket/sofascore/teams/details/${teamId}`
        )
        .then((response) => {
          this.teamDetails = response.data.team;
          this.loading = false;
        });
    },
    // method to get team contents
    getTeamContents(teamId) {
      axios
        .get(
          `${this.BASE_SERVER_URI}/api/cricket/sofascore/teams/contents/${teamId}`
        )

        .then((response) => {
          this.changeLeagueText = response.data.content.about;
          this.changeLeagueText = this.changeLeagueText.replaceAll(
            "sofascore.com",
            "sportyclub.live"
          );
          this.teamContents = this.changeLeagueText.replaceAll(
            "Sofascore",
            "Sportyclub"
          );
        });
    },

    // method to player details
    getPlayerDetails(playerId, slug) {
      window.open("/cricket/" + slug + "/player/details/" + playerId, "_blank");
    },
    // method to check player photo
    checkPlayerPhoto(playerId) {
      axios
        .get("https://api.sofascore.app/api/v1/player/" + playerId + "/image")
        .then((response) => {
          this.defaultPlayerPhoto =
            "https://api.sofascore.app/api/v1/player/" + playerId + "/image";
        })
        .catch((error) => {
          this.defaultPlayerPhoto = "/img/default/player-default.png";
        });
    },

    // method to get meta contents of team
    getTeamContentsMeta(teamId) {
      axios
        .get(
          `${this.BASE_SERVER_URI}/api/cricket/sofascore/teams/contents/meta/${teamId}`
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
    // method to get team linups
    getTeamSquad(teamId) {
      axios
        .get(
          `${this.BASE_SERVER_URI}/api/cricket/sofascore/teams/squad/${teamId}`
        )
        .then((response) => {
          this.teamSquad = response.data.players;
          this.loading = false;
        });
    },
  },
};
</script>
