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
    public List<Estudiante> listarEstudiantes() {
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

    // Método por id -> find by id
    public boolean buscarEstPorId(Estudiante est) {
        PreparedStatement ps;
        ResultSet rs;
        Connection con = getConnection();

        String sql = "SELECT * FROM estudiantes2022 WHERE idestudiante2022 = ?";

        try {
            ps = con.prepareStatement(sql);
            ps.setInt(1, est.getIdEstudiante());

            rs = ps.executeQuery();

            if (rs.next()) {
                est.setNombre(rs.getString("nombre"));
                est.setApellido(rs.getString("apellido"));
                est.setTelefono(rs.getString("telefono"));
                est.setEmail(rs.getString("email"));

                return true;  // Se encontró un registro
            }

        } catch (Exception e) {
            System.out.println("Ocurrió un error al buscar estudiante: " + e.getMessage());

        } finally {
            try {
                con.close();

            } catch (Exception e) {
                System.out.println("Ocurrió un error al cerrar conexión: " + e.getMessage());
            }
        }
        return false;
    }

    public static void main(String[] args) {
        // Listar los estudiantes
        var estudianteDao = new EstudianteDao();

        System.out.println("Listado de estudiantes:");
        List<Estudiante> estudiantes = estudianteDao.listarEstudiantes();
        estudiantes.forEach(System.out::println); // Función lambda para imprimir

        // Buscar por id
        var est1 = new Estudiante(1);
        System.out.println("Estudiantes antes de la busqueda: " + est1);
        var encontrado = estudianteDao.buscarEstPorId(est1);

        if (encontrado) {
            System.out.println("Estudiante encontrado: " + est1);
        } else {
            System.out.println("No se encontró el estudiante: " + est1.getIdEstudiante());
        }
    }
}