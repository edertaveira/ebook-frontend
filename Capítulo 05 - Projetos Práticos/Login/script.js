const username = document.getElementById("username");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
const error = document.getElementById("error");

submit.addEventListener("click", function(event) {
  event.preventDefault();
  error.innerHTML = "";
  if (!username.value || !password.value) {
    error.innerHTML = "Todos os campos são obrigatórios";
    return;
  }

  if (username.value === "admin" && password.value === "123456") {
    alert("Login realizado com sucesso!");
  } else {
    error.innerHTML = "Usuário ou senha inválidos.";
  }
});
