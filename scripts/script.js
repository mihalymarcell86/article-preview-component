const shareButton = document.querySelector(".footer__share-btn");
const shareMenu = document.querySelector(".footer__share-menu");
const author = document.querySelector(".footer__author");
const container = document.querySelector(".footer__animation-container");

//Mobile menu animation

let mobileMenuOpen = false;

function toggleShareMenu() {
  shareButton.classList.toggle("share-btn--active");

  if (mobileMenuOpen) {
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

  mobileMenuOpen = !mobileMenuOpen;
}

function menuAnimation() {
  const div = document.createElement("div");
  div.classList.add("animation_circle");
  div.style.animation = ".7s growing_circle";
  container.style.display = "block";
  container.style.backgroundColor = "transparent";
  container.append(div);
  setTimeout(() => {
    container.style.backgroundColor = "hsl(217, 19%, 35%)";
    div.remove();
  }, 600);
}

shareButton.addEventListener("click", toggleShareMenu);
