package paquete2;

import paquete1.Clase1;

public class Clase3 extends Clase1 {
    public Clase3() {
        super("protectedd"); // Accedemos al const protected de la clase1
        this.atributoProtected = "Accedemos desde la clase hija"; 
        System.out.println("AtributoProtected = " + this.atributoProtected);
        this.atributoPublic = "es totalmente público";
    }
}
