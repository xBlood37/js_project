import modals from "./modules/modals";
import slider from "./modules/slider";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
import showMoreStyles from "./modules/showMoreStyles";
import calc from "./modules/calc";
import filter from "./modules/filter";
import pickSize from "./modules/pickSize";
import collabs from "./modules/collabs";
import burger from "./modules/burger";
import scrolling from "./modules/scrolling";
// import drop from "./modules/drop";

window.addEventListener("DOMContentLoaded", () => {
  modals();
  slider(".feedback-slider-item", "", ".main-prev-btn", ".main-next-btn");
  slider(".main-slider-item", "vertical");
  forms();
  mask('[name="phone"]');
  checkTextInputs('[name="name"]');
  checkTextInputs('[name="message"]');
  showMoreStyles(".button-styles", "#styles .row");
  calc("#size", "#material", "#options", ".promocode", ".calc-price");
  filter();
  pickSize(".sizes-block");
  collabs(".accordion-heading");
  burger(".burger-menu", ".burger");
  scrolling(".pageup");
  // drop();
});