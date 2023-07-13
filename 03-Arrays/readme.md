# JavaScript Arrays

Curso introdutório para manipulação de arrays em javascript.

## O que foi aprendido durante o curso?

### Aula 1: O que são arrays

- **Como utilizar os métodos `.push()` e `.pop()`**:
  Adicionar um novo item ao final ou remover o último item do array.

---

### Aula 2: Alterando arrays

- **Separar um array em partes com `slice()`**:
  Obter dois novos arrays a partir de um.
  
- **Remover e incluir novos elementos em um array com `splice()`**:
  Sendo que esse método permite remover elementos de qualquer posição do
  array. Além de poder incluir um novo elemento no local dos removidos.

- **Concatenar elementos em um único array com `concat()`**:
  Forma facilitada de juntar dois arrays.

- **Trabalhar com arrays de duas dimensões**. Uma lista guardando outra
  lista. Para acessar elementos das listas mais internas, devemos
  informar primeiro os índices das mais externas e depois os das mais
  internas, como por exemplo com `funcionarios[0][2]`.

---

### Aula 3: Laços de repetição

- **Utilizar os métodos `includes()` e `indexOf()`**:
  - O `includes()` retorna true ou false, dependendo se o valor passado como
  parâmetro está presente ou não no array.
  - O `indexOf()` retorna a posição no array do valor passado como parâmetro.
  Utilizamos esses dois métodos em conjunto para primeiro verificar se um aluno
  estava presente em uma lista, e depois obter sua posição para buscar sua nota
  em outra lista.

- **Desestruturar um array**.

- **Utilizar a estrutura `for`**.

- **Utilizar a estrutura `for of` e entender a diferença em relação ao `for`**:
  - O `for of` percorrer todos os elementos de um array, do início ao fim.
  - O `for` pode percorrer os elementos de diversas formas.

---

### Aula 4: Funções callback

- **Como utilizar o `forEach`**:
  O `forEach` recebe uma função callback que será executada para cada item do array.

- **Diferentes formas de utilizar funções callback**:
  Podemos utilizar funções anônimas (como arrow functions) diretamente como funções
  callback, ou então criar funções de forma externa e utilizá-las no parâmetro.

- **Como utilizar o `map`**:
  O `map` também aceita funções callback, assim como o `forEach`, e é adequado para
  quando queremos "reescrever" os valores de um array, sem modificar o array original.
  Um novo array é criado com os valores reescritos.

---

### Aula 5: Avançando em arrays

- **Como utilizar o `filter` e o `reduce`**:
  Utilizar o `filter` para criar um array filtrado a partir de um existente e
  o `reduce` para acumular valores de um array em um só.

- **Como clonar arrays com o *spread operator* `...`**:
  Entendemos o problema de referência do JavaScript ao tentar atribuir um array a um novo.
  Para resolver esse problema, utilizamos o *spread operator* para espalhar todos
  os valores de um array em um novo, realizando a clonagem com sucesso.

- **Como utilizar a estrutura `Set`**:
  Como criar um `Set` a partir de um array existente, a fim de remover todas as suas
  duplicatas. E utilizar *spread operator* para converter o `Set` de volta em um lista.

---

## Professor e aluno

Professor | Aluno
:---:     | :---:
<a href="https://github.com/antonio-evaldo" target="_blank" rel="noopener noreferrer"><img width="100" height="100" src="https://github.com/antonio-evaldo.png" alt="Foto do professor" title="Foto do professor"></a> | <a href="https://github.com/djonibourscheid" target="_blank" rel="noopener noreferrer"><img width="100" height="100" src="https://github.com/djonibourscheid.png" alt="Foto do aluno" title="Foto do aluno"></a>
Antônio Evaldo | Djoni Bourscheid
