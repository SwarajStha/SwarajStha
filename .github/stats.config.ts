// Copied over stats.config.ts in kboshold/simple-github-readme-stats by .github/workflows/stats-cards.yml.
// Organisation logins come from the STATS_ORGS secret so they stay out of this public repo.
import { defineConfig } from "./src/config/index.ts";

export default defineConfig({
  username: "SwarajStha",
  gist: {
    id: "eae391a28f62ace87c6b93f9dfa37643",
  },
  cards: {
    topLangs: {
      hide: ["html", "css", "scss", "jupyter notebook"],
    },
  },
});
