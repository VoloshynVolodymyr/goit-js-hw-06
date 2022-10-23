const fieldOfInputDates = document.querySelector("#name-input");
const textGreeting = document.querySelector("#name-output");

fieldOfInputDates.addEventListener("input", (event) => {
    textGreeting.textContent = event.currentTarget.value;
    if (textGreeting.textContent === "") textGreeting.textContent = "Anonimus";
});