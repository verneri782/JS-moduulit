const vuosi = parseInt(prompt("vuosi:"));

let teksti = "";

if ((vuosi % 4 === 0 && vuosi % 100 !== 0) || (vuosi % 400 === 0)) {
    viesti = `${vuosi} on karkausvuosi.`;
} else {
    viesti = `${vuosi} on karkausvuosi.`;
}

document.getElementById("result").innerHTML = viesti;
