const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const gallery = document.querySelector(".gallery");

const item = document.createElement("li");
item.classList.add("item");

const elements = images.map((option) => {
  const image = document.createElement("img");
  image.src = option.url;
  image.alt = option.alt;
  image.classList = ".image";
  image.width = 300;
  image.height = 300;

  return image;
});
console.log(elements);
gallery.append(...elements);

// const option = images[0];

// const image = document.createElement("img");
// image.src = option.url;
// image.alt = option.alt;
// console.log(image);
// const gallery = document.querySelector(".gallery");

// const item = document.createElement("li");
// item.classList.add("item");

// item.insertAdjacentHTML("beforeend", '<img src="" alt=""></img>');
// console.log(item);
// const image = document.createElement("img");
// // image.src = images.url;
// // image.alt = images.alt;
// console.log(image);
