const $favoriteIcon = document.querySelector(".-favorite");

const handleClickFavoriteIcon = () => {
  $favoriteIcon.classList.toggle("-active");
  console.log("teste");
};

$favoriteIcon.addEventListener("click", handleClickFavoriteIcon);
