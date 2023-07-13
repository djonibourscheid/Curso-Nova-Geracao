const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const meuSet = new Set(nomes);
const nomesAtualizados = [...meuSet];
// ou
const nomesAtualizados2 = [...new Set(nomes)];

console.log(nomesAtualizados, nomesAtualizados2);