"use strict";

let n = 0;
let lista = [];

alert("Ejercicio 4: Pedir números hasta que se teclee uno negativo, y mostrar cuántos números se han introducido.");

while (n >= 0) {
    n = parseInt(prompt("Ingrese un número"));

    if (n >= 0 && n !== NaN) {
        lista.push(n);
    }
}

alert(`Números ingresados: ${lista}`);
