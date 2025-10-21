let currentPage = 0;
const pages = document.querySelectorAll('.page');
const totalPages = pages.length;
const slideInterval = 6000; // Auto-slide every 6 seconds
let autoSlideTimer;

// Navigation buttons
document.getElementById('nextBtn').addEventListener('click', () => changePage(1));
document.getElementById('prevBtn').addEventListener('click', () => changePage(-1));

function changePage(direction) {
  const oldPage = pages[currentPage];
  oldPage.classList.remove('active');
  oldPage.classList.add(direction === 1 ? 'slide-out-left' : 'slide-out-right');

  currentPage = (currentPage + direction + totalPages) % totalPages;
  const newPage = pages[currentPage];

  newPage.classList.remove('slide-out-left', 'slide-out-right');
  newPage.style.left = direction === 1 ? '100%' : '-100%';

  setTimeout(() => {
    newPage.classList.add('active', direction === 1 ? 'slide-in-right' : 'slide-in-left');
  }, 50);

  resetAutoSlide();
}

function startAutoSlide() {
  autoSlideTimer = setInterval(() => {
    changePage(1);
  }, slideInterval);
}

function resetAutoSlide() {
  clearInterval(autoSlideTimer);
  startAutoSlide();
}

// Start on load
window.addEventListener('load', () => {
  startAutoSlide();
});
