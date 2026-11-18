const dogs = [];

for (let i = 0; i < 6; i++) {
  const name = prompt(`dog ${i + 1}:`);
  dogs.push(name);
}

dogs.sort((a, b) => b.localeCompare(a));

const list = document.getElementById("list");

for (let i = 0; i < dogs.length; i++) {
  const li = document.createElement("li");
  li.textContent = dogs[i];
  list.appendChild(li);
}