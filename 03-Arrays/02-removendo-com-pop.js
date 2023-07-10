const notas = [5, 7, 9, 10, 8];
console.log(`Suas notas são: ${notas}`);

// removendo notas novas
const notaRemovida = notas.pop();

// média das notas
let somaNotas = 0;
for (const nota of notas) {
  somaNotas += nota;
}

const media = somaNotas / notas.length;

console.log(`A nota removida foi: ${notaRemovida}`);
console.log(`Suas notas agora são: ${notas}`);
console.log(`Sua média é: ${media}`);