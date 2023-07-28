// .parse() passe de string para JSON
const storage = JSON.parse(localStorage.getItem("toDoList")) || [];

const formEl = document.getElementById("novoItem");
const listEl = document.querySelector(".lista");

formEl.addEventListener("submit", (event) => {
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
  createNewItem(itemName, itemAmount);
  saveInList(itemName, itemAmount);
});

// Funções
function createNewItem(name, amount) {
  const newItem = document.createElement("li");
  newItem.className = "item";

  const amountEl = document.createElement("strong");
  amountEl.innerText = amount;

  newItem.appendChild(amountEl);
  newItem.innerHTML += name;

  return listEl.appendChild(newItem);
}

function saveInList(name, amount) {
  const newItemStorage = { name, amount };

  storage.push(newItemStorage);

  // .stringfy() passa de json para string
  localStorage.setItem("toDoList", JSON.stringify(storage));
}
