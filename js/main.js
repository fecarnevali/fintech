document.addEventListener("DOMContentLoaded", function() {
  const criarForm = document.getElementById("criarForm"); 
  criarForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Obter valores dos campos
    const nome = document.getElementById("nome").value; 
    const email = document.getElementById("criarEmail").value; // Use o ID correto
    const cpf = document.getElementById("cpf").value;
    const senha = document.getElementById("criarSenha").value; // Use o ID correto

    // Validação de entrada (adicionar validações conforme necessário)
    if (!nome || !email || !cpf || !senha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Enviar dados para o PHP usando AJAX
    const xhr = new XMLHttpRequest();
    const url = "conexao.php"; // O URL do seu script PHP
    const params = `nome=${nome}&email=${email}&cpf=${cpf}&senha=${senha}`;
    
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          // Resposta do servidor (pode conter uma mensagem de sucesso ou erro)
          console.log(xhr.responseText);
          // Exibir mensagem de sucesso na página (substitua pelo seu método preferido)
          alert("Registro bem-sucedido!");
          // Limpar campos após o envio (opcional)
          criarForm.reset();
        } else {
          // Tratamento de erro - exibir uma mensagem de erro ao usuário
          alert("Erro no registro. Tente novamente mais tarde.");
        }
      }
    };

    xhr.send(params);
  });

  // Adicionando um ouvinte de evento ao botão "Entrar" (redirecionando para a página de login)
  const btnLogin = document.getElementById("login");
  btnLogin.addEventListener("click", function() {
    // Redirecionar para a página de login (substitua "login.html" pelo URL correto)
    window.location.href = "conta.html";
  });
});
