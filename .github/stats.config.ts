// Copied over stats.config.ts in kboshold/simple-github-readme-stats by .github/workflows/stats-cards.yml.
// Work repos to count come from the STATS_INCLUDE_REPOS secret so they stay out of this public repo.
import { defineConfig } from "./src/config/index.ts";

export default defineConfig({
  username: "SwarajStha",
  gist: {
    id: "eae391a28f62ace87c6b93f9dfa37643",
  },
  cards: {
    stats: {
      height: 190,
      hide: ["contributedTo"],
    },
    topLangs: {
      width: 437,
      height: 190,
      hide: ["html", "css", "scss", "jupyter notebook", "plpgsql"],
    },
  },
});
