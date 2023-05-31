function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);

function reveal2() {
  var reveals = document.querySelectorAll(".reveal2");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal2);

function reveal3() {
  var reveals = document.querySelectorAll(".reveal3");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal3);

function reveal4() {
  var reveals = document.querySelectorAll(".reveal4");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

let burger = document.querySelector("#burger");
let sidebar = document.querySelector(".responsive-sidebar");
let sidebarLinks = document.querySelectorAll(".responsive-sidebar a");
let navbar = document.querySelector(".navbar");

sidebarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    navbar.classList.toggle("open");
    burger.classList.toggle("open");
    LangContainer.classList.remove("open");
    SelectedLang.classList.remove("open");
  });
});

burger.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  navbar.classList.toggle("open");
  burger.classList.toggle("open");
  LangContainer.classList.remove("open");
  SelectedLang.classList.remove("open");
});

let form = document.querySelector("#form");
let error = document.querySelector(".error");

async function handleSubmit(event) {
  event.preventDefault();
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        let hideStatusAfter = 5;
        form.reset();
        form.querySelector(".status").classList.add("display");
        setTimeout(() => {
          form.querySelector(".status").classList.remove("display");
        }, hideStatusAfter * 1000);
      }
    })
    .catch((e) => {
      console.log(e);
    });
}
form.addEventListener("submit", handleSubmit);

const accordion = document.getElementsByClassName("question-container");
for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
