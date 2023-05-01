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

        // Autoboxing - Conversión de obj a tipo primitivo
        // en este caso, no se altera el estado inicial de la variable, no se guarda la conversión
        System.out.println("Entero a otro tipo: " + entero.doubleValue());

        // Unboxing - Lo contrario a Autoboxing
        int entero2 = entero; // entero es obj y entero2 es int
        System.out.println("Entero2: " + entero2);

        /*
         * Clases Envolventes de tipos primitivos
         *
         * int = la clase envolvente es Integer
         * long = la clase envolvente es Long
         * float = la clase envolvente es Float
         * double = la clase envolvete es Double
         * boolean = la clase envolvente es Boolean
         * byte = la clase envolvente es Character
         * short = la clase envolvente es Short
         */
    }
}
