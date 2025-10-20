<!-- JS -->
<script>
  // Tab Switching
  const tabs = document.querySelectorAll(".tabBtn");
  const sections = document.querySelectorAll(".tabSection");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      sections.forEach(sec => sec.style.display = "none");
      document.getElementById("tab-" + tab.dataset.tab).style.display = "block";
    });
  });

  // Close button
  document.querySelector("#customBox .close-btn").addEventListener("click", () => {
    document.getElementById("customBox").style.display = "none";
  });

  // Transparency slider
  const slider = document.getElementById("buttonTransparencyInput");
  const val = document.getElementById("transparencyValue");
  slider.addEventListener("input", () => {
    val.textContent = slider.value + "%";
  });

  // Toggle with Shift+H
  document.addEventListener("keydown", (e) => {
    if (e.shiftKey && e.key.toLowerCase() === 'h') {
      const box = document.getElementById("customBox");
      box.style.display = box.style.display === "none" ? "block" : "none";
    }
  });
</script>
