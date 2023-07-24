// Imprima o índice e a lista com os seguintes números:

const numeros = [100, 200, 300, 400, 500, 600];

for (let index = 0; index < numeros.length; index++) {
  const [numero, posicao] = [numeros[index], index];

  console.log(`O número ${numero} está na posição ${posicao}`);
}