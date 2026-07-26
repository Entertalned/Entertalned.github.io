/* =========================================================
   CONFIG — this is the only part you should need to edit.
   Fill in your own info, then commit + push to GitHub Pages.
   ========================================================= */
const CONFIG = {
  // Your display name — shown in the nav bar and the big hero heading.
  name: "Entertained",

  // Your GitHub username — used to pull repos + contributors live from the API,
  // and to build the language-stats card shown on hover over the GitHub link.
  githubUsername: "entertalned",

  // Two small achievement badges shown top-left, next to your name in the nav.
  // Drop your own badge images in an /assets folder and point "img" at them
  // (e.g. GitHub profile achievement icons — save them locally, since GitHub
  // doesn't expose them through a public API). Leave "img" empty for a blank slot.
  achievements: [
    { img: "https://raw.githubusercontent.com/Entertalned/Entertalned.github.io/refs/heads/main/assets/autodesk-revit-architecture-certified-user(1).png", alt: "Achievement badge 1" },
    { img: "https://raw.githubusercontent.com/Entertalned/Entertalned.github.io/refs/heads/main/assets/autodesk-autocad-certified-user(1).png", alt: "Achievement badge 2" }
  ],

   // Optional: hand-pick which repos show in the carousel, in this order.
  // Leave as an empty array to auto-pull your most recently updated public repos instead.
  pinnedRepos: ["Survev.io-CSS-Script", "GUI-Project", "RobloxNotetaking", "Entertalned.github.io"], // e.g. ["my-cool-project", "another-repo"]

  // How many repos to show if pinnedRepos is empty.
  repoCount: 8,

  tagline: "Python Coder · Beatboxer",

  about: [
    "Hey, I'm <strong>Enter</strong> — You probably know me off of roblox or discord.",
    "I like to code, play video games, and do a lot of other stuff in my free time. Currently looking for a job because I just graduated HS!",
    "I'm also a dude, and I would like to become a suicide hotline operator."
  ],

  specs: [
    { key: "CPU",     value: "Intel(R) Core(TM) i3-10105F CPU" },
    { key: "GPU",     value: "NVIDIA Geforce GTX 1650" },
    { key: "RAM",     value: "16 GB DDR4" },
    { key: "Storage", value: "500 GB CARDBOARD BOX" },
    { key: "OS",      value: "Windows 11" },
    { key: "Monitor", value: " 75Hz Piece of Shit"  },
    { key: "Microphone",  value: "Hyper X Mic(With Steel Series Sonar AI tech)" },
    { key: "Accessories",  value: "I don't even fucking know." }
  ],

  // icon options below: "steam", "discord", "anime", "github", "spotify", "twitter", "twitch", "link"
  socials: [
    { label: "Discord", handle: "entertalned",        url: "https://discord.com/users/1238225742802849823",         icon: "discord" },
    { label: "GitHub",  handle: "" + "Entertalned", url: "https://github.com/Entertalned", icon: "github" },
    { label: "Spotify",  handle: "" + "Slim Shawty", url: "https://open.spotify.com/user/r9osb2ioqnlw8kpui185y33wx?si=f1783f748bfb4e17", icon: "Spotify" }
  ],

  // Your MyAnimeList username — used only by the mal-sync GitHub Action.
  malUsername: "Entertained",

  // Path to the JSON file the mal-sync GitHub Action writes to.
  malDataUrl: "data/mal-list.json",

    // Profile links shown as "See profile" under the Steam/Anime carousels
  // (Steam and MyAnimeList used to also be Connect cards — removed since
  // they now have their own full sections, this is their new home).
  steamProfileUrl: "https://steamcommunity.com/id/SuperLovesUnturned/",
  malProfileUrl: "https://myanimelist.net/animelist/Entertained?status=2",


  // Your Discord user ID (right-click your name in Discord → Copy User ID,
  // requires Developer Mode on). Powers the presence popover via Lanyard —
  // Lanyard only has data for you if you're a member of its Discord server
  // (discord.gg/lanyard) or another server the Lanyard bot is in.
  discordUserId: "1238225742802849823",

  // Path to the JSON file the steam-sync GitHub Action writes to.
  // Don't point this at Steam's API directly — see README.md for why.
  steamDataUrl: "data/steam-games.json"
};

