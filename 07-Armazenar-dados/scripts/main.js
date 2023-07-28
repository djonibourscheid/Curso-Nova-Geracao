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
  const itemName = itemNameElem.value;
  const itemAmount = Number(itemAmountElem.value);

  // limpando os inputs
  itemNameElem.value = "";
  itemAmountElem.value = "";


  // funções
  // Se ela não existir, cria e salva
  if (!verifyIfExist(itemName, itemAmount)) {
    createNewItem(itemName, itemAmount);
    saveInList(itemName, itemAmount);
  }
});


// Funções
function showItems() {
  storage.forEach(element => { createNewItem(element.name, element.amount) });
}

function verifyIfExist(itemName, itemAmount) {
  for (const item of storage) {
    // Caso já tenha um item com mesmo nome, soma a quantidade e atualiza
    if (item.name == itemName) {
      item.amount += itemAmount;

      updateItems();

      alert("Este item já consta na lista. Foi adicionado a quantidade informada à anterior.");

      return true;
    };
  }
}

function createNewItem(name, amount) {
  const newItem = document.createElement("li");
  newItem.className = "item";

  const amountEl = document.createElement("strong");
  amountEl.innerText = amount;

  newItem.appendChild(amountEl);
  newItem.innerHTML += name;

  listElem.appendChild(newItem);
}

function saveInList(name, amount) {
  const newItemStorage = { name, amount };

  storage.push(newItemStorage);

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
