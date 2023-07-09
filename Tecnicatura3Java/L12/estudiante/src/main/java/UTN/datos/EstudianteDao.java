package UTN.datos;

import java.util.List;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import UTN.dominio.Estudiante;

public class EstudianteDao {
    // Método listar
    public List<Estudiante> listar() {
        List<Estudiante> estudiantes = new ArrayList<>();

        // Creamos algunos objetos necesarios para comunicarnos con la base de datos 
        PreparedStatement ps; // Envía la sentencia
        ResultSet rs;  // Obtiene el resultado
    }
}
