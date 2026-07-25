name: Sync MyAnimeList completed list

# Uses the free, key-free Jikan API (a MyAnimeList mirror). No secrets
# needed — a MAL username isn't sensitive, it's already public in your
# profile URL. Jikan's connection to MAL is documented as intermittently
# flaky (occasional 504s that succeed again moments later), so this
# retries a few times with a delay before giving up — if a scheduled run
# does fail, the previous data/mal-list.json is simply left untouched
# rather than wiped, and the next scheduled run tries again.
on:
  schedule:
    - cron: "0 */6 * * *"   # every 6 hours
  workflow_dispatch:         # lets you trigger it manually from the Actions tab

permissions:
  contents: write

env:
  # Replace with your own MyAnimeList username if it's ever not "Entertained".
  MAL_USERNAME: "Entertained"

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Fetch completed anime list from Jikan (with retries)
        run: |
          mkdir -p data
          success=false

          for i in 1 2 3 4 5; do
            status=$(curl -s -o /tmp/mal-raw.json -w "%{http_code}" \
              "https://api.jikan.moe/v4/users/${MAL_USERNAME}/animelist/completed")

            if [ "$status" = "200" ] && grep -q '"data"' /tmp/mal-raw.json; then
              success=true
              break
            fi

            echo "Attempt $i failed (HTTP $status). Retrying in 15s..."
            sleep 15
          done

          if [ "$success" != "true" ]; then
            echo "Could not get a good response from Jikan after 5 attempts."
            echo "Leaving the existing data/mal-list.json untouched."
            exit 0
          fi

          node -e '
            const fs = require("fs");
            const json = JSON.parse(fs.readFileSync("/tmp/mal-raw.json", "utf8"));
            const raw = json.data || [];

            // Read defensively — Jikans exact response shape has shifted
            // between versions, so this handles either the flattened form
            // or the official-MAL-mirroring node/list_status form.
            const entries = raw
              .map(entry => {
                const anime = entry.anime || entry.node || {};
                const title = anime.title || anime.title_english || "Untitled";
                const image =
                  (anime.images && anime.images.jpg && (anime.images.jpg.large_image_url || anime.images.jpg.image_url)) ||
                  (anime.main_picture && (anime.main_picture.large || anime.main_picture.medium)) ||
                  "";
                const score = entry.score ?? (entry.list_status && entry.list_status.score) ?? 0;
                return { title, image, score };
              })
              .filter(e => e.image)
              .sort((a, b) => b.score - a.score);

            fs.writeFileSync("data/mal-list.json", JSON.stringify(entries, null, 2) + "\n");
            console.log(`wrote ${entries.length} entries to data/mal-list.json`);
          '

      - name: Commit updated data
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"
          git add data/mal-list.json
          git diff --staged --quiet || git commit -m "chore: sync MAL completed list"
          git push
