const buttonBurgerRef = document.querySelector(".button-burger");
const navigationRef = document.querySelector(".navigation");
const backdropRef = document.querySelector(".backdrop");

buttonBurgerRef.addEventListener("click", () => {
  buttonBurgerRef.classList.toggle("is-open");

  if (buttonBurgerRef.classList.contains("is-open")) {
    navigationRef.classList.add("is-open");
    backdropRef.classList.add("is-open");
  } else {
    navigationRef.classList.remove("is-open");
    backdropRef.classList.remove("is-open");
  }
});
