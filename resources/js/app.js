require("./bootstrap");
import { createApp } from "vue";


// begin::commons
import Footer from "./components/partials/commons/Footer.vue";
// end::commons

// begin::live matches
import AllMatches from "./components/cricket/matches/all-matches/AllMatches.vue";
import LiveMatchesList from "./components/cricket/matches/live/LiveMatchesList.vue";
import TodayLiveMatchesList from "./components/cricket/matches/live/TodayLiveMatchesList.vue";
// end::live matches
// begin::matches info
import LiveMatcheInfo from "./components/cricket/matches/info/LiveMatcheInfo.vue";
import UpcomingMatchInfo from "./components/cricket/matches/info/UpcomingMatchInfo.vue";
import FinishedMatchInfo from "./components/cricket/matches/info/FinishedMatchInfo.vue";
// end::matches info

// begin::past and next matches
import PreviousMatches from "./components/cricket/matches/past-and-next/PreviousMatches.vue";
import UpcomingMatches from "./components/cricket/matches/past-and-next/UpcomingMatches.vue";
// end::past and next matches

// begin::leagues
import CricketNewsList from "./components/cricket/news/CricketNewsList.vue";
import CricketNewsDetails from "./components/cricket/news/CricketNewsDetails.vue";
import HotCricketNews from "./components/cricket/news/HotCricketNews.vue";

// begin::teams
import TeamsList from "./components/cricket/teams/TeamsList.vue";
import TeamDetails from "./components/cricket/teams/TeamDetails.vue";
// end::teams

// begin::players
import PlayerDetails from "./components/cricket/players/PlayerDetails.vue";
import MatchPlayerList from "./components/cricket/players/MatchPlayerList.vue";

// begin::league
import TopLeagueDetails from "./components/cricket/leagues/TopLeagueDetails.vue";
import TopLeagueList from "./components/cricket/leagues/TopLeaguesList.vue";

import serverCnfg from "./config/server";
// end::leagues
// end::cricket

const app = createApp({});

app.config.globalProperties.BASE_SERVER_URI = serverCnfg.BASE_SERVER_URI;

// begin::commons
app.component("footer-vue", Footer);
// end::commons

// cricket live matches
app.component("live-match-list", LiveMatchesList);
app.component("today-live-matches-list", TodayLiveMatchesList);
app.component("all-matches", AllMatches);

// cricket matches Info
app.component("live-match-info", LiveMatcheInfo);
app.component("upcoming-match-info", UpcomingMatchInfo);
app.component("finished-match-info", FinishedMatchInfo);

// cricket upcoming & previous matches
app.component("previous-matches", PreviousMatches);
app.component("upcoming-matches", UpcomingMatches);

// cricket news
app.component("cricket-news-list", CricketNewsList);
app.component("cricket-news-details", CricketNewsDetails);
app.component("cricket-hot-news", HotCricketNews);

// cricket teams
app.component("teams-list", TeamsList);
app.component("team-details", TeamDetails);

// cricket players
app.component("player-details", PlayerDetails);
app.component("match-player-list", MatchPlayerList);

// cricket top leagues
app.component("top-league-details", TopLeagueDetails);
app.component("top-league-list", TopLeagueList);

app.mount("#app");
