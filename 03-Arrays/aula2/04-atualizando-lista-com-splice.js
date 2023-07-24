const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

console.log(`A lista de nomes antiga era: ${nomes}`);

// Tirando Ana e Caio, adicionando Rodrigo
nomes.splice(1, 2, "Rodrigo");

console.log(`A lista de nomes atual é: ${nomes}`);