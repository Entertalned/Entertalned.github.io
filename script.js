const pages = document.querySelectorAll('.page');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let current = 0;

function showPage(index) {
  pages.forEach((page, i) => {
    page.classList.remove('active', 'exit-left');
    if (i === index) {
      page.classList.add('active');
    } else if (i < index) {
      page.classList.add('exit-left');
    }
  });
}

prevBtn.addEventListener('click', () => {
  current = (current - 1 + pages.length) % pages.length;
  showPage(current);
});

nextBtn.addEventListener('click', () => {
  current = (current + 1) % pages.length;
  showPage(current);
});

