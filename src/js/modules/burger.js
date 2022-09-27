const burger = (menuSelector, burgerSelector) => {
  const menuEl = document.querySelector(menuSelector);
  const burgerEl = document.querySelector(burgerSelector);

  menuEl.style.display = "none";

  const menuFn = function () {
    if (menuEl.style.display === "none" && window.screen.availWidth < 993) {
      menuEl.style.display = "block";
    } else {
      menuEl.style.display = "none";
    }
  };

  const menuStyle = function () {
    if (window.screen.availWidth > 992) {
      menuEl.style.display = "none";
    }
  };

  burgerEl.addEventListener("click", menuFn);
  window.addEventListener("resize", menuStyle);
};

export default burger;
