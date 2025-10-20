const boxes = document.querySelectorAll('.info-box');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let current = 0;

function showBox(newIndex) {
  if(newIndex === current) return;

  const oldBox = boxes[current];
  const newBox = boxes[newIndex];

  // Determine direction
  if(newIndex > current || (current === boxes.length -1 && newIndex === 0)) {
    oldBox.classList.remove('active','left','right');
    oldBox.classList.add('left'); // slide left
    newBox.classList.remove('left','right');
    newBox.classList.add('active'); // slide in from right
  } else {
    oldBox.classList.remove('active','left','right');
    oldBox.classList.add('right'); // slide right
    newBox.classList.remove('left','right');
    newBox.classList.add('active'); // slide in from left
  }

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

// Initialize
boxes[current].classList.add('active');
