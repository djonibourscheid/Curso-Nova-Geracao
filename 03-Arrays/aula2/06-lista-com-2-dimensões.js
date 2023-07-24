const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

console.log(`Lista de alunos: ${listaDeAlunosEMedias[0]}`);
console.log(`Lista de médias: ${listaDeAlunosEMedias[1]}`);
console.log(`Lista de alunos e média: ${listaDeAlunosEMedias}`);

console.log(`
Primeiro aluno e terceira média: ${listaDeAlunosEMedias[0][0]},
${listaDeAlunosEMedias[1][2]}
`);