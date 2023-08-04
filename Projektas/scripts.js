
// sidebar navigacija

let navItems = document.querySelectorAll(
  ".sidebar .first-level-item > .title-wrapper"
);

navItems.forEach((item) => {
  item.addEventListener("click", function () {
    item.classList.toggle("active");
    item.nextElementSibling.classList.toggle("active");
  });
});

// pradzios puslapio blokai

let blocks = document.querySelectorAll(".page-content .blocks-wrapper .block");

blocks.forEach((block) => {
  let refreshButton = block.querySelector(".block-header .toggle-content");
  refreshButton.addEventListener("click", function () {
    block.querySelector(".block-content").classList.toggle("active");
    block
      .querySelector(".block-header .toggle-content i.ph")
      .classList.toggle("ph-arrows-out-simple");
    block
      .querySelector(".block-header .toggle-content i.ph")
      .classList.toggle("ph-arrows-in-simple");
  });
});
