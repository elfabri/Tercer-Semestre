package test;

public class TestAutoboxingUnboxing {
    public static void main( String[] args ) {
        // Clases envolventes (Wrapper)

        // de tipos primitivos
        // int -> la clase envolvente es Integer
        // Integer es una clase que tiene métodos
        int enteroPrim = 10; // Tipo Primitivo
        System.out.println("Entero Primitivo: " + enteroPrim);
        Integer entero = 10; // Tipo Object
        System.out.println("Entero Integer: " + entero.toString());
    }
}
