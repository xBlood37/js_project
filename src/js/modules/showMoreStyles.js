import { getResource } from "../services/requests";

const showMoreStyles = (trigger, wrapper) => {
  const btn = document.querySelector(trigger);

  try {
    btn.addEventListener("click", () => {
      getResource("http://localhost:3000/styles").then((res) =>
        createCards(res)
      );
    });
  } catch (error) {
    console.error(error);
  }

  const createCards = (resp) => {
    resp.forEach(({ src, title, link }) => {
      let card = document.createElement("div");

      card.classList.add(
        "animated",
        "fadeInUp",
        "col-sm-3",
        "col-sm-offset-0",
        "col-xs-10",
        "col-xs-offset-1"
      );

      card.innerHTML = `
        <div class="styles-block">
            <img src=${src}>
            <h4>${title}</h4>
            <a href=${link}>Подробнее</a>
        </div>
      `;
      document.querySelector(wrapper).appendChild(card);
    });
  };
};

export default showMoreStyles;
