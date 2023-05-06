package test;

import domain.*;

public class TestInstanceOf {
    public static void main(String[] args) {
        Empleado empleado1 = new Empleado("Juanita", 10000);
        // determinarTipo(empleado1);

        empleado1 = new Gerente("Josefína", 5000, "Sistemas");
        determinarTipo(empleado1);
    }

    public static void determinarTipo(Empleado empleado) {
        if (empleado instanceof Gerente) {
            System.out.println("Es de tipo Gerente");
            // empleado.getDepartamento(); // no se puede
            ((Gerente) empleado).getDepartamento(); // Conversión de tipos
            // Otra forma es definir nueva variable del tipo conveniente
            // Gerente gerente = (Gerente) empleado;
            // gerente.getDepartamento();
        }
        else if (empleado instanceof Empleado) {
            System.out.println("Es de tipo Empleado");
        }
        else if (empleado instanceof Object) {
            System.out.println("Es de tipo Object");
        }
    }
}
