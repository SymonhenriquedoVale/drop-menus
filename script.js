const dropdownMenus = document.querySelectorAll("[data-dropdown]");
const dropdownMenus2 = document.querySelectorAll("[data-dropdown2]");
const botao = document.querySelector("button");
const seta = document.querySelector(".seta");
const seta2 = document.querySelector(".seta2");

dropdownMenus.forEach((menu) => {
  menu.addEventListener("click", handleClick);
});

dropdownMenus2.forEach((menu) => {
  menu.addEventListener("click", handleClick);
});

botao.addEventListener("click", handleClick);

seta.addEventListener("click", handleClick);
seta2.addEventListener("click", handleClick);

function handleClick(event) {
  event.preventDefault();
  this.classList.toggle("ativo");
}
