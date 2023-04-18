"use strict";

let n = 1;

alert("Ejercicio 3: Leer números hasta que se introduzca un cero para cada uno indicar si es par o impar");

while (n !== 0) {
    n = parseInt(prompt("Ingrese un número"));

    if (n % 2 == 0 && n != 0) {
        alert(`${n} es un número par`);
    } else if (n % 2 != 0) {
        alert(`${n} es un número impar`);
    }
}
