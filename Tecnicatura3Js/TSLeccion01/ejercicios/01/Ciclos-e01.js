"use strict";

let n = 0;

alert("Ejercicio 1 - Leer un número y devolver su cuadrado, repetir hasta que se introduzca un número negativo");

while (n >= 0) {

    let n = parseInt(prompt("Ingrese un número"));

    if (n < 0) {
        break;
    } else {
        n *= n;
        alert(n);
    }
}
