const numerot = [];

let num = Number(prompt("luku:"));

while (num !== 0) {
  numerot.push(num);
  num = Number(prompt("luku:"));
}
numerot.sort((a, b) => b - a);
console.log("Numbers from largest to smallest:");
for (let i = 0; i < numerot.length; i++) {
  console.log(numerot[i]);
}

document.getElementById("result").textContent = "Sorted: " + numerot.join(" ");