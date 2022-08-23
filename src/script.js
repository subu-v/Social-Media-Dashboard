let darkModeToggle = document.querySelector(".smd__mode--dark");

darkModeToggle.addEventListener("click", () => {
  darkModeToggle.classList.toggle("toggle-active");
  document.body.classList.toggle("dark-mode");
});
