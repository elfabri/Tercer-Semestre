"use strict";

let n = 1;

alert("Ejercicio 2 - Leer un número e indicar si es positivo o negativo. El proceso se repetira hasta que se introduzca un cero 0");

while (n !== 0) {
    n = parseInt(prompt("Ingrese un número"));

    if (n > 0) {
        alert(`${n} es un número positivo`);
    } else if (n < 0) {
        alert(`${n} es un número negativo`);
    }
}
