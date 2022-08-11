const categories = document.querySelectorAll(".item");
const allCategories = categories.length;
console.log(`Number of categories: ${allCategories}`);

categories.forEach((element) => {
  let titleElement = element.querySelector("h2").textContent;
  let allElement = element.querySelectorAll("li").length;

  console.log(`Category: ${titleElement}`);
  console.log(`Elements: ${allElement}`);
});
