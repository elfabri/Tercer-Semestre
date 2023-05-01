package paquete1;

public class Clase1 {
    /* Al ser público, se puede acceder a esta
     * clase desde:
     *      clases externas de este mismo paquete
     *      clases de otros paquetes
     */
    public String atributoPublic = "Valor atributo public";

    public Clase1() {
        System.out.println("Constructor Público");
    }

    public void metodoPublico() {
        System.out.println("Método public");
    }
}
