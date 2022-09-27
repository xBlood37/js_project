const modals = () => {
  let btnClick;

  function bindModal(
    triggerSelector,
    modalSelector,
    closeSelector,
    destroy = false
  ) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      windows = document.querySelectorAll("[data-modal]");

    trigger.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
        }

        btnClick = true;

        if (destroy) {
          item.remove();
        }

        windows.forEach((items) => {
          items.style.display = "none";
          items.classList.add("animated", "fadeIn");
        });

        modal.style.display = "block";
        document.body.style.overflow = "";
      });
    });

    close.addEventListener("click", () => {
      windows.forEach((items) => {
        items.style.display = "none";
      });
      modal.style.display = "none";
      document.body.style.overflow = "";
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        windows.forEach((items) => {
          items.style.display = "none";
        });
        modal.style.display = "none";
        document.body.style.overflow = "";
      }
    });
  }

  function showModalByTime(selector, time) {
    setTimeout(() => {
      let display;

      document.querySelectorAll("[data-modal").forEach((item) => {
        if (getComputedStyle(item).display !== "none") {
          display = "block";
        }
      });

      if (!display) {
        document.querySelector(selector).style.display = "block";
        document.body.style.overflow = "";
      }
    }, time);
  }

  function openByScroll(selector) {
    window.addEventListener("scroll", () => {
      if (
        !btnClick &&
        window.pageYOffset + document.documentElement.clientHeight >=
          document.documentElement.scrollHeight
      ) {
        document.querySelector(selector).click();
      }
    });
  }

  bindModal(".button-design", ".popup-design", ".popup-design .popup-close");
  bindModal(
    ".button-consultation",
    ".popup-consultation",
    ".popup-consultation .popup-close"
  );
  bindModal(".fixed-gift", ".popup-gift", ".popup-gift .popup-close", true);

  openByScroll(".fixed-gift");

  showModalByTime(".popup-consultation", 60000);
};

export default modals;
