<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Soft Bank</title>
  <link rel="stylesheet" type="text/css" href="css/index.css">
  <style>
    body {
      background-image: url('img/fundo.png');
      background-size: cover;
      background-repeat: no-repeat;
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
    }
  </style>
</head>
<body>
  <header>

  </header>
  <main>
    <form id="loginForm">
      <label for="loginEmail">Email</label>
      <input type="email" id="loginEmail" name="email" required>
      <label for="loginSenha">Senha</label>
      <input type="password" id="loginSenha" name="senha" required>
      <button type="submit" id="login">Login</button>
    </form>
  </main>
  <div class="container">
    <form action="conexao.php" method="post" id="criarForm">
      <div class="input-container">
        <label for="nome">Nome</label>
        <input type="text" id="nome" name="nome" required>
      </div>
      <div class="input-container">
        <label for="criarEmail">Email</label>
        <input type="email" id="criarEmail" name="email" required>
      </div>
      <div class="input-container">
        <label for="cpf">CPF</label>
        <input type="text" id="cpf" name="cpf" required>
      </div>
      <div class="input-container">
        <label for="criarSenha">Senha</label>
        <input type="password" id="criarSenha" name="senha" required>
      </div>
      <button type="submit" id="btncriar">Criar Conta</button>
    </form>
  </div>
  <footer>
    <p>&copy; 2023 Soft Bank. Todos os direitos reservados.</p>
  </footer> 

  <script src="js/main.js"></script>
</body>
</html>
