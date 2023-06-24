package UTN;

import UTN.conexion.Conexion;

public class main {
    public static void main( String[] args ) {
        var conexion = Conexion.getConnection();
        if (conexion != null) {
            System.out.println("Conexión exitosa: " + conexion);
        } else {
            System.out.println("Hubo un error al conectarse");
        }
    }
}
