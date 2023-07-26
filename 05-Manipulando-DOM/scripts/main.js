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
    manipulaDados(controle, operacao);

    const peca = evento.target.dataset.peca;
    atualizaEstatistica(peca);
  });
});

function manipulaDados(controle, operacao) {
  const peca = controle.querySelector("[data-contador]");

  if (operacao === "+") {
    peca.value = parseInt(peca.value) + 1;
  } else if (operacao === "-") {
    peca.value = parseInt(peca.value) - 1;
  }
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
    estatistica.innerText = atributosEstatistica + atributosPeca[atributo];
  });
}
