const inputLine = document.querySelector("#name-input");
const displayString = document.querySelector("#name-output");

console.log(inputLine);
console.log(displayString);

inputLine.addEventListener("input", (event) => {
  displayString.textContent = event.currentTarget.value;
});
