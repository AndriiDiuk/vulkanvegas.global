// language toggle

function toggleLanguageList() {
  document.getElementById("languageList").classList.toggle("show");
}

document.addEventListener("click", function (e) {
  const selector = document.querySelector(".language-selector");
  if (selector && !selector.contains(e.target)) {
    document.getElementById("languageList").classList.remove("show");
  }
});

// -------
