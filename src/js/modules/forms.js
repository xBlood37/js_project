import { postData } from "../services/requests";

const forms = () => {
  const form = document.querySelectorAll("form"),
    input = document.querySelectorAll("input"),
    uploadImg = document.querySelectorAll('[name="upload"]');

  const message = {
    loading: "Грузимся не нервничай",
    success: "Все, а теперь отстань",
    failure: "Все сломалось ОШИИИБКА",
    spinner: "assets/img/spinner.gif",
    ok: "assets/img/ok.png",
    fail: "assets/img/fail.png",
  };

  const path = {
    designer: "https://6321af2582f8687273b6cd37.mockapi.io/form2",
    question: "https://6321af2582f8687273b6cd37.mockapi.io/form2",
  };

  const clear = () => {
    input.forEach((item) => (item.value = ""));
  };

  uploadImg.forEach((item) => {
    item.addEventListener("input", () => {
      let dots;
      item.files[0].name.split(".")[0].length > 5
        ? (dots = "...")
        : (dots = item);
      item.files[0].name.split(".")[0].length > 5
        ? (dots = "...")
        : (dots = item);
      const name =
        item.files[0].name.split(".")[0].substring(0, 6) +
        dots +
        item.files[0].name.split(".")[1];
      item.previousElementSibling.textContent = name;
    });
  });

  form.forEach((item) => {
    item.addEventListener("submit", (e) => {
      e.preventDefault();

      let statusMessage = document.createElement("div");
      statusMessage.classList.add("status");
      item.parentNode.appendChild(statusMessage);

      item.classList.add("animated", "fadeOutUp");
      setTimeout(() => {
        item.style.display = "none";
      }, 400);

      let statusImg = document.createElement("img");
      statusImg.setAttribute("src", message.spinner);
      statusImg.classList.add("animated", "fadeInUp");
      statusMessage.appendChild(statusImg);

      let textMessage = document.createElement("div");
      textMessage.textContent = message.loading;
      statusMessage.appendChild(textMessage);

      const formData = new FormData(item);
      let api;
      item.closest(".popup-design") || item.classList.contains("calc_form")
        ? (api = path.designer)
        : (api = path.question);

      try {
        postData(api, formData)
          .then((res) => {
            console.log(res);
            statusImg.setAttribute("src", message.ok);
            textMessage.textContent = message.success;
          })
          .finally(() => {
            clear();
            setTimeout(() => {
              statusMessage.remove();
              item.style.display = "block";
              item.classList.remove("fadeOutUp");
              item.classList.add("fadeInUp");
            }, 5000);
          });
      } catch (error) {
        statusImg.setAttribute("src", message.fail);
        textMessage.textContent = message.failure;
      }
    });
  });
};

export default forms;
