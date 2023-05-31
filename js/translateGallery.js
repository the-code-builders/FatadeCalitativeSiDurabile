


let translationObject = {};
let elementTranslateAttribute = "lg";

async function initializeTranslations(lang, attribute) {
  const data = await fetch("../js/translation.json");
  translationObject = await data.json();

  let allElements = document.querySelectorAll("*");

  allElements.forEach((element) => {
    if (element.hasAttribute(attribute)) {

      if (element.hasAttribute('placeholder')) {
        element.placeholder = translationObject[lang][element.getAttribute(attribute)];
        return;
      }

      element.innerText =
        translationObject[lang][element.getAttribute(attribute)];
    }
  });
}

document.querySelectorAll(".lang-ru").forEach((item) => {
  item.addEventListener("click", () => {
    initializeTranslations("RU", elementTranslateAttribute);
    localStorage.setItem("lang", "RU");
  });
})

document.querySelectorAll(".lang-ro").forEach((item) => {
  item.addEventListener("click", () => {
    initializeTranslations("RO", elementTranslateAttribute);
    localStorage.setItem("lang", "RO");
  });
})

document.querySelectorAll(".lang-en").forEach((item) => {
  item.addEventListener("click", () => {
    initializeTranslations("EN", elementTranslateAttribute);
    localStorage.setItem("lang", "EN");
  });
})

if (!localStorage.getItem("lang")) {
  localStorage.setItem("lang", "RO");
} else {
  initializeTranslations(
    localStorage.getItem("lang"),
    elementTranslateAttribute
  );
}


let languageElements = document.querySelectorAll('.language-selected');
if (localStorage.getItem("lang")) {
  languageElements.forEach(element => {
    element.textContent = localStorage.getItem("lang")
  })
}


document.querySelectorAll('.languages-container > li').forEach(element => element.addEventListener('click', (e) => {
  const languageElement = e.target;
  if (localStorage.getItem("lang")) {
    languageElement.textContent = localStorage.getItem("lang")
  }
  const selectedLanguageText = languageElement.textContent;

  const languageSelectedElements = document.querySelectorAll('.language-selected');

  languageSelectedElements.forEach(element => {
    element.textContent = selectedLanguageText;
  })
})
)

let SelectedLang = document.querySelector('.responsive-sidebar .language-selected');
let LangList = document.querySelector('.responsive-sidebar .language');
let LangContainer = document.querySelector('.responsive-sidebar .languages-container');
let LangItem = document.querySelectorAll('.responsive-sidebar .languages-container a');

SelectedLang.addEventListener("click", () => {
  SelectedLang.classList.toggle("open");
  LangList.classList.toggle("open");
  LangContainer.classList.toggle("open");
})

LangItem.forEach((link) => {
  link.addEventListener("click", () => {
    LangContainer.classList.toggle("open");
    SelectedLang.classList.toggle("open");

  })
})

document.body.style.opacity = "1";

