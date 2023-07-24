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

cliente.enderecos.push({
  rua: "Av. 1",
  numero: 123,
  apartamento: true,
});

const listaApenasApartamentos = cliente.enderecos.filter(
  (endereco) => endereco.apartamento === true
);

console.log(listaApenasApartamentos);
