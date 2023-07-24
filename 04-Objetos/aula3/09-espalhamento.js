const cliente = {
  nome: "Djoni",
  idade: 18,
  email: "email@email.com",
  telefone: ["51-912345678", "51-912344321"],
};

cliente.enderecos = [
  {
    rua: "R. Vai e volta",
    numero: 123,
    apartamento: false,
  },
];


// Supondo que esta função vem de outro lugar
function ligaParaCliente(telefoneComercial, telefoneResidencial) {
  console.log(`Ligando para telefgone Comercial: ${telefoneComercial}`);
  console.log(`Ligando para telefgone Residencial: ${telefoneResidencial}`);
}

ligaParaCliente(...cliente.telefone);



// Fazendo com objetos
// Espalhando os dados de um objeto
const encomenda = {
  destinatario: "José",
  ...cliente.enderecos[0],
};

console.log(encomenda);