const slides = document.querySelectorAll('.carousel-item');
let index = 0;

function showNextSlide() {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length; // loop continuously
  slides[index].classList.add('active');
}

// Auto fade every 3 seconds
setInterval(showNextSlide, 3000);
