const form = document.querySelector(".login-form");

form.addEventListener("submit", (event)=> {
event.preventDefault(); 

const {
    elements: {email, password}
} = event.currentTarget;

if (email.value === "" || password.value === "") 
return alert("All fields must be fIlled");
else {
  const resultObject = {
    resultEmail : event.currentTarget.elements.email.value,
    resultPassword : event.currentTarget.elements.password.value,
  }
  console.log(resultObject);
}

  event.currentTarget.reset();
  }
)

