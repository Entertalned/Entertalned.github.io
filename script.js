const items = document.querySelectorAll('.carousel-item');
let current = 0;

function showNext() {
  items[current].classList.remove('active');
  current = (current + 1) % items.length;
  items[current].classList.add('active');
}

setInterval(showNext, 5000);
