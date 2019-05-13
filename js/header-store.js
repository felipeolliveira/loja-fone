const $icons = document.querySelectorAll(".header-store .icon");
const $searchBar = document.querySelector(".search-bar");

function handleClick(event) {
  event.preventDefault();
  $searchBar.classList.toggle("-active");
}

$icons.forEach(icon =>
  icon.addEventListener("click", () => {
    handleClick(event);
  })
);
