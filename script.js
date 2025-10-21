const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const itemWidth = items[0].getBoundingClientRect().width + 20; // item width + gap
let index = 0;

function moveCarousel() {
  index++;
  if (index > items.length - 3) index = 0; // loop for 3 items visible
  track.style.transform = `translateX(-${index * itemWidth}px)`;
}

setInterval(moveCarousel, 3000); // every 3 seconds