/* =========================================================
   ICONS — generic monoline glyphs, not official brand marks.
   Swap in official SVGs from each platform's press/brand kit
   if you want pixel-exact logos.
   ========================================================= */
const ICONS = {
  steam: `<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-9.95 9.06l5.4 2.23a2.8 2.8 0 0 1 1.6-.49l2.4-3.48v-.05a3.6 3.6 0 1 1 3.6 3.6h-.08l-3.42 2.44a2.8 2.8 0 0 1-5.4 1.05l-3.86-1.6A10 10 0 1 0 12 2Zm-2.75 15.6a1.8 1.8 0 0 1-3.34-.87l1.5.62a1.32 1.32 0 1 0 1-2.44l-1.55-.64a1.8 1.8 0 0 1 2.55.98 1.8 1.8 0 0 1-.16 2.35Zm6.2-6.35a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8Z"/></svg>`,
  discord: `<svg viewBox="0 0 24 24"><path d="M19.27 5.33A17.9 17.9 0 0 0 14.9 4c-.2.36-.42.84-.58 1.22a16.6 16.6 0 0 0-4.64 0A9.5 9.5 0 0 0 9.1 4a17.9 17.9 0 0 0-4.38 1.34C1.9 9.4 1.1 13.35 1.4 17.24a18 18 0 0 0 5.5 2.8c.44-.6.84-1.25 1.18-1.93-.65-.25-1.27-.55-1.85-.92.15-.11.3-.23.45-.35a12.9 12.9 0 0 0 11 0c.15.12.3.24.45.35-.58.37-1.2.67-1.85.92.34.68.74 1.33 1.18 1.93a18 18 0 0 0 5.5-2.8c.35-4.5-.8-8.42-3.3-11.9ZM8.6 14.9c-.9 0-1.63-.83-1.63-1.85 0-1.02.72-1.85 1.63-1.85.92 0 1.65.84 1.63 1.85 0 1.02-.71 1.85-1.63 1.85Zm6.8 0c-.9 0-1.63-.83-1.63-1.85 0-1.02.72-1.85 1.63-1.85.92 0 1.65.84 1.63 1.85 0 1.02-.71 1.85-1.63 1.85Z"/></svg>`,
  anime: `<svg viewBox="0 0 24 24"><path d="M12 2.5 14.7 9l7 .6-5.3 4.6 1.6 6.8L12 17.3 5.9 21l1.6-6.8L2.2 9.6l7-.6L12 2.5Z"/></svg>`,
  github: `<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.03-2.68-.1-.26-.45-1.28.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.65.64.69 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>`,
  twitter: `<svg viewBox="0 0 24 24"><path d="M3 3l7.5 9.6L3.3 21h2.3l6.1-6.9 4.9 6.9H21l-7.8-10.1L20 3h-2.3l-5.7 6.4L7.4 3H3Z"/></svg>`,
  twitch: `<svg viewBox="0 0 24 24"><path d="M4 2 2.5 5.7v13.6H7V22l3.2-2.7H13l6-5V2H4Zm14 11.4-3.4 3.4h-3.4l-2.8 2.4v-2.4H4.9V4h13.1v9.4ZM14.6 6.9h1.7v5.2h-1.7V6.9Zm-4.5 0h1.7v5.2h-1.7V6.9Z"/></svg>`,
  link: `<svg viewBox="0 0 24 24"><path d="M10.6 13.4a1 1 0 0 1 0-1.4l3-3a1 1 0 1 1 1.4 1.4l-3 3a1 1 0 0 1-1.4 0Zm-3.2 3.2a3 3 0 0 1 0-4.2l2-2a1 1 0 1 1 1.4 1.4l-2 2a1 1 0 0 0 0 1.4 1 1 0 0 0 1.4 0l2-2a1 1 0 1 1 1.4 1.4l-2 2a3 3 0 0 1-4.2 0Zm9.2-9.2a3 3 0 0 1 0 4.2l-2 2a1 1 0 1 1-1.4-1.4l2-2a1 1 0 0 0 0-1.4 1 1 0 0 0-1.4 0l-2 2a1 1 0 1 1-1.4-1.4l2-2a3 3 0 0 1 4.2 0Z"/></svg>`,
  spotify: `<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.4 14.5a.7.7 0 0 1-.96.24c-2.6-1.6-5.9-1.96-9.8-1.07a.7.7 0 1 1-.3-1.36c4.26-.97 7.9-.56 10.83 1.24.34.2.44.63.23.95Zm1.24-2.75a.86.86 0 0 1-1.19.28c-2.98-1.83-7.52-2.36-11.04-1.29a.86.86 0 1 1-.5-1.64c4.02-1.22 9.02-.63 12.45 1.47.4.25.53.78.28 1.18Zm.1-2.86C14.6 8.7 9.2 8.5 6.02 9.48a1.03 1.03 0 1 1-.6-1.97c3.66-1.11 9.7-.9 13.53 1.39a1.03 1.03 0 1 1-1.06 1.77c-.05-.03-.07-.05-.05-.03Z"/></svg>`
};

