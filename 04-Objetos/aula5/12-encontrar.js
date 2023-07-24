const clientes = require("./clientes.json");

function encontrar(lista, chave, valor) {
  return lista.find((item) => item[chave].includes(valor));
}

console.log(encontrar(clientes, "nome", "Dorothea"));
console.log(encontrar(clientes, "telefone", "51993301028"));
