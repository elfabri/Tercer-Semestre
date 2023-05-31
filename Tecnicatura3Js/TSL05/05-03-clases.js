// Clase 06 - 15-05

// let persona3 = new Persona("Carla", "P"); // Error - no se puede acceder
                                             // a una clase antes de su definición

class Persona {

    static contOP = 0;
    // email = "email-default";

    static get MAX_OBJ() { // este método simula una const
        return 5;
    }

    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
        if (Persona.contOP < Persona.MAX_OBJ) {
            this.idPersona = ++Persona.contOP;
        } else {
            console.log("Superado cantidad de objetos permitidos");
        }
        // console.log("Se incrementa el contador: " + Persona.contOP);
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

    nombreCompleto() {
        return this.idPersona + ', ' + this._nombre + ' ' + this._apellido;
    }

    // Sobreescribiendo método de la clase padre (object)
    toString() {
        // Se aplica Polimorfismo
        // El método que se ejecuta depende si es una referencia
        // de tipo padre o hija
        return this.nombreCompleto();
    }

    static saludar() {
        console.log("Saludos desde este método static");
    }

    static saludar2(persona) {
        console.log(persona.nombre + ' ' + persona.apellido);
    }
}

class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido);
        this._departamento = departamento;
    }

    get departamento() {
        return this._departamento;
    }

    set departamento(departamento) {
        this._departamento = departamento;
    }

    nombreCompleto() {
        return super.nombreCompleto() + ", " + this._departamento;
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

let empleado1 = new Empleado("María", "E", "Sistemas");
console.log(empleado1);
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());
console.log(persona1.toString());

// persona1.saludar(); // un obj no puede acceder a un método static
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

// console.log(persona1.contOP); // devuelve undefined a pesar de estar definido
console.log(Persona.contOP);
console.log(Empleado.contOP);

console.log(persona1.email);
console.log(empleado1.email);
// console.log(Persona.email); // undefined por ser un atributo no estatico
console.log(persona1.toString());
console.log(persona2.toString());
console.log(empleado1.toString());
console.log(Persona.contOP);

let persona3 = new Persona("Carla", "Carlita");
console.log(persona3.toString());
console.log(Persona.contOP);

console.log(Persona.MAX_OBJ);
// Persona.MAX_OBJ = 10; // no se puede modificar
console.log(Persona.MAX_OBJ);

let persona4 = new Persona("Franco", "Blanco");
console.log(persona4.toString());
let persona5 = new Persona("Franca", "Blanca");
console.log(persona5.toString());
