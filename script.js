const items = document.querySelectorAll('.carousel-item');
const buttonContainer = document.getElementById('project-buttons');
let current = 0;

// Update carousel display
function updateCarousel() {
  const item = items[current];

  // Update collaborator buttons
  const collaborators = JSON.parse(item.dataset.collaborators);
  buttonContainer.innerHTML = collaborators
    .map(
      c => `
      <a href="${c.url}" target="_blank">
        <img src="${c.img}" alt="${c.alt}">
      </a>`
    )
    .join('');

  // Update project image link to correct GitHub repo
  const projectLink = item.querySelector('.project-link');
  if (projectLink) {
    projectLink.href = item.dataset.link; // links image to correct GitHub repo
  }
}

// Show next carousel item
function showNext() {
  items[current].classList.remove('active');
  current = (current + 1) % items.length;
  items[current].classList.add('active');
  updateCarousel();
}

// Initialize carousel
function initCarousel() {
  updateCarousel();
  setInterval(showNext, 5000); // auto-slide every 5 seconds
}

// Start after DOM is loaded
document.addEventListener('DOMContentLoaded', initCarousel);

