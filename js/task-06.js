const newElement = document.querySelector("#validation-input");
// const dataLength = newElement.getAttribute("data-length");

newElement.onblur = (value) => {
  const element = value.currentTarget;
  const elementlength = Number(element.dataset.length);

  if (elementlength === newElement.value.length) {
    newElement.classList.remove("invalid");
    newElement.classList.add("valid");
  } else {
    newElement.classList.remove("valid");
    newElement.classList.add("invalid");
  }

  console.log(elementlength);
  console.log(newElement.value.length);
};
// inplength;
