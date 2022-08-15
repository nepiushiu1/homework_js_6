function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const background = document.querySelector("body");

const colorDescription = document.querySelector(".color");
const button = document.querySelector(".change-color");

let colorСhange = () => {};
