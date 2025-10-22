const items = document.querySelectorAll('.carousel-item');
let current = 0;

function showNext() {
  items[current].classList.remove('active');
  current = (current + 1) % items.length; // loop infinitely
  items[current].classList.add('active');
}

setInterval(showNext, 3000); // change every 3 seconds
