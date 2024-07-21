import "./style.css";
import homePage from "./pages/home.js";
import menuPage from "./pages/menu.js";
import aboutPage from "./pages/about.js";

const content = document.getElementById("content");

function clearContent() {
  while (content.firstChild) content.removeChild(content.firstChild);
}

const homeBtn = document.querySelector("nav > button:nth-child(1)");
const menuBtn = document.querySelector("nav > button:nth-child(2)");
const aboutBtn = document.querySelector("nav > button:nth-child(3)");

homeBtn.addEventListener("click", () => {
  clearContent();
  content.appendChild(homePage);
});

menuBtn.addEventListener("click", () => {
  clearContent();
  content.appendChild(menuPage);
});

aboutBtn.addEventListener("click", () => {
  clearContent();
  content.appendChild(aboutPage);
});

content.appendChild(homePage);
