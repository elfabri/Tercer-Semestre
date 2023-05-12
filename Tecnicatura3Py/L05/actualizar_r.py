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
            sentencia = "UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE \"idPersona\"=%s"

            valores = ("Juana María", "Az", "zxcv@gmail.com", 1)

            cursor.execute(sentencia, valores)

            registros_actualizados = cursor.rowcount
            print(f"Registros insertados: {registros_actualizados}")

except Exception as e:
    print(f"Error - {e}")

finally:
    # Cerramos conexión
    conexion.close()
