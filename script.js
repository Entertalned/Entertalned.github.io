const pages = document.querySelectorAll('.page');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let current = 0;

function showPage(newIndex, direction) {
  if (newIndex === current) return;

  const oldPage = pages[current];
  const newPage = pages[newIndex];

  // Set animation classes
  if(direction === 'next') {
    oldPage.classList.remove('active');
    oldPage.classList.add('exit-left');
    newPage.classList.remove('exit-left', 'exit-right');
    newPage.style.left = '100%';
    setTimeout(() => newPage.classList.add('active'), 20);
  } else if(direction === 'prev') {
    oldPage.classList.remove('active');
    oldPage.classList.add('exit-right');
    newPage.classList.remove('exit-left', 'exit-right');
    newPage.style.left = '-100%';
    setTimeout(() => newPage.classList.add('active'), 20);
  }

  current = newIndex;
}

prevBtn.addEventListener('click', () => {
  const newIndex = (current - 1 + pages.length) % pages.length;
  showPage(newIndex, 'prev');
});

nextBtn.addEventListener('click', () => {
  const newIndex = (current + 1) % pages.length;
  showPage(newIndex, 'next');
});

// Initialize first page
pages[current].classList.add('active');
