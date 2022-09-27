const collabs = (triggersSelector, itemsSelector) => {
  const btns = document.querySelectorAll(triggersSelector);

  function btnsClass() {
    const elementSibling = this.nextElementSibling;
    this.classList.toggle("active-style");
    elementSibling.classList.toggle("active-content");

    if (this.classList.contains("active-style")) {
      elementSibling.style.maxHeight = elementSibling.scrollHeight + 80 + "px";
    } else {
      elementSibling.style.maxHeight = "0px";
    }
  }

  btns.forEach((btn) => {
    btn.addEventListener("click", btnsClass);
  });
};

export default collabs;
