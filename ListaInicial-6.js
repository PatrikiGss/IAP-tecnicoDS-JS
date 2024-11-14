var usuarioDefinido = "admin";
var senhaDefinida = "1234";

var username = window.prompt ("Digite o nome de usuário");
var senha = parseInt(prompt("Digite uma senha:"));

if (username === usuarioDefinido && senha === senhaDefinida ) {
    window.confirm("Login bem-sucedido");
}
 else 
        window.confirm ("Login não foi bem-sucedido, tente novamente");