const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;

  const email = formElements.email.value;
  const password = formElements.password.velue;

  const formData = {
    email,
    password,
  };
  console.log(formData);
  //   const {
  //     elements: { login, password },
  //   } = event.currentTarget;

  //   if (login.value === "" || password.value === "") {
  //     return (alert = `Please fill in all the fields!`);
  //   }

  //   console.log(`Login: ${login.value}, Password: ${password.value}`);
  //   event.currentTarget.reset();
}
