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

// Funciones flecha 
const sumarFuncionFlecha = (a, b) => a + b;
resultado = sumarFuncionFlecha(3, 7);
console.log(resultado);

// en js, la cantidad de parámetros puede ser menor a los argumentos
// Función tipo expresión
let sumar = function(a = 4, b = 8) {
    console.log(arguments[0]); // ignora los valores por defecto
    console.log(arguments[1]);
    return a + b + arguments[2];
}

resultado = sumar(3, 2, 9);
console.log(resultado);

// cant de args variables y además, usando hoisting
let respuesta = sumarTodo(5, 5, 5, 5, 5, 5, 5);
console.log(respuesta);

function sumarTodo() {
    let suma = 0;
    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i];
    }
    return suma;
}
