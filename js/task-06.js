const newElement = document.querySelector("#validation-input");
const dataLength = newElement.getAttribute("data-length");

newElement.onblur = () => {
  if (dataLength > newElement.value.length) {
    newElement.classList.remove("valid");
    newElement.classList.add("invalid");
  } else {
    newElement.classList.remove("invalid");
    newElement.classList.add("valid");
  }
};
