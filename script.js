const boxes = document.querySelectorAll('.info-box');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let current = 0;

// Position boxes
boxes.forEach((box, index) => {
  if(index === 0) box.classList.add('active');
  else box.style.transform = 'translateX(100%)';
});

function showBox(newIndex) {
  if(newIndex === current) return;

  const oldBox = boxes[current];
  const newBox = boxes[newIndex];

  // Determine direction
  const direction = newIndex > current || (current === boxes.length-1 && newIndex === 0) ? 1 : -1;

  // Move new box into position
  newBox.style.transform = `translateX(${direction*100}%)`;
  newBox.classList.add('active');

  // Animate boxes
  requestAnimationFrame(() => {
    oldBox.style.transform = `translateX(${-direction*100}%)`;
    newBox.style.transform = 'translateX(0)';
  });

  // After animation
  setTimeout(() => {
    oldBox.classList.remove('active');
    oldBox.style.transform = `translateX(${direction*100}%)`;
  }, 500);

  current = newIndex;
}

prevBtn.addEventListener('click', () => {
  const newIndex = (current - 1 + boxes.length) % boxes.length;
  showBox(newIndex);
});

nextBtn.addEventListener('click', () => {
  const newIndex = (current + 1) % boxes.length;
  showBox(newIndex);
});
