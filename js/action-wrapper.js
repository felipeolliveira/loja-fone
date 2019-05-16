const $actionWrapper = document.querySelector(".action-wrapper");
const $menuIcons = $actionWrapper.querySelector(".menu");

console.log($menuIcons);

function handleClickMenuIcons(event) {
  event.preventDefault();
  $actionWrapper.classList.toggle("-active");
}

$menuIcons.addEventListener("click", () => {
  handleClickMenuIcons(event);
});
