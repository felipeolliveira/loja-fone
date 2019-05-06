const $favoriteIcon = document.querySelector(".-favorite");
const $starsIcons = document.querySelectorAll(".star");

console.log($starsIcons);

const handleClickFavoriteIcon = () => {
  $favoriteIcon.classList.toggle("-active");
};

$favoriteIcon.addEventListener("click", handleClickFavoriteIcon);

$starsIcons.forEach(star => {
  star.addEventListener("click", () => {
    star.classList.toggle("-active");
  });
});
