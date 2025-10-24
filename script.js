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

// Initialize carousel and buttons
function initCarousel() {
  items.forEach(item => {
    // Ensure each image opens its correct link
    const img = item.querySelector('.project-img');
    const link = item.dataset.link;
    img.addEventListener('click', () => {
      window.open(link, '_blank');
    });
  });

  updateButtons();
  setInterval(showNext, 5000); // auto-slide every 5 seconds
}

// Start everything after DOM is loaded
document.addEventListener('DOMContentLoaded', initCarousel);
