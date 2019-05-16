const $actionWrapper = document.querySelector(".action-wrapper");
const $menuIcons = $actionWrapper.querySelectorAll(".icon");

function handleClickMenuIcons() {
  $actionWrapper.classList.toggle("-active");
}

$menuIcons.forEach(icon => {
  icon.addEventListener("click", handleClickMenuIcons);
});