/* =========================================================
   RENDER: name + badges
   ========================================================= */
function renderIdentity() {
  const upperName = CONFIG.name.toUpperCase();
  document.getElementById("nav-brand-name").textContent = upperName;
  const heroName = document.getElementById("hero-name");
  heroName.textContent = upperName;
  heroName.setAttribute("data-text", upperName);
  document.title = `~/${CONFIG.name.toLowerCase()}`;
}

function renderBadges() {
  const el = document.getElementById("nav-badges");
  el.innerHTML = CONFIG.achievements
    .slice(0, 2)
    .map(b => b.img
      ? `<span class="badge-slot"><img src="${b.img}" alt="${b.alt}" loading="lazy"></span>`
      : `<span class="badge-slot empty" title="${b.alt}">+</span>`
    )
    .join("");
}

/* =========================================================
   RENDER: about
   ========================================================= */
function renderAbout() {
  const el = document.getElementById("about-text");
  el.innerHTML = CONFIG.about.map(p => `<p>${p}</p>`).join("");
}

/* =========================================================
   RENDER: specs
   ========================================================= */
function renderSpecs() {
  const el = document.getElementById("specs-list");
  el.innerHTML = CONFIG.specs
    .map(s => `
      <div class="spec-row">
        <span class="spec-key">${s.key}</span>
        <span class="spec-value">${s.value}</span>
      </div>`)
    .join("") + `<div class="spec-row" style="border:none;"><span class="spec-key">status</span><span class="spec-value">ready<span class="terminal-cursor"></span></span></div>`;
}

/* =========================================================
   RENDER: connect
   ========================================================= */
function renderSocials() {
  const el = document.getElementById("connect-grid");
  el.innerHTML = CONFIG.socials
    .map(s => `
      <div class="connect-item" data-social="${s.icon}">
        <a class="connect-card" href="${s.url}" target="_blank" rel="noopener noreferrer">
          ${ICONS[s.icon] || ICONS.link}
          <span class="connect-label">${s.label}</span>
          <span class="connect-handle">${s.handle}</span>
        </a>
        ${s.icon === "discord" ? discordPopoverMarkup() : ""}
        ${s.icon === "github" ? githubPopoverMarkup() : ""}
      </div>`)
    .join("");

  initDiscordPopover();
}

function discordPopoverMarkup() {
  return `
    <div class="connect-popover discord-popover">
      <p class="popover-status" data-role="discord-status">hover to load presence…</p>
      <div class="discord-presence" data-role="discord-presence" hidden>
        <img class="discord-avatar" data-role="discord-avatar" alt="">
        <span class="discord-status-dot" data-role="discord-status-dot"></span>
        <div class="discord-info">
          <p class="discord-name" data-role="discord-name"></p>
          <p class="discord-activity" data-role="discord-activity"></p>
        </div>
      </div>
    </div>`;
}

