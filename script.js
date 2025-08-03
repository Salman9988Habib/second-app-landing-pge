const toggleBtn = document.getElementById("darkModeToggle");
const body = document.body;
const textarea = document.querySelector("textarea");
const counter = document.querySelector(".count");

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});

textarea.addEventListener("input", () => {
    counter.textContent = textarea.value.length + " characters";
});