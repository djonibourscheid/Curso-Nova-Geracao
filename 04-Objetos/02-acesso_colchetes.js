const cliente = {
  nome: "Djoni",
  idade: 18,
  cpf: "12345678900",
  email: "email@email.com",
}

console.log(`O nome da do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`);
console.log(`Os primeiros digitos do cpf sao ${cliente["cpf"].substring(0, 3)}.`);


const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach(chave => {
  console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
})