const categories = document.querySelector("#categories");
console.log(`Number of categories: ${categories.children.length}`);
console.log("");
const titles = document.querySelectorAll("h2");
const lists = document.querySelectorAll("li ul");
for (let i=0; i<titles.length; i++) {
   console.log(`Category: ${titles[i].textContent}`);
   console.log(`Elements: ${lists[i].children.length}`);
   console.log("");
}
