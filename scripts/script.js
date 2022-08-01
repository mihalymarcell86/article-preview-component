const shareButton = document.querySelector(".footer__share-btn");
const shareMenu = document.querySelector(".footer__share-menu");
const author = document.querySelector(".footer__author");
const container = document.querySelector(".footer__animation-container");

//Mobile menu animation

let isMenuOpen = false;

function toggleShareMenu() {
  shareButton.classList.toggle("share-btn--active");

  if (window.innerWidth < 800) {
    if (isMenuOpen) {
      shareMenu.style.opacity = "0";
      container.style.display = "none";
      author.style.opacity = "1";
      setTimeout(() => (shareMenu.style.display = "none"), 290);
    } else {
      author.style.opacity = "0";
      menuAnimation();
      shareMenu.style.display = "flex";
      setTimeout(() => {
        shareMenu.style.opacity = "1";
      }, 500);
    }
  } else {
    if (isMenuOpen) {
      shareMenu.style.opacity = "0";
    } else {
      shareMenu.style.display = "flex";
      shareMenu.style.animation = ".5s forwards tooltip_popup";
      setTimeout(() => {
        shareMenu.style.opacity = "1";
        shareMenu.style.animation = "";
      }, 490);
    }
  }

  isMenuOpen = !isMenuOpen;
}

function menuAnimation() {
  const div = document.createElement("div");
  div.classList.add("animation_circle");
  div.style.animation = ".5s growing_circle cubic-bezier(.87,.25,.58,.95)";
  container.style.display = "block";
  container.style.backgroundColor = "transparent";
  container.append(div);
  setTimeout(() => {
    container.style.backgroundColor = "hsl(217, 19%, 35%)";
    div.remove();
  }, 450);
}

shareButton.addEventListener("click", toggleShareMenu);

//if window is resized while the menu is open,
//close the menu to avoid clashing

window.addEventListener("resize", () => {
  if (isMenuOpen) {
    shareMenu.style.opacity = "0";
    container.style.display = "none";
    author.style.opacity = "1";
    shareMenu.style.display = "none";
    isMenuOpen = false;
  }
});
