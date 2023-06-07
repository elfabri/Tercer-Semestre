package domain;  // En el del profe, no hace un package

import java.util.Scanner;

public class CalculadoraUTN {
    public static void main( String[] args ) {
        Scanner entrada = new Scanner(System.in);

        System.out.println("** App Calcu **");

        // Mostramos menú
        System.out.println("1. Suma\n2. Resta\n3. Multiplicación"); // El profe usa
        System.out.println("4. División\n5. Salir"); // la otra forma

        // System.out.println("""
        // 1. Suma
        // 2. Resta
        // 3. Multiplicación
        // 4. División
        // 5. Salir
        // """);
        System.out.print("Operación a realizar? ");
        int ope = Integer.parseInt(entrada.nextLine());  // se debería usar var

        if (ope >= 1 && ope <= 4) {
            System.out.print("Ingrese primer número: ");
            int ope1 = Integer.parseInt(entrada.nextLine());  // se debería usar var
                                                              //
            System.out.print("Ingrese segundo número: ");
            int ope2 = Integer.parseInt(entrada.nextLine());;  // se debería usar var
        }
    }
}
