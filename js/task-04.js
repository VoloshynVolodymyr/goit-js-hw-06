const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');
const valueCounter = document.querySelector("#value");

let counterValue = 0;

function incrementGlobalCounter() 
{++counterValue; valueCounter.textContent=counterValue;}

function decrementGlobalCounter() 
{--counterValue; valueCounter.textContent=counterValue;}



incrementButton.addEventListener("click", incrementGlobalCounter);
decrementButton.addEventListener("click", decrementGlobalCounter);


console.log(counterValue);