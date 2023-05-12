package test;

import domain.*;

public class TestSobreescritura {
    public static void main(String[] args) {
        Empleado empleado1 = new Empleado("Juanita", 10000);
        imprimir(empleado1);
        // System.out.println("empleado1: " + empleado1.obtenerDetalles());

        empleado1 = new Gerente("Josefína", 5000, "Sistemas");
        imprimir(empleado1); // Entra como tipo empleado gracias a la herencia con la clase Empleado
        // System.out.println("gerente1: " + gerente1.obtenerDetalles());
    }

    public static void imprimir(Empleado empleado) {
        String detalles = empleado.obtenerDetalles();
        System.out.println("Detalles: " + detalles);
    }
}
