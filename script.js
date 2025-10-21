const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
let index = 0;
const itemsPerSlide = 3;
const totalItems = items.length;

// Initialize first slide
for(let i=0; i<itemsPerSlide; i++) items[i].classList.add('active');

function showNextSlide() {
  // Remove active from all
  items.forEach(item => item.classList.remove('active'));

  // Add active to next 3 items
  for(let i=0; i<itemsPerSlide; i++) {
    let idx = (index + i) % totalItems;
    items[idx].classList.add('active');
  }

  index = (index + 1) % totalItems;
}

setInterval(showNextSlide, 3000);
