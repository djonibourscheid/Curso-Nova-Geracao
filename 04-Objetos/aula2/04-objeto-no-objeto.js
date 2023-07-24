const cliente = {
  nome: "Djoni",
  idade: 18,
  email: "email@email.com",
  telefone: ["51912345678", "51912344321"],
};

cliente.endereco = {
  rua: "R. Vai e volta",
  numero: 123,
  apartamento: false,
};

console.log(cliente);
console.log(cliente.endereco);
console.log(cliente["endereco"]);
