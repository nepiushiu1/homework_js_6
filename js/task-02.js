const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const item = document.createElement("li");

const newItem = ingredients
  .map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join("");

const list = document.querySelector("ul");

console.log(list);
list.innerHTML = newItem;
