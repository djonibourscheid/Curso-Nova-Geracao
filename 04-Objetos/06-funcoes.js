const cliente = {
  nome: "Djoni",
  idade: 18,
  email: "email@email.com",
  telefone: ["51912345678", "51912344321"],
  saldo: 200,
  efetuaPagamento: function (valor) {
    if (valor > this.saldo) {
      console.log(
        `Sua compra de ${valor} não pôde ser concluída. Seu saldo é de ${this.saldo} `
      );
    } else {
      this.saldo -= valor;
      console.log(`Pagamento realizado. Saldo atual: ${this.saldo}`);
    }
  },
};

cliente.efetuaPagamento(300);
cliente.efetuaPagamento(180);
