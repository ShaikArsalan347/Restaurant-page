// src/index.js
import "./styles.css";
import { initialPageLoad } from "./page-load.js";
import { MenuPage } from "./menu.js";
import { aboutPage } from "./about.js";

const buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    buttons.forEach((button) => button.classList.remove("active"));
    e.target.classList.add("active");

    if (id === "menu") {
      MenuPage();
      e.target.classList.add("active");
    } else if (id === "about") {
      aboutPage();
      e.target.classList.add("active");
    } else {
      initialPageLoad();
    }
  });
});
