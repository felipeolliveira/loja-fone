const $icons = document.querySelectorAll(".header-store .icon");
const $searchBar = document.querySelector(".header-store .search");

function handleClick() {
  $searchBar.classList.toggle("-active");
}

$icons.forEach(icon => icon.addEventListener("click", handleClick));
