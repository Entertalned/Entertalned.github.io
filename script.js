const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showNext() {
  carouselItems[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % carouselItems.length;
  carouselItems[currentIndex].classList.add('active');
}

setInterval(showNext, 3000);
