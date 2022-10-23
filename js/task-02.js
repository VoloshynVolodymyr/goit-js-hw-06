const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
let liArray = [];
for (let i = 0; i < ingredients.length; i++) {
  liArray[i] = document.createElement("li");
  liArray[i].textContent = `${ingredients[i]}`;
  liArray[i].classList.add("item");
}
list.append(...liArray);

