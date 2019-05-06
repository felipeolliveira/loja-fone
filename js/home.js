let initialValue = 0;
const $cartButton = document.querySelector(".button-store.-second");
const $cart = document.querySelector(".action.-cart");

const handleClickCartButton = () => {
  $cart.textContent = `Carrinho(${++initialValue})`;
};

$cartButton.addEventListener("click", handleClickCartButton);
