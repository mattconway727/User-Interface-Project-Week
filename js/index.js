// JS goes here
class Tablink {
  constructor(link) {
    this.tabContent = document.querySelector(
      `.content[data-tab = '${link.dataset.tab}']`
    );
    this.tabContent = new Content(this.tabContent);
    link.addEventListener("click", () => this.linkClick());
  }
  linkClick() {
    this.tabContent.toggleContent();
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
