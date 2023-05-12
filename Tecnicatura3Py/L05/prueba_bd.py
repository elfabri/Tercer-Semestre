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
            sentencia = "SELECT * FROM persona WHERE \"idPersona\" = %s"  # parametro posicional
            id_persona = '1'
            # id_persona = input("Ingrese un número: ")
            cursor.execute(sentencia, id_persona)
            # Registramos datos
            registros = cursor.fetchone()  # devuelve una tupla con los datos
            print(registros)

except Exception as e:
    print(f"Error - {e}")

finally:
    # Cerramos conexión
    conexion.close()
