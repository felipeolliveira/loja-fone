const $searchBar = document.querySelector(".search-bar");
const $searchIcons = $searchBar.querySelectorAll(".icon");
const $content = $searchBar.querySelector(".content");

function handleClickSearchBar(event) {
  event.preventDefault();
  $actionWrapper.classList.remove("-active");
  $searchBar.classList.toggle("-active");
  if ($content.value) $content.value = "";
}

$searchIcons.forEach(icon =>
  icon.addEventListener("click", () => {
    handleClickSearchBar(event);
  })
);
