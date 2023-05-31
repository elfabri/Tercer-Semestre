// Clase 06 - 15-05

// let persona3 = new Persona("Carla", "P"); // Error - no se puede acceder
                                             // a una clase antes de su definición

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

    nombreCompleto() {
        return this._nombre + ' ' + this._apellido;
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
