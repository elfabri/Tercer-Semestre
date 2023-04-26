let x = 10;

console.log(x.length); // undefined

// Objeto
let persona = {
    nombre: 'Carlos',
    apellido: 'A',
    email: 'a@a.a',
    edad: 3,
    nombreCompleto: function() {
        return this.nombre + " " + this.apellido;
    }
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona);
console.log(persona.nombreCompleto());

// Otra forma de crear objetos
let persona2 = new object();
persona2.nombre = "Juana";
persona2.direccion = "Asdf 4321";
persona2.telefono = "939393969";
console.log(persona.telefono);

// Acceso a las propiedades de los objetos
console.log(persona["apellido"]);

for(propiedad in persona) {
    console.log(propiedad); // nombre, apellido ...
    console.log(persona[propiedad]); // Carlos, A ...
}

// agregar o eliminar propiedades
//persona.apellido = "Beta"; // Cambio dinámico del valor de un objeto
persona.apellide = "U"; // Creación erronea de nueva propiedad
delete persona.apellide; // Eliminación del error anteriore
console.log(persona.apellido);
