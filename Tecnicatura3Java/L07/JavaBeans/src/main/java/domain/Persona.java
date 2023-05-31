package domain;

import java.io.Serializable;

public class Persona implements Serializable {
    
    private String nombre;
    private String apellido;

    public Persona() {} // Constructor vacío obligatorio

    public Persona(String n, String a) {
        this.nombre = n;
        this.apellido = a;
    }

    public String getNombre() {
        return this.nombre;
    }

    public String getApellido() {
        return this.apellido;
    }

    public void setNombre(String n) {
        this.nombre = n;
    }

    public void setApellido(String a) {
        this.apellido = a;
    }

    @Override
    public String toString() {
        return "Persona { nombre = " + this.nombre + ", apellido = " + this.apellido + " }";
    }
}
