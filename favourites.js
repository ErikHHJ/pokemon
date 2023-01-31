import { adjustBg, renderCards,  } from "./ny.js";
const favKey = 'favourites';
if (!localStorage.getItem(favKey)) {
    localStorage.setItem(favKey, JSON.stringify(lsArr));
  }
  const favourites = JSON.parse(localStorage.getItem(favKey));

const main = document.querySelector("main");
main.classList.add("center");
export const lsArr = []

renderCards (favourites)

