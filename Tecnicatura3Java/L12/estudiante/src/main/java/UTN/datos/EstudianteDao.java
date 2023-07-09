package UTN.datos;

import static UTN.conexion.Conexion.getConnection;
import UTN.dominio.Estudiante;

import java.util.List;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

public class EstudianteDao {
    // Método listar
    public List<Estudiante> listar() {
        List<Estudiante> estudiantes = new ArrayList<>();

        // Creamos algunos objetos necesarios para comunicarnos con la base de datos 
        PreparedStatement ps; // Envía la sentencia
        ResultSet rs;  // Obtiene el resultado

        // Creamos objeto de tipo conexión
        Connection con = getConnection();
        String sql = "SELECT * FROM estudiantes ORDER BY idestudiantes2022;";

        try {
            ps = con.prepareStatement(sql);
            rs = ps.executeQuery();

            while (rs.next()) {
                var estudiante = new Estudiante();

                estudiante.setIdEstudiante(rs.getInt("idestudiante2022"));
                estudiante.setNombre(rs.getString("nombre"));
                estudiante.setApellido(rs.getString("apellido"));
                estudiante.setTelefono(rs.getString("telefono"));
                estudiante.setEmail(rs.getString("email"));

                // Falta agregarlo a la lista
                estudiantes.add(estudiante);
            }

        } catch (Exception e) {
            System.out.println("Ocurrió un error al seleccionar datos: " + e.getMessage());
        } finally {
            try {
                con.close();
            } catch (Exception e) {
                System.out.println("Ocurrió un error al cerrar la conexión: " + e.getMessage());
            }
        }

        return estudiantes;
    }
}
