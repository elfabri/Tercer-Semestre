miFuncion(8, 2) // hoisting - llamamos antes de declarar

function miFuncion(a, b) {
    // console.log("Sumamos: " + (a + b));
    return a + b;
}

// llamando función
miFuncion(5, 4);

let resultado = miFuncion(6, 7);
console.log(resultado);
