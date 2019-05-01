const $cartButton = document.querySelector(".button-store.-second");

const handleClickCartButton = () => {
  const $cart = document.querySelector(".action.-cart");
  $cart.innerText = "foi";
};

$cartButton.addEventListener("click", handleClickCartButton);
