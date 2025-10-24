// ===== Carousel Setup =====
const items = document.querySelectorAll('.carousel-item');
const buttonContainer = document.getElementById('project-buttons');
let current = 0;

// Update collaborator buttons dynamically
function updateButtons() {
  const collaborators = JSON.parse(items[current].dataset.collaborators);
  buttonContainer.innerHTML = collaborators
    .map(
      c => `
      <a href="${c.url}" target="_blank">
        <img src="${c.img}" alt="${c.alt}">
      </a>`
    )
    .join('');
}

// Show next carousel item
function showNext() {
  items[current].classList.remove('active');
  current = (current + 1) % items.length;
  items[current].classList.add('active');
  updateButtons();
}

// Initialize carousel
function initCarousel() {
  updateButtons();
  setInterval(showNext, 5000); // auto-slide every 5 seconds
}

// Start everything after DOM is loaded
document.addEventListener('DOMContentLoaded', initCarousel);
