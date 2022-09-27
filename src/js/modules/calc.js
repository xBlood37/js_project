const calc = (size, material, options, promocode, result) => {
  const sizeBlock = document.querySelector(size);
  const materialBlock = document.querySelector(material);
  const optionsBlock = document.querySelector(options);
  const promocodeBlock = document.querySelector(promocode);
  const resultBlock = document.querySelector(result);

  let sum = 0;

  const calcFunc = () => {
    const values = sizeBlock.value === "" || materialBlock.value === "";
    const promocodeVal = promocodeBlock.value === "IWANTPOPART";

    sum = Math.round(
      +sizeBlock.value * +materialBlock.value + +optionsBlock.value
    );

    if (values) {
      resultBlock.textContent = "Выбери хоть материал дэбил блять";
    } else if (promocodeVal) {
      resultBlock.textContent = Math.round(sum * 0.7);
    } else {
      resultBlock.textContent = sum;
    }
  };

  sizeBlock.addEventListener("change", calcFunc);
  materialBlock.addEventListener("change", calcFunc);
  optionsBlock.addEventListener("change", calcFunc);
  promocodeBlock.addEventListener("input", calcFunc);
};

export default calc;
