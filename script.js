const body = document.querySelector("body");
const darkModeToggleBtn = document.querySelector("#dark-mode-tgl-btn");

if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark-mode");
}

darkModeToggleBtn.addEventListener("click", toggleDarkMode);

function toggleDarkMode() {
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
  } else {
    body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
  }
}
