const listaControle = document.querySelectorAll("[data-controle]");

listaControle.forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
    const controle = evento.target.parentNode;
    const operacao = evento.target.dataset.controle;

    manipulaDados(controle, operacao);
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
