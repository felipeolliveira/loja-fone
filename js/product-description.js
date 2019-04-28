const $favoriteIcon = document.querySelector(".-favorite");
const $cartButton = document.querySelector(".button-store.-second");
const $cartInMenu = document.querySelector(".action.cart");

const handleClickFavoriteIcon = () => {
  console.log("clique no botão de carrinho")
}

const handleClickCartButton = () => {
  console.log("clique no coração") 
};

const handleClickCartInMenu = () => {
  $cartInMenu.innerText = "foi"
} 

$favoriteIcon.addEventListener("click", handleClickCartButton);
$cartButton.addEventListener("click", handleClickFavoriteIcon);
$cartInMenu.addEventListener("click", handleClickCartInMenu)