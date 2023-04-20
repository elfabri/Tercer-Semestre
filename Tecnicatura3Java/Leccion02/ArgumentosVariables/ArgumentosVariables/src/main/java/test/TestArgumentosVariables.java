package test;

public class TestArgumentosVariables {
    public static void main(String[] args) {
        imprimirNumeros(1, 2, 3);
        imprimirNumeros(4, 5);

        variosParametros("nombre", "apellido", 6, 7);
    }

    private static void variosParametros(String nombre, String apellido, int ...n) {
        System.out.println("Nombre: " + nombre + ", Apellido: " + apellido);
        imprimirNumeros(n);
    }

    private static void imprimirNumeros(int ...n) {
        for (int i = 0; i < n.length; i++) {
            System.out.println("Elementos: " + n[i]);
        }
    }
}
