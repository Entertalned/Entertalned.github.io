  <script>
    const projectBoxes = document.querySelectorAll('.project-box');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    let current = 0;

    function showProject(index) {
      projectBoxes.forEach((box, i) => {
        box.classList.toggle('active', i === index);
      });
    }

    nextBtn.addEventListener('click', () => {
      current = (current + 1) % projectBoxes.length;
      showProject(current);
    });

    prevBtn.addEventListener('click', () => {
      current = (current - 1 + projectBoxes.length) % projectBoxes.length;
      showProject(current);
    });
  </script>
</body>
</html>
