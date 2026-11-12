const luku1 = parseInt(prompt("Luku 1"));
const luku2 = parseInt(prompt("Luku 2"));
const luku3 = parseInt(prompt("Luku 3"));

const summa = (luku1 + luku2 + luku3)
const kerto = (luku1 * luku2 * luku3)
const keski = (summa / 3)
document.querySelector('#target').innerHTML = 
    `Summa: ${summa}<br>Tulo: ${kerto}<br>Keskiarvo: ${keski}`;