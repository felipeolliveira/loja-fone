const $favoriteIcon = document.querySelector(".-favorite");
const $starsIcons = document.querySelectorAll(".star");

function handleClickFavoriteIcon() {
  $favoriteIcon.classList.toggle("-active");
}

function removeStarsActives() {
  $starsIcons.forEach(star => star.classList.remove("-active"));
}

function addStarsActives(clickIndex) {
  $starsIcons.forEach((star, eachIndex) => {
    if (eachIndex <= clickIndex) {
      star.classList.add("-active");
    }
  });
}

$favoriteIcon.addEventListener("click", handleClickFavoriteIcon);

$starsIcons.forEach((star, index) => {
  star.addEventListener("click", () => {
    removeStarsActives();
    addStarsActives(index);
  });
});
