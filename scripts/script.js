import { cardsData } from "./db.js";

const container = document.getElementById("cardContainer");
const template = document.getElementById("cardTemplate");

cardsData.items.forEach((item) => {
  const clone = template.content.cloneNode(true);
  clone.querySelector(".content__card-title").innerHTML = item.title.replace(
    /\n/g,
    "<br>",
  );
  clone.querySelector(".content__card-description").textContent = item.text;
  clone.querySelector(".content__card-date").textContent = item["date-state"];
  container.appendChild(clone);
});
