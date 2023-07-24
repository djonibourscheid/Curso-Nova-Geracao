const notas = [10, 6.5, 8, 7.5];
let somaNotas = 0;

for (let index = 0; index < notas.length; index++) {
  somaNotas += notas[index];
}

const media = somaNotas / notas.length;

console.log(`A soma das notas '${notas}' é ${somaNotas} e a média é ${media}`);