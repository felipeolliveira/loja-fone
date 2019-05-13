const $searchBar = document.querySelector(".search-bar");
const $icons = $searchBar.querySelectorAll(".icon");
const $content = $searchBar.querySelector(".content");

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
