const $icons = document.querySelectorAll(".search-bar .icon");
const $content = document.querySelector(".search-bar .content");
const $searchBar = document.querySelector(".search-bar");

function handleClick(event) {
  event.preventDefault();
  $searchBar.classList.toggle("-active");
  if ($content.value) $content.value = "";
}

$icons.forEach(icon =>
  icon.addEventListener("click", () => {
    handleClick(event);
  })
);