function githubPopoverMarkup() {
  return `
    <div class="connect-popover github-popover">
      <img
        class="github-stats-img"
        src="${githubStatsImageUrl()}"
        alt="GitHub top languages for ${CONFIG.githubUsername}"
        loading="lazy"
        onerror="this.hidden=true; this.nextElementSibling.hidden=false;"
      >
      <p class="popover-status" hidden>stats service unavailable right now</p>
    </div>`;
}

// Colors/bg overridden here (rather than the shadow_green preset) so the
// card blends into the popover panel instead of clashing with the site's
// red/black theme. Full customization options: github-readme-stats.shion.dev
function githubStatsImageUrl() {
  const params = new URLSearchParams({
    username: CONFIG.githubUsername,
    layout: "compact",
    hide_border: "true",
    include_all_commits: "true",
    count_private: "true",
    bg_color: "00000000",   // transparent, so the popover's own panel shows through
    title_color: "e0273f",  // matches --red
    text_color: "e9e6e2"    // matches --text
  });
  return `https://github-readme-stats.shion.dev/api/top-langs/?${params.toString()}`;
}

/* =========================================================
   COVERFLOW WHEEL — used by the Steam and Anime sections.
   Center card sharp and on top; neighbors smaller and faded;
   everything else invisible. Autoplays continuously, but pauses
   immediately on any manual interaction (touch swipe, mouse drag,
   trackpad/wheel scroll, or arrow keys) and quietly resumes a few
   seconds after the interaction stops. No buttons — scroll/swipe/
   drag only, unlike the Projects carousel below.
   ========================================================= */
function createCoverWheel({ container, track, cardSelector, autoplayMs }) {
  let index = 0;
  let cardCount = 0;
  let autoplayTimer = null;
  let resumeTimer = null;

  function position() {
    const slides = track.querySelectorAll(cardSelector);
    const n = slides.length;
    if (!n) return;
    const cardWidth = slides[0].getBoundingClientRect().width;

    slides.forEach((slide, i) => {
      let offset = i - index;
      if (offset > n / 2) offset -= n;
      if (offset < -n / 2) offset += n;

      slide.classList.remove("is-center", "is-side", "is-hidden");
      if (offset === 0) {
        slide.classList.add("is-center");
        slide.style.transform = "translate(-50%, -50%) translateX(0) scale(1)";
        slide.style.opacity = "1";
        slide.style.zIndex = "3";
      } else if (offset === 1 || offset === -1) {
        slide.classList.add("is-side");
        slide.style.transform = `translate(-50%, -50%) translateX(${offset * cardWidth * 1.05}px) scale(0.75)`;
        slide.style.opacity = "0.35";
        slide.style.zIndex = "2";
      } else {
        slide.classList.add("is-hidden");
        slide.style.transform = `translate(-50%, -50%) translateX(${(offset > 0 ? 1 : -1) * cardWidth * 2}px) scale(0.55)`;
        slide.style.opacity = "0";
        slide.style.zIndex = "1";
      }
    });
  }

  function goTo(i) {
    if (cardCount === 0) return;
    index = ((i % cardCount) + cardCount) % cardCount;
    position();
  }
  function next() { goTo(index + 1); }
  function prev() { goTo(index - 1); }

  function startAutoplay() {
    stopAutoplay();
    if (!autoplayMs || cardCount < 2) return;
    autoplayTimer = setInterval(next, autoplayMs);
  }
  function stopAutoplay() {
    clearInterval(autoplayTimer);
    autoplayTimer = null;
  }
  function pauseThenResume() {
    stopAutoplay();
    clearTimeout(resumeTimer);
    resumeTimer = setTimeout(startAutoplay, 4000);
  }

  // touch swipe
  let touchStartX = null;
  container.addEventListener("touchstart", e => { touchStartX = e.touches[0].clientX; stopAutoplay(); }, { passive: true });
  container.addEventListener("touchend", e => {
    if (touchStartX === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX;
    if (delta > 40) prev();
    if (delta < -40) next();
    touchStartX = null;
    pauseThenResume();
  });

  // mouse drag (desktop)
  let dragStartX = null;
  let dragging = false;
  container.addEventListener("mousedown", e => { dragStartX = e.clientX; dragging = true; stopAutoplay(); });
  window.addEventListener("mouseup", e => {
    if (!dragging) return;
    dragging = false;
    const delta = e.clientX - dragStartX;
    if (delta > 40) prev();
    if (delta < -40) next();
    pauseThenResume();
  });

  // trackpad horizontal scroll only — a plain vertical mouse-wheel scroll
  // (deltaY dominant) is deliberately ignored and left alone so visitors
  // can still scroll past this section normally with a mouse wheel.
  container.addEventListener("wheel", e => {
    if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return; // vertical scroll — let the page scroll
    if (Math.abs(e.deltaX) < 15) return;
    e.preventDefault();
    if (e.deltaX > 0) next(); else prev();
    pauseThenResume();
  }, { passive: false });

  container.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft") { prev(); pauseThenResume(); }
    if (e.key === "ArrowRight") { next(); pauseThenResume(); }
  });

  container.addEventListener("mouseenter", stopAutoplay);
  container.addEventListener("mouseleave", startAutoplay);
  window.addEventListener("resize", position);

  return {
    setCards(html, count) {
      track.innerHTML = html;
      cardCount = count;
      index = 0;
      position();
      startAutoplay();
    }
  };
}

