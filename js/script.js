// language toggle
const languages = [
  { code: "en", name: "EN", icon: "/images/icons/lang/en.svg", link: "/" },
  { code: "bg", name: "BG", icon: "/images/icons/lang/bg.svg", link: "/bg" },
  { code: "pl", name: "PL", icon: "/images/icons/lang/pl.svg", link: "/pl" },
];

function renderLanguageList() {
  const lang = document.documentElement.lang || "en";
  const languageList = document.getElementById("languageList");
  const activeLang = languages.find((l) => l.code === lang) || languages[0];


  document.getElementById("activeLangIcon").src = activeLang.icon;

  languageList.innerHTML = languages
    .map(
      (l) => `
      <a href="${l.link}" class="language-option ${l.code === lang ? "active" : ""}">
        <img src="${l.icon}" alt="${l.name} icon" />
      </a>
    `
    )
    .join("");
}

function toggleLanguageList() {
  const list = document.getElementById("languageList");
  const wrapper = document.querySelector(".language-selector");

  list.classList.toggle("show");
  wrapper.classList.toggle("open");
}

document.addEventListener("click", function (e) {
  const selector = document.querySelector(".language-selector");


  if (selector && !selector.contains(e.target)) {
    document.getElementById("languageList").classList.remove("show");
    selector.classList.remove("open");
  }
});

renderLanguageList();


// -------
