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

// Modificamos los elementos del arreglo
autos[1] = "Volvo";
console.log(autos[1]);

// Agregamos nuevos valores al arreglo
autos.push("Audi");
console.log(autos);

// Otras formas de agregar elementos al arreglo
autos[autos.length] = "Porche";
console.log(autos);

// Tercera forma de agregar elementos tenendo cuidado
autos[6] = "Renault";
console.log(autos); // No tira error sino que rellena con undefined
