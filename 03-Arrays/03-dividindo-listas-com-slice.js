const alunos = [
  'João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'
];

const turma1 = alunos.slice(0, alunos.length / 2);
const turma2 = alunos.slice(alunos.length / 2);

console.log(`A lista de alunos é: ${alunos}`);
console.log(`A turma 1 é: ${turma1}`);
console.log(`A turma 2 é: ${turma2}`);