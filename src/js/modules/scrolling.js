const scrolling = (pageUpSelector) => {
  const upElem = document.querySelector(pageUpSelector);
  const $el = document.documentElement;
  const body = document.body;

  function scrollButton() {
    if ($el.scrollTop > 1650) {
      upElem.style.opacity = 1;
    } else {
      upElem.style.opacity = 0;
    }
  }

  function smoothScroll(from, to, hash) {
    let timeInterval = 1;
    let prevScrollTop;
    let speed;

    if (to > from) {
      speed = 30;
    } else {
      speed = -30;
    }

    let move = setInterval(() => {
      let scrollTop = Math.round(body.scrollTop || $el.scrollTop);

      if (
        prevScrollTop === scrollTop ||
        (to > from && scrollTop >= to) ||
        (to < from && scrollTop <= to)
      ) {
        clearInterval(move);
        history.replaceState(
          history.state,
          document.title,
          location.href.replace(/#.*$/g, "") + hash
        );
      } else {
        body.scrollTop += speed;
        $el.scrollTop += speed;
        prevScrollTop = scrollTop;
      }
    }, timeInterval);
  }

  function calculated(e) {
    let scrollTop = Math.round(body.scrollTop || $el.scrollTop);

    if (this.hash !== "") {
      e.preventDefault();
      let hashElement = document.querySelector(this.hash);
      let hashElementTop = 0;

      while (hashElement.offsetParent) {
        hashElementTop += hashElement.offsetTop;
        hashElement = hashElement.offsetParent;
      }

      hashElementTop = Math.round(hashElementTop);
      smoothScroll(scrollTop, hashElementTop, this.hash);
    }
  }

  function calcScroll() {
    upElem.addEventListener("click", calculated);
  }

  window.addEventListener("scroll", scrollButton);

  calcScroll();
};

export default scrolling;
