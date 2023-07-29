// .parse() passe de string para JSON
const storage = JSON.parse(localStorage.getItem("toDoList")) || [];

const formElem = document.getElementById("novoItem");
const listElem = document.querySelector(".lista");

// Exibir itens salvos na tela
showItems();

formElem.addEventListener("submit", (event) => {
  event.preventDefault();

  // pegando os elementos html
  const itemNameElem = event.target.elements["nome"];
  const itemAmountElem = event.target.elements["quantidade"];

  // pegando os valores
  const item = {
    name: itemNameElem.value,
    amount: Number(itemAmountElem.value)
  };

  // limpando os inputs
  itemNameElem.value = "";
  itemAmountElem.value = "";


  // funções
  // Se ela não existir, cria e salva
  if (!verifyIfExist(item)) {
    createNewItem(item);
    saveInList(item);
  }
});


// Funções
function showItems() {
  storage.forEach(element => { createNewItem(element) });
}

function verifyIfExist(item) {
  storage.find(element => {
    // Caso já tenha um item com mesmo nome, soma a quantidade e atualiza
    if (element.name == item.name) {
      element.amount += item.amount;

      updateItems();

      alert("Este item já consta na lista. Foi adicionado a quantidade informada à anterior.");

      return true;
    }
  });
}

function createNewItem(item) {
  const newItem = document.createElement("li");
  newItem.className = "item";

  const amountEl = document.createElement("strong");
  amountEl.innerText = item.amount;

  newItem.appendChild(amountEl);
  newItem.innerHTML += ` ${item.name}`;
  newItem.setAttribute("title", "Remover item");

  // Caso clicado, o item é deletado
  newItem.addEventListener("click", () => deleteItem(item));

  listElem.appendChild(newItem);
}

function deleteItem(item) {
  const indexItem = storage.indexOf(item);
  storage.splice(indexItem, 1);

  updateItems();
}

function saveInList(item) {
  storage.push(item);

  // .stringfy() passa de json para string
  localStorage.setItem("toDoList", JSON.stringify(storage));
}

function updateItems() {
  localStorage.setItem("toDoList", JSON.stringify(storage));

  // Remove todos os itens da lista
  listElem.innerHTML = "";

  // Mostra itens atualizados
  showItems();
}
