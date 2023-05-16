import psycopg2 as bd  # Conexión a postgres

conexion = bd.connect(
    user="postgres",
    password="admin",
    host="127.0.0.1",
    port="5432",
    database="test_bd"
)

try:
    conexion.autocommit = False  # Obliga hacer commits manuales, inicia transacción
    cursor = conexion.cursor()

    sentencia = """INSERT INTO persona(nombre, apellido, email)
    VALUES (%s, %s, %s)"""

    valores = ("Marta", "Esparta", "abaa@asdf.com")

    cursor.execute(sentencia, valores)

    sentencia = """UPDATE persona SET
    nombre = %s, apellido = %s, email = %s
    WHERE \"idPersona\" = %s;"""  # id_persona

    valores = ("Juana", "Jota", "j@asdf.com", 1)

    cursor.execute(sentencia, valores)
    conexion.commit()  # confirmamos transacción, cierra transacción
    print("Termina la transacción")

except Exception as e:
    conexion.rollback()  # en caso de error, se deshacen los cambios
    # de la transacción
    print(f"Error - {e}")

finally:
    # Cerramos conexión
    conexion.close()
