const fontSizeController = document.querySelector("#font-size-control");
const textContainer = document.querySelector("#text");

fontSizeController.addEventListener("input", event => 
textContainer.style.fontSize = `${event.target.value}px`);

