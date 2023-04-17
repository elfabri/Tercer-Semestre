package mundoPc;

import ar.com.system2023.mundopc.*;

public class MundoPc {
    public static void main(String[] args) {
        Monitor monitorA = new Monitor("HP",13);
        Teclado tecladoA = new Teclado("Bluetooth", "HP");
        Raton ratonA = new Raton("Bluetooth","HP");
        Computadora computadoraA =new Computadora("Computadora HP", monitorA, tecladoA, ratonA);
        
        //Creamos otros objetos con distintas marcas
        Monitor monitorB = new Monitor("LG",13);   
        Teclado tecladoB = new Teclado("Bluetooth", "LG");
        Raton ratonB = new Raton("Bluetooth","LG");
        Computadora computadoraB =new Computadora("Computadora LG", monitorB, tecladoB, ratonB);
        
        Monitor monitorC = new Monitor("SM",13);   
        Teclado tecladoC = new Teclado("Bluetooth", "SM");
        Raton ratonC = new Raton("Bluetooth","SM");
        Computadora computadoraC =new Computadora("Computadora SM", monitorC, tecladoC, ratonC);

        //Creamos otros objetos con distintas marcas
        Computadora computadoraD = new Computadora("PC diferente marcas", monitorA, tecladoB, ratonA);
        Computadora computadoraE = new Computadora("PC diferente marcas", monitorA, tecladoB, ratonC);
        Computadora computadoraF = new Computadora("PC diferente marcas", monitorB, tecladoC, ratonA);
        Computadora computadoraG = new Computadora("PC diferente marcas", monitorC, tecladoC, ratonC);
        Computadora computadoraH = new Computadora("PC diferente marcas", monitorC, tecladoA, ratonA);
        Computadora computadoraI = new Computadora("PC diferente marcas", monitorB, tecladoA, ratonB);
        Computadora computadoraJ = new Computadora("PC diferente marcas", monitorA, tecladoB, ratonA);
        Computadora computadoraK = new Computadora("PC diferente marcas", monitorB, tecladoC, ratonB);
        
        Orden orden1 = new Orden(); //iniciamos el arreglo vacio
        Orden orden2 = new Orden(); //Una nueva lista para el objeto orden2
        
        orden1.agregarComputadora(computadoraA);
        orden1.agregarComputadora(computadoraB);
        orden1.agregarComputadora(computadoraC);
        orden1.mostrarOrden();
        
        orden2.agregarComputadora(computadoraC);
        orden2.agregarComputadora(computadoraB);
        orden2.agregarComputadora(computadoraA);
        orden2.agregarComputadora(computadoraD);
        orden2.agregarComputadora(computadoraE);
        orden2.agregarComputadora(computadoraF);
        orden2.agregarComputadora(computadoraG);
        orden2.agregarComputadora(computadoraH);
        orden2.agregarComputadora(computadoraI);
        orden2.agregarComputadora(computadoraJ); // 10
        orden2.mostrarOrden();
        orden2.agregarComputadora(computadoraK); // 11 - Limite superado
        orden2.mostrarOrden(); // computadoraK no se agrega y nos muestra lo mismo
    }
    
    // Tarea:
    // Crear mas objetos de tipo computadora con todos sus elemenos
    // Completar una lista con el objeto orden1 que llegue a los 10 elemntos 
    // Probar de este manera los metodos al maximo rendimiento
    
}
