const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
let index = 0;

function moveCarousel() {
  index++;
  if(index >= slides.length) index = 0;
  track.style.transform = `translateX(-${index * 100}%)`;
}

// Auto slide every 3 seconds
setInterval(moveCarousel, 5000);
