const formEl = document.getElementById("novoItem");
const listEl = document.querySelector(".lista");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const itemName = event.target.elements["nome"].value;
  const itemAmount = event.target.elements["quantidade"].value;

  criaElemento(itemName, itemAmount);
});


function criaElemento(name, amount) {
  const newItem = document.createElement("li");
  newItem.className = "item";

  const amountEl = document.createElement("strong");
  amountEl.innerText = amount;

  newItem.appendChild(amountEl);
  newItem.innerHTML += name;

  listEl.appendChild(newItem);
}
