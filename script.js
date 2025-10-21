document.addEventListener('DOMContentLoaded', () => {
  const pages = Array.from(document.querySelectorAll('.page'));
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const pageIndicator = document.getElementById('pageIndicator');
  const AUTO_MS = 6000; // auto-slide interval
  let current = 0;
  let animating = false;
  let autoTimer = null;

  // initialize positions: set only current visible
  function init() {
    pages.forEach((p, i) => {
      p.className = 'page'; // clear helper classes
      if (i === current) {
        p.classList.add('visible');
        p.style.left = '0';
        p.style.opacity = '1';
      } else {
        p.style.left = '100%';
        p.style.opacity = '0';
      }
    });
    updateIndicator();
    startAuto();
  }

  function updateIndicator() {
    pageIndicator.textContent = `${current + 1} / ${pages.length}`;
  }

  function startAuto() {
    stopAuto();
    autoTimer = setInterval(() => change(1), AUTO_MS);
  }
  function stopAuto() { if (autoTimer) { clearInterval(autoTimer); autoTimer = null; } }

  // direction: +1 next, -1 prev
  function change(direction) {
    if (animating) return;
    animating = true;

    const oldIndex = current;
    const newIndex = (current + direction + pages.length) % pages.length;
    const oldPage = pages[oldIndex];
    const newPage = pages[newIndex];

    // Prepare newPage off-screen on the correct side
    newPage.className = 'page';
    newPage.style.transition = 'none';
    newPage.style.opacity = '0';
    if (direction ===
