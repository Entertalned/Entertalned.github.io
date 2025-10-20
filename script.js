const tabs = document.querySelectorAll('.tab-btn');
const pages = document.querySelectorAll('.page');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active from all tabs
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // Show corresponding page
    const pageId = `page${tab.dataset.page}`;
    pages.forEach(p => {
      p.classList.toggle('active', p.id === pageId);
    });
  });
});

// Show first page by default
pages[0].classList.add('active');
