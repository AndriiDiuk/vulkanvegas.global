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
// Slider 
// -------
const localizedSlides = {
  en: [
    {
      backgroundImage: "url('/images/vulkanvegascasino/assets/slides/s-01/bg-1.webp')",
      text: `
        <h2 class="h3-title">Claim 1500 EUR + 150 Free Spins</h2>
        <a href="https://www.vulkanvegas.global/go/vulkanvegas/" class="slider-btn-bonus" target="_blank" rel="nofollow">Get Bonus</a>`,
      leftImage: "/images/vulkanvegascasino/assets/slides/s-01/left.webp",
      rightImage: "/images/vulkanvegascasino/assets/slides/s-01/right.webp"
    },
    {
      backgroundImage: "url('/images/vulkanvegascasino/assets/slides/s-02/bg-2.webp')",
      text: `
        <h2 class="h3-title">Get 50 FS Without Deposit</h2>
        <a href="https://www.vulkanvegas.global/go/vulkanvegas/" class="slider-btn-bonus" target="_blank" rel="nofollow">Get Bonus</a>`,
      leftImage: "/images/vulkanvegascasino/assets/slides/s-02/left.webp",
      rightImage: "/images/vulkanvegascasino/assets/slides/s-02/right.webp"
    }
  ],
  bg: [
    {
      backgroundImage: "url('/images/vulkanvegascasino/assets/slides/s-01/bg-1.webp')",
      text: `
      <h2 class="h3-title">Грабнете 1500 EUR + 150 Безплатни завъртания</h2>
      <a href="https://www.vulkanvegas.global/go/vulkanvegas/" class="slider-btn-bonus" target="_blank" rel="nofollow">Вземете бонус</a>`,
      leftImage: "/images/vulkanvegascasino/assets/slides/s-01/left.webp",
      rightImage: "/images/vulkanvegascasino/assets/slides/s-01/right.webp"
    },
    {
      backgroundImage: "url('/images/vulkanvegascasino/assets/slides/s-02/bg-2.webp')",
      text: `
      <h2 class="h3-title">Грабнете 50 БЗ без депозит</h2>
      <a href="https://www.vulkanvegas.global/go/vulkanvegas/" class="slider-btn-bonus" target="_blank" rel="nofollow">Вземете бонус</a>`,
      leftImage: "/images/vulkanvegascasino/assets/slides/s-02/left.webp",
      rightImage: "/images/vulkanvegascasino/assets/slides/s-02/right.webp"
    }
  ],
  pl: [
    {
      backgroundImage:
        "url('/images/vulkanvegascasino/assets/slides/s-01/bg-1.webp')",
      text: `
      <h2 class="h3-title">Uzyskaj 1 500 EUR + 150 darmowych spinów</h2>
      <a href="https://www.vulkanvegas.global/go/vulkanvegas/" class="slider-btn-bonus" target="_blank" rel="nofollow">Otrzymaj bonus</a>`,
      leftImage: "/images/vulkanvegascasino/assets/slides/s-01/left.webp",
      rightImage: "/images/vulkanvegascasino/assets/slides/s-01/right.webp",
    },
    {
      backgroundImage:
        "url('/images/vulkanvegascasino/assets/slides/s-02/bg-2.webp')",
      text: `
      <h2 class="h3-title">Odbierz 50 DS bez depozytu</h2>
      <a href="https://www.vulkanvegas.global/go/vulkanvegas/" class="slider-btn-bonus" target="_blank" rel="nofollow">Otrzymaj bonus</a>`,
      leftImage: "/images/vulkanvegascasino/assets/slides/s-02/left.webp",
      rightImage: "/images/vulkanvegascasino/assets/slides/s-02/right.webp",
    },
  ]
};

const lang = document.documentElement.lang || "en";
const slides = localizedSlides[lang] || localizedSlides["en"];

let currentSlide = 0;
let autoSlide;

function updateSlide() {
  const slider = document.getElementById("slider");
  const slideContainer = document.getElementById("slideContainer");
  const text = document.getElementById("text");
  const leftImage = document.getElementById("leftImage");
  const rightImage = document.getElementById("rightImage");

  slideContainer.style.animation = "none";
  text.style.animation = "none";
  leftImage.style.animation = "none";
  rightImage.style.animation = "none";

  setTimeout(() => {
    slider.style.backgroundImage = slides[currentSlide].backgroundImage;
    text.innerHTML = slides[currentSlide].text;
    leftImage.innerHTML = `<img src="${slides[currentSlide].leftImage}" alt="Left Image">`;
    rightImage.innerHTML = `<img src="${slides[currentSlide].rightImage}" alt="Right Image">`;

    slideContainer.style.animation = "fadeIn 1s ease-out forwards";
    text.style.animation = "textFadeIn 0.7s ease-out forwards";
    leftImage.style.animation = "imageFadeIn 1s ease-out forwards";
    rightImage.style.animation = "imageFadeIn 1s ease-out forwards";
  }, 300);
}

