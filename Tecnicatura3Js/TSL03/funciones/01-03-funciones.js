miFuncion(8, 2) // hoisting - llamamos antes de declarar

function miFuncion(a, b) {
    // console.log("Sumamos: " + (a + b));
    return a + b;
}

// llamando función
miFuncion(5, 4);

let resultado = miFuncion(6, 7);
console.log(resultado);

// función de tipo expresión o anónima
let x = function(a, b) { return a + b };
resultado = x(5, 6);
console.log(resultado);
