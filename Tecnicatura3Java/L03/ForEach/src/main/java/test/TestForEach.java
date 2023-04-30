package test;
public class TestForEach {
    public static void main( String[] args ) {

        int edades[] = {4, 5, 6, 7};

        System.out.println("Primera forma");
        for (int i = 0; i < edades.length; i++) {
            System.out.println("edad = " + edades[i]);
        }

        System.out.println("Segunda forma");
        // Ya no tenemos acceso al índice
        for (int edad: edades) {
            System.out.println("edad = " + edad);
        }
    }
}