/* =========================================================
   STEAM SECTION — reads data/steam-games.json, which the
   steam-sync GitHub Action keeps up to date (see README.md —
   this can't be fetched from Steam's API directly in the browser).
   ========================================================= */
async function initSteamSection() {
  const statusEl = document.getElementById("steam-carousel-status");
  const wheel = createCoverWheel({
    container: document.getElementById("steam-carousel"),
    track: document.getElementById("steam-carousel-track"),
    cardSelector: ".wheel-card",
    autoplayMs: 2200
  });

  try {
    const res = await fetch(CONFIG.steamDataUrl);
    if (!res.ok) throw new Error("not found");
    const games = await res.json();
    if (!games.length) throw new Error("empty");

    statusEl.hidden = true;
    wheel.setCards(games.map(g => `
      <div class="wheel-card">
        <img src="${g.header}" alt="${escapeHtml(g.name)}" loading="lazy">
        <p class="wheel-card-name">${escapeHtml(g.name)}</p>
        <p class="wheel-card-stat">${g.hours} hrs</p>
      </div>
    `).join(""), games.length);
  } catch {
    statusEl.hidden = false;
    statusEl.textContent = "library not synced yet — see README (steam-sync workflow)";
  }
}

/* =========================================================
   ANIME SECTION — reads data/mal-list.json, which the
   mal-sync GitHub Action keeps up to date. See README.md.
   ========================================================= */
async function initMalSection() {
  const statusEl = document.getElementById("mal-carousel-status");
  const wheel = createCoverWheel({
    container: document.getElementById("mal-carousel"),
    track: document.getElementById("mal-carousel-track"),
    cardSelector: ".wheel-card",
    autoplayMs: 2200
  });

  try {
    const res = await fetch(CONFIG.malDataUrl);
    if (!res.ok) throw new Error("not found");
    const entries = await res.json();
    if (!entries.length) throw new Error("empty");

    statusEl.hidden = true;
    wheel.setCards(entries.map(e => `
      <div class="wheel-card wheel-card--portrait">
        <img src="${e.image}" alt="${escapeHtml(e.title)}" loading="lazy">
        <p class="wheel-card-name">${escapeHtml(e.title)}</p>
        <p class="wheel-card-stat">${e.score ? "★ " + e.score + "/10" : "no score"}</p>
      </div>
    `).join(""), entries.length);
  } catch {
    statusEl.hidden = false;
    statusEl.textContent = "list not synced yet — see README (mal-sync workflow)";
  }
}

/* =========================================================
   DISCORD POPOVER — live presence via Lanyard (public, CORS-friendly)
   ========================================================= */
const ACTIVITY_VERBS = { 0: "Playing", 1: "Streaming", 2: "Listening to", 3: "Watching", 5: "Competing in" };

