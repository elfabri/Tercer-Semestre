// while
let contador = 0;

while (contador < 3) {
    console.log(contador);
    contador++;
}
console.log("Fin del ciclo while");

// do while
let conteo = 0;

do {
    console.log(conteo);
    conteo++;
} while (conteo < 3);
console.log("Fin del ciclo do while");

// for
for (let contando = 0; contando < 3; contando++) {
    console.log(contando);
}
console.log("Fin del ciclo");

// break
for (let contando = 0; contando <= 10; contando++) {
    if (contando % 2 == 0) {
        console.log(contando);
        break;
    }
}
console.log("Termina el ciclo al encontrar el primer número par");

// continue y labels
inicio:
for (let contando = 0; contando <= 10; contando++) {
    if (contando % 2 !== 0) {
        break inicio;
    }
    console.log(contando);
}
console.log("Termina el ciclo");
