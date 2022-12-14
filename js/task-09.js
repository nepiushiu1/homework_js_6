function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const background = document.querySelector("body");

const colorDescription = document.querySelector(".color");
const button = document.querySelector(".change-color");

button.addEventListener("click", () => {
  background.style.backgroundColor = getRandomHexColor();
  colorDescription.textContent = getRandomHexColor();
});
console.log(button);
