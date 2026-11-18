const numerot = [];

for (let i = 0; i < 5; i++) {
  const num = Number(prompt(`Numero ${i + 1}:`));
  numerot.push(num);
}

let text = "";
for (let i = numerot.length - 1; i >= 0; i--) {
  console.log(numerot[i]);
  text += numerot[i] + " ";
}

document.getElementById("result").textContent = "Reversed: " + text;