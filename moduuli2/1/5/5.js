const numbers = [];

while (true) {
  const num = Number(prompt("numero:"));

  if (numbers.includes(num)) {
    alert(`numero ${num} on jo annettu.`);
    break;
  }

  numbers.push(num);
}

numbers.sort((a, b) => a - b);

console.log("numerot:");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}