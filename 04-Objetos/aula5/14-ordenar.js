const clientes = require("./clientes.json");

function ordenar(lista, chave) {
  const resultado = lista.sort((a, b) => {
    if (a[chave] < b[chave]) {
      return -1;
    } else if (a[chave] > b[chave]) {
      return 1;
    } else {
      return 0;
    }
  });

  return resultado;
}

console.log(ordenar(clientes, "nome"));
