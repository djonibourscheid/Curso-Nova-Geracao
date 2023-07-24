const dados = require("./cliente.json");

// Lendo
console.log(dados);
console.log(typeof dados); // object

// Transformando em string
const clienteString = JSON.stringify(dados);
console.log(clienteString);
console.log(typeof clienteString); // string

// Transformando em JSON
const clienteObjeto = JSON.parse(clienteString);
console.log(clienteObjeto);
console.log(typeof clienteObjeto); // object
