const colorChangeButton = document.querySelector(".change-color");
const bodyElement = document.querySelector('body');
const textInfo = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

colorChangeButton.addEventListener("click", () => 
 {bodyElement.style.backgroundColor = getRandomHexColor(),
textInfo.textContent = getRandomHexColor()
});