function initDiscordPopover() {
  const item = document.querySelector('.connect-item[data-social="discord"]');
  if (!item) return;

  const statusEl = item.querySelector('[data-role="discord-status"]');
  const presenceEl = item.querySelector('[data-role="discord-presence"]');
  const avatarEl = item.querySelector('[data-role="discord-avatar"]');
  const nameEl = item.querySelector('[data-role="discord-name"]');
  const activityEl = item.querySelector('[data-role="discord-activity"]');
  const dotEl = item.querySelector('[data-role="discord-status-dot"]');

  async function loadPresence() {
    statusEl.hidden = false;
    statusEl.textContent = "loading presence…";
    presenceEl.hidden = true;

    try {
      const res = await fetch(`https://api.lanyard.rest/v1/users/${CONFIG.discordUserId}`);
      const json = await res.json();
      if (!json.success) throw new Error("no data");

      const d = json.data;
      const user = d.discord_user;

      avatarEl.src = user.avatar
        ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=80`
        : `https://cdn.discordapp.com/embed/avatars/0.png`;
      avatarEl.alt = user.username;
      nameEl.textContent = user.global_name || user.username;

      const gameActivity = (d.activities || []).find(a => a.type !== 4);
      const customStatus = (d.activities || []).find(a => a.type === 4);

      if (gameActivity) {
        activityEl.textContent = `${ACTIVITY_VERBS[gameActivity.type] || "Playing"} ${gameActivity.name}`;
      } else if (customStatus && customStatus.state) {
        activityEl.textContent = customStatus.state;
      } else {
        activityEl.textContent = "not doing much right now";
      }

      dotEl.className = "discord-status-dot status-" + d.discord_status;
      statusEl.hidden = true;
      presenceEl.hidden = false;
    } catch {
      statusEl.hidden = false;
      statusEl.textContent = "presence unavailable — is Lanyard tracking this account?";
      presenceEl.hidden = true;
    }
  }

  item.addEventListener("mouseenter", loadPresence);
  item.addEventListener("focusin", loadPresence);
}

/* =========================================================
   PROJECTS CAROUSEL — pulls live from the GitHub API
   ========================================================= */
const carouselState = { index: 0, perView: 1, cardCount: 0 };

async function fetchRepos() {
  const statusEl = document.getElementById("carousel-status");
  const user = CONFIG.githubUsername;

  try {
    let repos;
    if (CONFIG.pinnedRepos.length) {
      repos = await Promise.all(
        CONFIG.pinnedRepos.map(name =>
          fetch(`https://api.github.com/repos/${user}/${name}`).then(r => {
            if (!r.ok) throw new Error(`repo "${name}" not found`);
            return r.json();
          })
        )
      );
    } else {
      const res = await fetch(`https://api.github.com/users/${user}/repos?sort=updated&per_page=${CONFIG.repoCount}`);
      if (!res.ok) throw new Error("could not reach GitHub API");
      repos = await res.json();
      repos = repos.filter(r => !r.fork).slice(0, CONFIG.repoCount);
    }

    if (!repos.length) {
      statusEl.textContent = "no public repos found — check CONFIG.githubUsername in script.js";
      return;
    }

    statusEl.textContent = `${repos.length} repositories · pulled live from github.com/${user}`;

    // fetch contributors for each repo in parallel (best-effort — fine if it fails).
    // per_page=100 is GitHub's max — covers the contributor list for the
    // overwhelming majority of personal-scale repos in one request.
    const withContributors = await Promise.all(
      repos.map(async repo => {
        try {
          const cRes = await fetch(`https://api.github.com/repos/${user}/${repo.name}/contributors?per_page=100`);
          repo.contributorsList = cRes.ok ? await cRes.json() : [];
        } catch {
          repo.contributorsList = [];
        }
        return repo;
      })
    );

    renderCarousel(withContributors);
  } catch (err) {
    statusEl.textContent = `couldn't load projects (${err.message}). Set CONFIG.githubUsername in script.js to your GitHub username.`;
  }
}

