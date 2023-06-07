package domain;  // En el del profe, no hace un package

import java.util.Scanner;

public class CalculadoraUTN {
    public static void main( String[] args ) {
        Scanner entrada = new Scanner(System.in);

        System.out.println("** App Calcu **");

        System.out.print("Ingrese primer número: ");
        int ope1 = Integer.parseInt(entrada.nextLine());  // se debería usar var
                                                          //
        System.out.print("Ingrese segundo número: ");
        int ope2 = Integer.parseInt(entrada.nextLine());;  // se debería usar var

        int resultado = ope1 + ope2;  // se debería usar var

        System.out.println("Resultado = " + resultado);
    }
}
