// Clase 06 - 15-05
class Persona {
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get apellido() {
        return this._apellido;
    }

    set apellido(apellido) {
        this._apellido = apellido;
    }
}

let persona1 = new Persona("Martina", "P");
// console.log(persona1);
console.log(persona1.nombre);
persona1.nombre = "Juana Clara";
console.log(persona1.nombre);
persona1.apellido = "M"
console.log(persona1.nombre + persona1.apellido);

let persona2 = new Persona("Carla", "L");
// console.log(persona2);
console.log(persona2.nombre);
persona2.nombre = "Romina";
console.log(persona2.nombre);
persona2.apellido = "S"
console.log(persona2.nombre + persona2.apellido);