function prevSlide() {
  currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
  updateSlide();
  resetAutoSlide();
}

function nextSlide() {
  currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
  updateSlide();
  resetAutoSlide();
}

function startAutoSlide() {
  autoSlide = setInterval(nextSlide, 6000);
}

function resetAutoSlide() {
  clearInterval(autoSlide);
  startAutoSlide();
}

updateSlide();
startAutoSlide();


// end Slider 
// ---------

// ---------
// Table Info (Localized)

const localizedTableData = {
  en: [
    { name: "🏆 Brand", value: "VulkanVegas" },
    { name: "✅ Official website", value: "VulkanVegas.com" },
    {
      name: "✔️ Working Mirror",
      value: "Current mirror - <a href='https://www.vulkanvegas.global/go/vulkanvegas/' target='_blank'>go to mirror</a>"
    },
    { name: "🚀 Platform", value: "Web, mobile" }
  ],
  bg: [
    { name: "🏆 Бранд", value: "VulkanVegas" },
    { name: "✅ Официален уебсайт", value: "VulkanVegas.com" },
    { name: "✔️  Работещ огледален сайт", value: "Настоящ огледален сайт - <a href='https://www.vulkanvegas.global/go/vulkanvegas/' target='_blank'>отиди до огледалото</a>" },
    { name: "🚀  Платформа", value: "Web, mobile" }
  ],
  pl: [
    { name: "🏆 Marka", value: "VulkanVegas" },
    { name: "✅ Oficjalna strona", value: "VulkanVegas.com" },
    {
      name: "✔️  Działający Mirror",
      value:
        "Aktualny Mirror - <a href='https://www.vulkanvegas.global/go/vulkanvegas/' target='_blank'>idź do strony Mirror</a>",
    },
    { name: "🚀  Platforma", value: "Web, mobile" },
  ]
};

function generateTable(data) {
  const container = document.getElementById("tableContainer");
  if (!container) return;

  container.innerHTML = "";

  data.forEach(item => {
    const row = document.createElement("div");
    row.classList.add("row");

    const nameDiv = document.createElement("div");
    nameDiv.textContent = item.name;

    const valueDiv = document.createElement("div");
    valueDiv.innerHTML = item.value;

    row.appendChild(nameDiv);
    row.appendChild(valueDiv);
    container.appendChild(row);
  });
}

const langForTable = document.documentElement.lang || "en";
const selectedTableData = localizedTableData[langForTable] || localizedTableData["en"];
generateTable(selectedTableData);

// end Table Info
// ---------

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById('header-nav__mobile').addEventListener('click', function () {
    document.getElementById('header-nav__mobile-icon').toggleAttribute('checked')
    document.getElementById('header-nav').classList.toggle('visible')
    document.getElementById('backdrop').classList.toggle('visible')
  })

  const readMore = () => {
    const textContainer = document.querySelector('.read-more-content');
    const text = textContainer.querySelector('.text');
    let readMoreBtn = textContainer.querySelector('.read-more-btn');

    const fullText = text.textContent;
    const shortText = fullText.slice(0, 100);
    if (shortText.length > 0) {
      readMoreBtn.style.display = 'inline'
      text.textContent = shortText + '...';
      readMoreBtn.addEventListener("click", function () {
        text.textContent = fullText;
        readMoreBtn.remove();
      });
    }
  }
  readMore();


  function subscribeFooter() {
    var email = document.getElementById('subscribe_email_footer');
    fetch("/backend/subscribe/new", { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: email.value, captcha_result: 2 }) }).then(() => {
      email.value = "Subscribed";
      setTimeout(function () {
        email.value = "";
      }, 2000)
    });
  }

  document.getElementById('subscribeFooter').addEventListener('click', subscribeFooter);
});

// ---------
// FAQ

const faqTitles = document.querySelectorAll('.faq-title');

faqTitles.forEach(title => {
  title.addEventListener('click', function () {
    const parent = this.closest('.faq-item');

    parent.classList.toggle('open');
  });
});

// end FAQ
// ---------
