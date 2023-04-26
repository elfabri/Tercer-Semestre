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
