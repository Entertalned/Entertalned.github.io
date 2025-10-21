const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const totalItems = items.length;
const itemsPerSlide = 3;
let index = 0;

function showNextSlide() {
  index++;
  if(index > totalItems - itemsPerSlide) index = 0;
  const offset = -(index * (100 / itemsPerSlide));
  track.style.transform = `translateX(${offset}%)`;
}

// Auto slide every 3 seconds
setInterval(showNextSlide, 3000);
