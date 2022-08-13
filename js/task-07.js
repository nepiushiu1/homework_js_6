const fontControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
const newElementSizes = () => {
  text.style.fontSize = `${fontControl.value}px`;
};
fontControl.addEventListener("input", newElementSizes);
