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

// Retorna as chaves do objeto
const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

// Caso não tenha o campo enderecos:
if (!chavesDoObjeto.includes("enderecos")) {
  console.error("Erro. É necessário ter um endereço.");
}
