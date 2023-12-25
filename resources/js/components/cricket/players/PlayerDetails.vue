<template>
  <section class="body-part-total float-start w-100">
    <div class="playerrs-details-div-total py-5">
      <div class="top-details-palya">
        <!-- begin::loader section -->
        <div class="container">
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
                Loading...12
                <img
                  src="/img/spinner.gif"
                  alt="Image not Found"
                  style="width: 40px; margin-top: 0px !important"
                />
              </h2>
            </div>
          </div>
        </div>
        <!-- end::loader secton -->
        <div class="container" v-for="player in playerDetails" :key="player.id">
          <div class="row g-lg-5">
            <div class="col-lg-4">
              <figure>
                <img
                  style="max-width: 80% !important"
                  :src="defaultPlayerPhoto"
                  alt="gps1"
                />
              </figure>
            </div>
            <div class="col-lg-8">
              <div class="players-details-div">
                <h2 class="comon-heading m-0">
                  {{ playerContentsHeadings }}

                  <span class="d-block mt-2">
                    <span v-if="player.position == 'BM'"> Batsman </span>
                    <span v-else-if="player.position == 'AR'">
                      All Rounder
                    </span>
                    <span v-else-if="player.position == 'B'"> Bowler </span>
                    <span v-else-if="player.position == 'WK'">
                      Wicket Keeper
                    </span>
                  </span>
                </h2>

                <ul class="list-unstyled mt-2">
                  <li>
                    <span> Full Name :</span>
                    <span> {{ player.shortName }} </span>
                  </li>
                  <li>
                    <span> Date of Birth :</span>
                    <span>
                      {{ convertDateToTimeStamp(player.dateOfBirthTimestamp) }}
                    </span>
                  </li>
                  <li>
                    <span> Jersey No :</span>
                    <span> {{ player.jerseyNumber }} </span>
                  </li>
                  <li>
                    <span> Country :</span>
                    <span> {{ player.country.name }} </span>
                  </li>

                  <li>
                    <span> Height :</span>
                    <span> {{ player.height }} </span>
                  </li>
                </ul>
                <h2 class="comon-heading mt-3 mb-3">Biographay</h2>
                <p v-html="playerContents"></p>
              </div>
            </div>
          </div>
        </div>
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
      playerId: null,
      loading: true,
      playerDetails: null,
      playerContents: null,
      changeLeagueText: null,
      playerContentsHeadings: null,
      defaultPlayerPhoto: "/img/default/player-default.png",
    };
  },
  mounted() {
    const url = window.location.href;
    const lastParam = url.split("/").slice(-1)[0];
    this.playerId = lastParam;
    this.checkPlayerPhoto(lastParam);
    this.getPlayersList();
    this.getPlayerContents();
    this.getPlayerContentsMeta();
  },

  methods: {
    getPlayersList() {
      axios
        .get(
          `${this.BASE_SERVER_URI}/api/cricket/sofascore/player/details/${this.playerId}`
        )
        .then((response) => {
          this.playerDetails = response.data;
          this.loading = false;
        });
    },

    getPlayerContents() {
      axios
        .get(
          `${this.BASE_SERVER_URI}/api/cricket/sofascore/player/contents/${this.playerId}`
        )
        .then((response) => {
          this.changeLeagueText = response.data.content.about;
          this.playerContentsHeadings = response.data.content.heading;
          this.changeLeagueText = this.changeLeagueText.replaceAll(
            "sofascore.com",
            "sportyclub.live"
          );
          this.playerContents = this.changeLeagueText.replaceAll(
            "Sofascore",
            "Sportyclub"
          );
          setTimeout(() => {
            var paragraphs = document.getElementsByTagName("p");
            // Loop through each <p> element
            for (var i = 0; i < paragraphs.length; i++) {
              // Get all <a> elements inside the current <p> element
              var linksInsideParagraph =
                paragraphs[i].getElementsByTagName("a");
              // Loop through each <a> element inside the current <p> element
              for (var j = 0; j < linksInsideParagraph.length; j++) {
                // Access or manipulate each <a> element
                linksInsideParagraph[j].href = "#";
              }
            }
          }, 3000);
        });
    },

    // method to get meta contents
    getPlayerContentsMeta() {
      axios
        .get(
          `${this.BASE_SERVER_URI}/api/cricket/sofascore/player/contents/meta/${this.playerId}`
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
    convertDateToTimeStamp(timestamp) {
      const date = new Date(timestamp * 1000);
      return date.toLocaleDateString();
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
  },
};
</script>