package domain;

public class Persona {
    // Atributos
    private final int idPersona;
    private static int contadorPersona;

    // Bloque de inicialización estático
    // Se ejecuta solo una vez, cuando la clase se carga por primera vez
    // No se pueden utilizar atributos que no sean estáticos ni el operador this
    static {
        System.out.println("Ejecución del bloque estático");
        ++Persona.contadorPersona; // incremento inicial
    }

    // Bloque de inicialización NO estático (dinámico)
    // Se ejecuta cada vez que se inicializa la clase, cada vez que se crea un obj de la clase Persona
    {
        System.out.println("Ejecución del bloque NO estático");
        this.idPersona = Persona.contadorPersona++; // incremento de inicialización de clase
    }

    // Ambos bloques de inicialización se ejecutan antes del constructor
    
    public Persona() {
        System.out.println("Ejecución del constructor");
    }

    public int getIdPersona() {
        return this.idPersona;
    }

    @Override
    public String toString() {
        return "Persona { idPersona = " + idPersona + " }";
    }
}
