"use strict";

let n = 1;
let ran = Math.floor(Math.random()*100);
let intentos = 1;

alert("Adivine el número");

while (n !== ran) {
    n = parseInt(prompt("Ingrese un número"));

    console.log(ran);

    if (n > ran) {
        alert(`${n} es mayor`);
    } else if (n < ran) {
        alert(`${n} es menor`);
    }
    intentos++;
}

alert(`Lo adivinaste en ${intentos} intentos!`);
