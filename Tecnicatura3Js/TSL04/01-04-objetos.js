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
}

let padre = new Persona3("Laura", "Amp", "dsa@asd.com");
console.log(padre);

let madre = new Persona3("Camila", "Casp", "fdsa@asd.com");
console.log(madre);
