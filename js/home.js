const $cartButton = document.querySelector(".button-store.-second");

const handleClickCartButton = () => {
  const $cart = document.querySelector(".action.-cart");
  $cart.textContent = "Texto alterado";
};

$cartButton.addEventListener("click", handleClickCartButton);
