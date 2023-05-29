class PersonaDAO:
    """
    Data Access Object
    Contiene elementos CRUD
    """
    _SELECCIONAR = "SELECT * FROM persona ORDER BY \"idPersona\";"
    _INSERTAR = "INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)"
    _ACTUALIZAR = "UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE \"idPersona\"=%s"
    _ELIMINAR = "DELETE FROM persona WHERE \"idPersona\"=%s"
