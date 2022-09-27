const checkTextInputs = (selector) => {
  const txtInput = document.querySelectorAll(selector);

  txtInput.forEach((input) => {
    input.addEventListener("keypress", (event) => {
      if (event.key.match(/[^а-яё 0-9]/gi)) {
        event.preventDefault();
      }
    });
  });
};

export default checkTextInputs;
