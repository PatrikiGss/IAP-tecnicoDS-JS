const catalogo = {
    "001": "cachorro-quente",
    "002": "xis",
    "003": "hambúrguer",
    "004": "refrigerante",
    "005": "suco"
};

let pedidos = [];
let codigo;

do {
    codigo = prompt("Catálogo de Lanches:\n001 - cachorro-quente\n002 - xis\n003 - hambúrguer\n004 - refrigerante\n005 - suco\n0 - sair\n\nDigite o código do produto desejado:");

    if (codigo in catalogo) {
        pedidos.push(catalogo[codigo]);
        alert("Produto adicionado: " + catalogo[codigo]);
    } else if (codigo !== "0") {
        alert("Código inválido. Tente novamente.");
    }
} while (codigo !== "0");

if (pedidos.length > 0) {
    alert("Você pediu: " + pedidos.join("-"));
} else {
    alert("Nenhum produto foi pedido.");
}