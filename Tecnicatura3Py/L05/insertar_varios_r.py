import psycopg2  # Conexión a postgres

conexion = psycopg2.connect(
    user="postgres",
    password="admin",
    host="127.0.0.1",
    port="5432",
    database="test_bd"
)

try:
    with conexion:
        with conexion.cursor() as cursor:
            # sentencia = "SELECT * FROM persona"
            # sentencia = "SELECT \"idPersona\", nombre FROM persona"
            # sentencia = "SELECT * FROM persona WHERE \"idPersona\" = 1"
            sentencia = "INSERT INTO persona (nombre, apellido, email) VALUES (%s, %s, %s)"

            valores = (
                    ("Camila", "Castson", "CCa@gmail.com"),
                    ("Carola", "Charlson", "CCh@gmail.com"),
                    ("Carlota", "Perez", "CPe@gmail.com")
                    )

            cursor.executemany(sentencia, valores)

            registros_insertados = cursor.rowcount
            print(f"Registros insertados: {registros_insertados}")

except Exception as e:
    print(f"Error - {e}")

finally:
    # Cerramos conexión
    conexion.close()
