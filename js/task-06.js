const textInput = document.querySelector("input");
textInput.addEventListener("blur", () => 
{
    
    if (textInput.value.length === Number(textInput.dataset.length)) 
    {textInput.classList.add("valid");
    textInput.classList.remove("invalid");}
      else 
    {textInput.classList.add("invalid");
    textInput.classList.remove("valid");}
  });
// console.log(textInput.dataset.length);
//   console.log(textInput.id);
// console.log(textInput.data-length);
// console.log(textInput.placeholder);
console.log(textInput.dataset);