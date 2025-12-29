const hamBurger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const bar = document.querySelector(".bar");

bar.addEventListener("click", () => {
  hamBurger.style.top = "50px";
});

close.addEventListener("click", () => {
  hamBurger.style.top = "-300px";
});