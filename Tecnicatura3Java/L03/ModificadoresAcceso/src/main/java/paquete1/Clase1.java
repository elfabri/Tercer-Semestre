package paquete1;

public class Clase1 {
    /* Al ser público, se puede acceder a esta
     * clase desde:
     *      clases externas de este mismo paquete
     *      clases de otros paquetes
     */
    public String atributoPublic = "Valor atributo public";
    protected String atributoProtected = "valor atributo protected";

    public Clase1() {
        System.out.println("Constructor Público");
    }

    protected Clase1(String atributoPublic) {
        System.out.println("Constructor Protected");
    }

    public void metodoPublico() {
        System.out.println("Método public");
    }

    public void metodoProtected() {
        System.out.println("Método protected");
    }
}
