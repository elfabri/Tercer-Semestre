from conexion import Conexion
from Persona import Persona
from logger_base import log


class PersonaDAO:
    """
    Data Access Object
    Contiene elementos CRUD
    """
    _SELECCIONAR = "SELECT * FROM persona ORDER BY \"idPersona\";"
    _INSERTAR = "INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)"
    _ACTUALIZAR = "UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE \"idPersona\"=%s"
    _ELIMINAR = "DELETE FROM persona WHERE \"idPersona\"=%s"

    # definimos los métodos de clase
    @classmethod
    def seleccionar(cls):
        with Conexion.obtenerConexion():
            with Conexion.obtenerCursor() as cursor:
                cursor.execute(cls._SELECCIONAR)
                registros = cursor.fetchall()
                personas = []
                for r in registros:
                    p = Persona(r[0], r[1], r[2], r[3])
                    personas.append(p)
                return personas

    @classmethod
    def insertar(cls, p):
        with Conexion.obtenerConexion():
            with Conexion.obtenerCursor() as cursor:
                valores = (p.nombre, p.apellido, p.email)
                cursor.execute(cls._INSERTAR, valores)
                log.debug(f"Persona insertada: {p}")
                return cursor.rowcount


if __name__ == "__main__":
    # Insertar
    p1 = Persona(nombre="Patricia", apellido="Xd", email="asdf@fdsa.asd")
    personas_insertadas = PersonaDAO.insertar(p1)
    log.debug(f"Personas insertadas: {personas_insertadas}")
    # Seleccionar
    personas = PersonaDAO.seleccionar()
    for p in personas:
        log.debug(p)