function renderCarousel(repos) {
  const track = document.getElementById("carousel-track");

  track.innerHTML = repos.map(repo => `
    <a class="project-card" href="${repo.html_url}" target="_blank" rel="noopener noreferrer">
      <div class="project-card-head">
        <span class="project-name">${repo.name}</span>
        <span class="project-star">★ ${repo.stargazers_count ?? 0}</span>
      </div>
      <p class="project-desc">${repo.description ? escapeHtml(repo.description) : "no description yet"}</p>
      <div class="project-meta">
        <span class="project-lang">
          <span class="lang-dot"></span>${repo.language || "—"}
        </span>
        <span class="project-contributors">
          ${(repo.contributorsList || []).map(c => `<img src="${c.avatar_url}" alt="${c.login}" title="${c.login}" loading="lazy">`).join("")}
        </span>
      </div>
    </a>
  `).join("");

  carouselState.cardCount = repos.length;
  updateCarouselMetrics();
  goToSlide(0);
}

function updateCarouselMetrics() {
  const carousel = document.getElementById("carousel");
  const track = document.getElementById("carousel-track");
  const firstCard = track.querySelector(".project-card");
  if (!firstCard) return;
  const cardWidth = firstCard.getBoundingClientRect().width + 19.2; // + gap
  carouselState.perView = Math.max(1, Math.round(carousel.clientWidth / cardWidth));
}

function goToSlide(i) {
  const maxIndex = Math.max(0, carouselState.cardCount - carouselState.perView);
  carouselState.index = Math.min(Math.max(i, 0), maxIndex);

  const track = document.getElementById("carousel-track");
  const firstCard = track.querySelector(".project-card");
  if (!firstCard) return;
  const cardWidth = firstCard.getBoundingClientRect().width + 19.2;
  track.style.transform = `translateX(-${carouselState.index * cardWidth}px)`;

  document.getElementById("carousel-prev").disabled = carouselState.index <= 0;
  document.getElementById("carousel-next").disabled = carouselState.index >= maxIndex;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

/* =========================================================
   CURSOR GLOW — soft red light that follows the pointer.
   Skipped entirely on touch devices (no hover/mouse to track).
   ========================================================= */
function initCursorGlow() {
  const glow = document.getElementById("cursor-glow");
  if (!glow) return;
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  let rafPending = false;
  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;

  function applyPosition() {
    document.documentElement.style.setProperty("--glow-x", `${x}px`);
    document.documentElement.style.setProperty("--glow-y", `${y}px`);
    rafPending = false;
  }

  window.addEventListener("mousemove", e => {
    x = e.clientX;
    y = e.clientY;
    glow.classList.add("is-active");
    if (!rafPending) {
      rafPending = true;
      requestAnimationFrame(applyPosition);
    }
  });

  document.addEventListener("mouseleave", () => glow.classList.remove("is-active"));
  document.addEventListener("mouseenter", () => glow.classList.add("is-active"));
}

/* =========================================================
   INIT
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  renderIdentity();
  renderBadges();
  renderAbout();
  renderSpecs();
  renderSocials();
  fetchRepos();
  initSteamSection();
  initMalSection();
  document.getElementById("steam-profile-link").href = CONFIG.steamProfileUrl;
  document.getElementById("mal-profile-link").href = CONFIG.malProfileUrl;
  initCursorGlow();

  document.getElementById("carousel-prev").addEventListener("click", () => goToSlide(carouselState.index - 1));
  document.getElementById("carousel-next").addEventListener("click", () => goToSlide(carouselState.index + 1));

  const carouselEl = document.getElementById("carousel");
  carouselEl.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft") goToSlide(carouselState.index - 1);
    if (e.key === "ArrowRight") goToSlide(carouselState.index + 1);
  });

  // basic touch swipe support
  let touchStartX = null;
  carouselEl.addEventListener("touchstart", e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  carouselEl.addEventListener("touchend", e => {
    if (touchStartX === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX;
    if (delta > 40) goToSlide(carouselState.index - 1);
    if (delta < -40) goToSlide(carouselState.index + 1);
    touchStartX = null;
  });

  window.addEventListener("resize", () => {
    updateCarouselMetrics();
    goToSlide(carouselState.index);
  });

  document.getElementById("footer-year").textContent = new Date().getFullYear();
});
