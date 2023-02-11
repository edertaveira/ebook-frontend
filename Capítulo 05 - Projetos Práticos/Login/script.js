const username = document.getElementById("username");
const password = document.getElementById("password");
const submit = document.getElementById("submit");

submit.addEventListener("click", function(event) {
  event.preventDefault();
  if (username.value === "admin" && password.value === "123456") {
    alert("Login realizado com sucesso!");
  } else {
    alert("Usuário ou senha inválidos.");
  }
});
