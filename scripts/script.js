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

  const dateElement = clone.querySelector(".content__card-date");
  const dateWrapper = clone.querySelector(".content__card-date-wrapper");

  let icon = null;

  if (item["date-state"] === "Идет трансляция") {
    icon = document.createElement("img");
    icon.src = "icons/solar_play-stream-broken.svg";
    icon.alt = "Онлайн";
    icon.className = "date-icon";

    dateElement.classList.add("date--live");
  } else if (item["date-state"].startsWith("Начнется через")) {
    icon = document.createElement("img");
    icon.src = "icons/solar_check-square-broken.svg";
    icon.alt = "Ожидание";
    icon.className = "date-icon";
  }

  if (icon) {
    dateWrapper.insertBefore(icon, dateElement);
  }

  dateElement.textContent = item["date-state"];

  container.appendChild(clone);
});
