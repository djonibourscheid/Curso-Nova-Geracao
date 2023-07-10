const notas = [5, 7, 9];

// adicionar notas novas
notas.push(10, 5);


let somaNotas = 0;
for (const nota of notas) {
  somaNotas += nota;
}

const media = somaNotas / notas.length;

console.log(`Suas notas são: ${notas}`);
console.log(`Sua média é: ${media}`);