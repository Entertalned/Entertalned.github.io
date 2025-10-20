const tabs = document.querySelectorAll('.tab-btn');
const pages = document.querySelectorAll('.page');
let currentPage = 0;

function showPage(index) {
  if(index === currentPage) return;

  const oldPage = pages[currentPage];
  const newPage = pages[index];

  // Animate old page left
  oldPage.classList.remove('active');
  oldPage.classList.add('exit-left');

  // Prepare new page
  newPage.classList.remove('exit-left');
  setTimeout(() => newPage.classList.add('active'), 20); // slight delay to trigger transition

  // Update active button
  tabs[currentPage].classList.remove('active');
  tabs[index].classList.add('active');

  currentPage = index;
}

// Initial page
pages[currentPage].classList.add('active');

tabs.forEach((tab, idx) => {
  tab.addEventListener('click', () => showPage(idx));
});
