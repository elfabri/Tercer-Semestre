package ar.com.system2023.mundopc;

public class Monitor {
    private final int idMonitor;
    private static int contadorMonitores;
    private String marca;
    private double tamaño;


    private Monitor() {
        this.idMonitor = ++Monitor.contadorMonitores;
    }

    public Monitor(String marca, double tamaño) {
        this(); // llama al constructor vacio
        this.marca = marca;
        this.tamaño = tamaño;
    }

    public String getMarca() {
        return this.marca;
    }

    public double getTamaño() {
        return this.tamaño;
    }

    public int getIdMonitor() {
        return this.idMonitor;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    } 

    public void setTamaño(double tamaño) {
        this.tamaño = tamaño;
    }

    @Override
    public String toString() {
        return "Monitor { idMonitor = " + idMonitor + ", marca = " + marca + ", tamaño = " + tamaño + " }";
    }
}
