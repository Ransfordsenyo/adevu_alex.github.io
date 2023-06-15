/*=======toggle style Switcher=========*/
const styleSwitcherToggle = document.querySelector(".style-swicher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
}) 