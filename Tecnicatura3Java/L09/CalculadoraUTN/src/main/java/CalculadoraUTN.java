import java.util.Scanner;

public class CalculadoraUTN {
    public static void main( String[] args ) {
        Scanner entrada = new Scanner(System.in);

        System.out.println("** App Calcu **");
// Mostramos menú
        System.out.println("""
            1. Suma
            2. Resta
            3. Multiplicación
            4. División
            5. Salir
        """);

        System.out.print("Operación a realizar? ");
        int ope = Integer.parseInt(entrada.nextLine());

        if (ope >= 1 && ope <= 4) {
            System.out.print("Ingrese primer número: ");
            var ope1 = Integer.parseInt(entrada.nextLine());

            System.out.print("Ingrese segundo número: ");
            var ope2 = Integer.parseInt(entrada.nextLine());

            int res;
            switch (ope) {
                case 1 -> {
                    res = ope1 + ope2;
                    System.out.print("Resultado de la suma: " + res);

                } case 2 -> {
                    res = ope1 - ope2;
                    System.out.print("Resultado de la resta: " + res);
                    
                } case 3 -> {
                    res = ope1 * ope2;
                    System.out.print("Resultado de la multiplicación: " + res);

                } case 4 -> {
                    res = ope1 / ope2;
                    System.out.print("Resultado de la división: " + res);

                } default -> System.out.println("Opción invalida");
            }
        } else if (ope == 5) {
                System.out.println("Saliendo del programa");
        } else {
            System.out.println("Opción invalida");
        }
    }
}
