// JS goes here
class Tablink {
  constructor(link) {
    this.Tablink = link;
    this.tabContent = document.querySelector(
      `.content[data-tab = '${link.dataset.tab}']`
    );
    this.data = link.dataset.tab;
    this.tabContent = new Content(this.tabContent);
    link.addEventListener("click", () => this.linkClick());
  }
  linkClick() {
    let boxes = document.querySelectorAll(".content");
    boxes.forEach(box => {
      box.style.display = "none";
      if (this.data === box.dataset.tab) {
        box.style.display = "block";
      }
    });
    let links = document.querySelectorAll(".link");
    links.forEach(link => {
      link.classList.remove("clicked");
    });
    this.Tablink.classList.add("clicked");
  }
}

class Content {
  constructor(tabElement) {
    this.tabElement = tabElement;
  }
  toggleContent() {
    this.tabElement.classList.toggle("change");
  }
}

const links = document.querySelectorAll(".link");
links.forEach(link => new Tablink(link));

// const hamburgerBtn = document.querySelector(".nav-hamburger") - for each of the 3 items

// start with class called "hidden" on x button and on menu.
// display: none; in less

// step 1. get all of items using querySelector - hamburger button, x button, menu

const hamburgerBtn = document.querySelector(".nav-hamburger");
const xBtn = document.querySelector(".nav-x");
const openNav = document.querySelector(".open-nav");

// step 2. define function for the click event.
// const myClickFunction = () => {
//   hamburgerBtn.classList.toggle('hidden')
// }; - for each of the 3 items. (replace hamburgerBtn with the variable)

const myClickFunction = () => {
  hamburgerBtn.classList.toggle("hidden");
};

const myClickFunction1 = () => {
  xBtn.classList.toggle("hidden");
};

const myClickFunction2 = () => {
  openNav.classList.toggle("hidden");
};

// step 3. for all 3 - addEventListener('click', myClickFuntion)

hamburgerBtn.addEventListener("click", myClickFunction);
xBtn.addEventListener("click", myClickFunction1);
openNav.addEventListener("click", myClickFunction2);
