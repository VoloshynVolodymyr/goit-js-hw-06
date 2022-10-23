function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divContainer = document.querySelector("#boxes");
const divQuantity = document.querySelector("input");
const createDiv = document.querySelector("button");
const destroyDiv = document.querySelector("#controls").lastElementChild;

divContainer.style.display = "flex";
divContainer.style.flexDirection = "row";
divContainer.style.flexWrap = "wrap";

console.log(destroyDiv);
createDiv.addEventListener("click", () => {
  let boxexQuantity = divQuantity.value;
  let divString = "";
  let startDivMeasures = 30;
  for (let i = 0; i < boxexQuantity; i++) {
    const newDiv = document.createElement("div");
    newDiv.style.width = `${startDivMeasures}px`;
    newDiv.style.height = `${startDivMeasures}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.style.margin = "10px";
    newDiv.style.borderRadius = `${startDivMeasures}px`;
    startDivMeasures += 10;
    divContainer.append(newDiv);
  }
});

destroyDiv.addEventListener("click", () => {divContainer.innerHTML=""});
