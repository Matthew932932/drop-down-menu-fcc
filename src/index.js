import "./styles.css";
import odinImage from "./odin-lined.png";

// const image = document.createElement("img");
// image.src = odinImage;

// document.body.appendChild(image);

console.log("heyo");

const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropdown");
const toggleArrow = document.getElementById("arrow");

const toggleDropdown = function () {
  dropdownMenu.classList.toggle("show");
  toggleArrow.classList.toggle("arrow");
};

dropdownBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdown();
});
