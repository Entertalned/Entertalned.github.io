const slider = document.querySelector('.slider-wrapper');
const boxes = document.querySelectorAll('.info-box');
const totalPages = boxes.length;
let current = 0;

// Function to update slider position
function updateSlider() {
  const offset = -current * 520; // box width + margin
  slider.style.transform = `translateX(${offset}px)`;
}

// Attach arrow events to all buttons
boxes.forEach((box, index) => {
  const prevBtn = box.querySelector('#prev') || box.querySelector(`#prev${index+1}`);
  const nextBtn = box.querySelector('#next') || box.querySelector(`#next${index+1}`);

  prevBtn.addEventListener('click', () => {
    current = (current - 1 + totalPages) % totalPages;
    updateSlider();
  });

  nextBtn.addEventListener('click', () => {
    current = (current + 1) % totalPages;
    updateSlider();
  });
});

// Initialize slider
updateSlider();
const slider = document.querySelector('.slider-wrapper');
const boxes = document.querySelectorAll('.info-box');
const totalPages = boxes.length;
let current = 0;

// Function to update slider position
function updateSlider() {
  const offset = -current * 520; // box width + margin
  slider.style.transform = `translateX(${offset}px)`;
}

// Attach arrow events to all buttons
boxes.forEach((box, index) => {
  const prevBtn = box.querySelector('#prev') || box.querySelector(`#prev${index+1}`);
  const nextBtn = box.querySelector('#next') || box.querySelector(`#next${index+1}`);

  prevBtn.addEventListener('click', () => {
    current = (current - 1 + totalPages) % totalPages;
    updateSlider();
  });

  nextBtn.addEventListener('click', () => {
    current = (current + 1) % totalPages;
    updateSlider();
  });
});

// Initialize slider
updateSlider();

