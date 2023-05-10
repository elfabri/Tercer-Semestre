let x = 10;

console.log(x.length); // undefined

console.log(" Tipaso");

// Objeto
let persona = {
    nombre: 'Carlos',
    apellido: 'A',
    email: 'a@a.a',
    edad: 2,
    idioma: "ES",
    get lang() {
        return this.idioma.toUpperCase();
    },
    set lang(lang) {
        this.idioma = lang.toUpperCase();
    },
    nombreCompleto: function() {
        return this.nombre + " " + this.apellido;
    },
    get nombreEdad() {
        return "Nombre: " + this.nombre + ", Edad: " + this.edad;
    }
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona);
console.log(persona.nombreCompleto());

console.log("Ejecutando con un obj");
// Otra forma de crear objetos
let persona2 = new Object();
persona2.nombre = "Juana";
persona2.direccion = "Asdf 4321";
persona2.telefono = "939393969";
console.log(persona2.telefono);

// Acceso a las propiedades de los objetos
console.log(persona["apellido"]);

console.log("Usamos el for in");

for(propiedad in persona) {
    console.log(propiedad); // nombre, apellido ...
    console.log(persona[propiedad]); // Carlos, A ...
}

console.log("cambiamos y elimamos un error");

// agregar o eliminar propiedades
//persona.apellido = "Beta"; // Cambio dinámico del valor de un objeto
persona.apellide = "U"; // Creación erronea de nueva propiedad
delete persona.apellide; // Eliminación del error anteriore
console.log(persona);

// Distintas formas de imprimir un objeto
// Número 1: concatenar propiedades
console.log("Distintas formas de imprimir un objeto: 1");
console.log(persona.nombre + ", " + persona.apellido);

// Número 2: for in
console.log("Distintas formas de imprimir un objeto: 2");
for (propiedad in persona) {
    console.log(persona[propiedad]);
}

// Número 3: Object.value()
console.log("Distintas formas de imprimir un objeto: 3");
let personaArray = Object.values(persona);
console.log(personaArray);

// Número 4: JSON.stringify
console.log("Distintas formas de imprimir un objeto: 4");
let personaString = JSON.stringify(persona);
console.log(personaString);

// Clase 05 - GET
console.log("Comenzamos a utilizar el método get");
console.log(persona.nombreEdad);

console.log("Comenzamos con el método get para idiomas");
persona.lang = "en";
console.log(persona.lang);

function Persona3(nombre, apellido, email) { // construtor
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;

    this.nombreCompleto = function() {
        return this.nombre + ' ' + this.apellido;
    }
}

let padre = new Persona3("Laura", "Amp", "dsa@asd.com");
padre.nomre = "Emilia";
padre.telefono = "42069"; // Solo para objeto padre
console.log(padre);

console.log(padre.nombreCompleto());

let madre = new Persona3("Camila", "Casp", "fdsa@asd.com");
console.log(madre);
console.log(madre.nombreCompleto());

// Diferentes formas de crear objetos
// Caso Objeto 1
let miObjeto = new Object();
// Caso Objeto 2
let miObjeto2 = {}; // Recomendada

// Caso String 1
let miCadena1 = new String("Hola");
// Caso String 2
let miCadena2 = "Hola"; // Recomendada

// Caso con números 1
let miNumero = new Number(1);
// Caso con números 2
let miNumero2 = 1; // Recomendada

// Caso Boolean 1
let miB = new Boolean(false);
// Caso Boolean 2
let miB2 = false; // Recomendada

// Caso Arreglos 1
let miA = new Array();
// Caso Arreglos 2
let miA2 = []; // Recomendada

// Caso Function 1
let miF1 = new function(){};
// Caso Function 2
let miF2 = function(){}; // Recomendada

// Uso de prototype
// da una nueva propiedad a todos los objetos creados
Persona3.prototype.telefono = "69420"; // valor por defecto
console.log(padre.telefono); // predomina el número asignado a padre
console.log(madre.telefono); // predomina el número por defecto
madre.telefono = "542069420";
console.log(madre.telefono); // predomina el número asignado anteriormente

// Uso de call
// usamos métodos definidos en otros objetos, en otros objetos
let persona4 = {
    nombre: "Juana",
    apellido: "Anauj",
    nombreCompleto2: function(titulo, telefono) {
        return titulo + ": " + this.nombre + ' ' + this.apellido + ' ' + telefono;
    }
}

let persona5 = {
    nombre: "Carla",
    apellido: "Alrac"
}

console.log(persona4.nombreCompleto2("Lic.", "2424242"));
console.log(persona4.nombreCompleto2.call(persona5, "Ing.", "1313131313"));
