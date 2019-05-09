const $search = document.querySelector('[type="search"]');

function handleClick() {
  this.classList.toggle("-active");
}

$search.addEventListener("click", handleClick);
