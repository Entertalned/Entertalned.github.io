const items = document.querySelectorAll('.carousel-item');
const buttonContainer = document.getElementById('project-buttons');
let current = 0;

function updateCarousel() {
  const item = items[current];

  // Update collaborator buttons
  const collaborators = JSON.parse(item.dataset.collaborators);
  buttonContainer.innerHTML = collaborators
    .map(c => `<a href="${c.url}" target="_blank"><img src="${c.img}" alt="${c.alt}"></a>`)
    .join('');

  // Remove any existing <a> from all items first
  items.forEach(i => {
    const img = i.querySelector('.project-img');
    if (!img) return;
    const parent = img.parentElement;
    if (parent.tagName === 'A') parent.replaceWith(img);
  });

  // Wrap the active item's image in correct <a>
  const activeImg = item.querySelector('.project-img');
  const link = document.createElement('a');
  link.href = item.dataset.link;
  link.target = '_blank';
  activeImg.replaceWith(link);
  link.appendChild(activeImg);
}

function showNext() {
  items[current].classList.remove('active');
  current = (current + 1) % items.length;
  items[current].classList.add('active');
  updateCarousel();
}

function initCarousel() {
  updateCarousel();
  setInterval(showNext, 5000);
}

document.addEventListener('DOMContentLoaded', initCarousel);

