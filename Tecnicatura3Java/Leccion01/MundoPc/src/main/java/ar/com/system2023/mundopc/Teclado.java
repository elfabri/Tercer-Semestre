package ar.com.system2023.mundopc;

public class Teclado extends DispositivoEntrada {
    private final int idTeclado;
    private static int contadorTeclados;

    public Teclado(String dispositivoEntrada, String marca) {
        super(dispositivoEntrada, marca);
        this.idTeclado = ++Teclado.contadorTeclados;
    }

    @Override
    public String toString() {
        return "Teclado { idTeclado = " + idTeclado + ", " + super.toString() + " }";
    }
}
