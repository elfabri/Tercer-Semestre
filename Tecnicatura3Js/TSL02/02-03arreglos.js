// Creación de Arrays o arreglos
// let autos = new Array("Ferrari", "Renault", "BMW"); // Sintaxis vieja

const autos = ["Ferrari", "Renault", "BMW"];
console.log(autos);

// Recorremos los elementos de un arreglo
console.log(autos[0]);
console.log(autos[2]);

for (let i = 0; i < autos.length; i++) {
    console.log(i + ': ' + autos[i]);
}
