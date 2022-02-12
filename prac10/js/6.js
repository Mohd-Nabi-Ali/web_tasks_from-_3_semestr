const button1 = document.querySelector("#button1");
const emailField = document.querySelector("#email");
const passwordField = document.querySelector("#password");
const formContainer = document.querySelector("#container1");

const messages = document.querySelectorAll(".message");

button1.addEventListener("click", () => {
  const email = emailField.value;
  const password = passwordField.value;

  if (email === "") {
    messages[0].textContent = "Это поле не может быть пустым";
    formContainer.classList.add("incorrect");
  }
  else {
    messages[0].textContent = "";
    formContainer.classList.remove("incorrect");
  }

  if (password === "") {
    messages[1].textContent = "Это поле не может быть пустым";
    formContainer.classList.add("incorrect");
  }
  else {
    messages[1].textContent = "";
    formContainer.classList.remove("incorrect");
  }

  if (!email.includes("@") || !email.includes(".")) {
    messages[0].textContent = "Введите правильный адрес";
    formContainer.classList.add("incorrect");
    return;
  }

  messages[0].textContent = "";
  formContainer.classList.remove("incorrect");

  window.location = "https://www.google.ru/";
});
