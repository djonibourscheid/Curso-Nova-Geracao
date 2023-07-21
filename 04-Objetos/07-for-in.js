const cliente = {
  nome: "Djoni",
  idade: 18,
  email: "email@email.com",
  telefone: ["51912345678", "51912344321"],
};

cliente.enderecos = [
  {
    rua: "R. Vai e volta",
    numero: 123,
    apartamento: false,
  },
];

for (const chave in cliente) {
  let tipo = typeof cliente[chave];

  if (tipo != "object" && tipo != "function") {
    console.log(`A chave '${chave}' tem valor: '${cliente[chave]}'`);
  }
}
