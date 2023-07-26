const listaControle = document.querySelectorAll("[data-controle]");
const listaEstatistica = document.querySelectorAll("[data-estatistica]");

const pecas = {
  bracos: {
    forca: 29,
    poder: 35,
    energia: -21,
    velocidade: -5,
  },
  blindagem: {
    forca: 41,
    poder: 20,
    energia: 0,
    velocidade: -20,
  },
  nucleos: {
    forca: 0,
    poder: 7,
    energia: 48,
    velocidade: -24,
  },
  pernas: {
    forca: 27,
    poder: 21,
    energia: -32,
    velocidade: 42,
  },
  foguetes: {
    forca: 0,
    poder: 28,
    energia: 0,
    velocidade: -2,
  },
};

listaControle.forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
    const controle = evento.target.parentNode;
    const operacao = evento.target.dataset.controle;

    if (manipulaDados(controle, operacao)) {
      const peca = evento.target.dataset.peca;
      atualizaEstatistica(peca);
    }
  });
});

function manipulaDados(controle, operacao) {
  const peca = controle.querySelector("[data-contador]");

  if (operacao === "+") {
    const conta = parseInt(peca.value) + 1;

    // Caso um atributo fique abaixo de 0, cancela a ação.
    if (conta < 0) {
      alert(`O valor está abaixo de 0.`);
      peca.value = 0;

      return false;
    }

    peca.value = conta;
  } else if (operacao === "-") {
    const conta = parseInt(peca.value) - 1;

    // Caso um atributo fique abaixo de 0, cancela a ação.
    if (conta < 0) {
      alert(`O valor chegou no mínimo.`);
      peca.value = 0;

      return false;
    }

    peca.value = conta;
  }

  return true;
}

function atualizaEstatistica(peca) {
  // Atributos da peça mexida
  const atributosPeca = pecas[peca];

  listaEstatistica.forEach((estatistica) => {
    // Qual atributo do robô será mexido
    const atributo = estatistica.dataset.estatistica;

    // Qual o valor deste atributo
    const atributosEstatistica = parseInt(estatistica.textContent);

    // Faz a soma dos atributos e atualiza o html
    const conta = atributosEstatistica + atributosPeca[atributo];
    estatistica.innerText = conta;
  });
}
