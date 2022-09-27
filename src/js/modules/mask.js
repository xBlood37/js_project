const mask = (selector) => {
  let setCursorPos = (pos, el) => {
    el.focus();

    if (el.setSelectionRange) {
      el.setSelectionRange(pos, pos);
    } else if (el.createTextRange) {
      let range = el.createTextRange();

      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select();
    }
  };

  function createMask(event) {
    let matrix = "+7 (___) ___ __ __";
    let i = 0;
    let def = matrix.replace(/\D/g, "");
    let val = this.value.replace(/\D/g, "");

    if (def.length >= val.length) {
      val = def;
    }

    this.value = matrix.replace(/./g, (a) => {
      return /[_\d]/.test(a) && i < val.length
        ? val.charAt(i++)
        : i >= val.length
        ? ""
        : a;
    });

    if (event.type == "blur") {
      if (this.value.length == 2) {
        this.value = "";
      }
    } else {
      setCursorPos(this.value.length, this);
    }
  }

  let inputs = document.querySelectorAll(selector);

  inputs.forEach((input) => {
    input.addEventListener("input", createMask);
    input.addEventListener("focus", createMask);
    input.addEventListener("blur", createMask);
  });
};

export default mask;
