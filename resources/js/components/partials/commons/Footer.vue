<template>
  <div class="row row-cols-1 row-cols-lg-3">
    <!-- begin::col 1 -->
    <div class="col">
      <div class="comon-footer">
        <h5>Sportyclub Live</h5>
        <p class="col-lg-10">
          SportyClub is a reliable online streaming service that broadcasts live
          cricket on TV worldwide from over all major leagues and tournaments.
          Our platform allows users to watch live sports from anywhere, anytime,
          and on many electronic devices.
        </p>
        <ul class="list-unstyled d-flex align-items-center mt-2">
          <li>
            <a href="https://www.facebook.com/sportyclub.lives">
              <i class="fab fa-facebook"></i>
            </a>
          </li>
          <li class="mx-2">
            <a href="https://www.linkedin.com/in/sportyclub-live-5852392a5/">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/sportyclub_live/"
              ><i class="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- end::col 1 -->
    <!-- begin::col 2 -->
    <div class="col">
      <div class="comon-footer">
        <h5>Resources</h5>
        <ul class="list-unstyled">
          <li>
            <a href="/cricket/teams/list"> Hot Teams </a>
          </li>
          <li>
            <a href="cricket/top/league/list"> Hot Leagues </a>
          </li>
          <li>
            <a href="/"> Cricket Matches </a>
          </li>
          <li>
            <a href="/cricket/news/list"> Cricket News </a>
          </li>
          <li>
            <a href="/about-us"> About Us </a>
          </li>
          <li>
            <a href="/contact-us"> Contact Us </a>
          </li>

          <li>
            <a href="/terms-of-service"> Terms & Conditions </a>
          </li>

          <li>
            <a href="/privacy-policy"> Privacy & Policy </a>
          </li>
          <li>
            <a href="/disclaimer"> Disclaimer </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- end::col 2 -->
    <!-- begin::col 3 -->
    <div class="col">
      <div class="comon-footer">
        <h5>Top Leagues</h5>
        <ul class="list-unstyled">
          <template
            v-for="(league, index) in topLeaguesList"
            :key="league.id"
           
          >
            <li v-if="index < 5"  v-on:click="getTopLeagueDetails(league.id, league.slug)" style="cursor: pointer;">
              <img
                :src="
                  'https://api.sofascore.app/api/v1/unique-tournament/' +
                  league.id +
                  '/image'
                "
                width="40"
              />

              <span style="color: #8d95a1"> &nbsp; {{ league.nameEn }}</span>
              <br />
            </li>
          </template>
        </ul>
      </div>
    </div>
    <!-- end::col 3 -->
  </div>
  <hr />
  <p class="text-center copy-t">
    Copyright 2023 Sportyclub Live, All Right Reserved
  </p>
</template>

<script>

export default {
  components: {},

  // Other component options and methods

  data() {
    return {
      topLeaguesList: null,
    };
  },
  created() {
    this.getTopLeaguesList();
  },
  methods: {
    // method to return top leagues list
    getTopLeaguesList() {
      axios
        .get(`${this.BASE_SERVER_URI}/api/cricket/sofascore/topLeagues/list`)
        .then((response) => {
          this.topLeaguesList = response.data.topLeagues;
        });
    },

    // method to get topLeague Details
    getTopLeagueDetails(leagueId, league) {
      window.open(
        "cricket/top/league/details/" + league + "/" + leagueId,
        "_blank"
      );
    },
  },
};
</script>
