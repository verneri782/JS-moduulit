const count = Number(prompt("participants:"));
const names = [];

for (let i = 0; i < count; i++) {
  const name = prompt(`participant ${i + 1}:`);
  names.push(name);
}

names.sort((a, b) => a.localeCompare(b));

const list = document.getElementById("list");

for (let i = 0; i < names.length; i++) {
  const li = document.createElement("li");
  li.textContent = names[i];
  list.appendChild(li);
}