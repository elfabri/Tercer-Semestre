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

// Funciones de tipo self e invoking
(function(a, b) {
    console.log("Ejecutando la función: " + (a + b));
})(9, 6); // no tiene nombre, no se puede volver a llamar
// se manda a llamar a sí misma con los arg al final

console.log(typeof miFuncion); // tipo function, que es un objeto y tiene métodos

function miFuncionDos(a, b) {
    //console.log(arguments); // método arguments devuelve {0:5, 1:7} los valores con que fue llamada

    console.log(arguments.length); // cantidad de arg que recive la función, no tiene en cuenta 
    // los args declarados en la definición sino los arg con que fue llamada
    // no se puede usar arguments.length fuera de la función
}

miFuncionDos(5, 7);

// toString
var miFuncionTexto = miFuncionDos.toString();
console.log(miFuncionTexto); // transcribe la función a txt, no el retorno sino la declaración de
// la función en sí, utilizando cosas raras