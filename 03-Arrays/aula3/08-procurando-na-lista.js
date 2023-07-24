// Crie uma função que recebe como argumento o nome de um aluno.
// Verifique se o aluno está presente na lista e retorne a média final que se encontra no mesmo índice.
// Caso o nome do aluno não esteja na lista, retorne uma mensagem indicando que o aluno não foi encontrado.


const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];


function mostrarNomeENota(aluno) {
  // Desestruturando
  const [alunos, medias] = listaDeAlunosEMedias;

  // includes() retorna true ou false
  if (!alunos.includes(aluno)) {
    return console.log("Aluno não encontrado.");
  }

  // Caso seja encontrado, pega o indice do aluno para achar a media
  const indice = alunos.indexOf(aluno);
  const mediaAluno = medias[indice];

  console.log(`${aluno} encontrado na lista, sua média é ${mediaAluno}`);
}