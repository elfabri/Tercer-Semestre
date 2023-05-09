import psycopg2  # Conexión a postgres

conexion = psycopg2.connect(
    user='postgres',
    password='admin',
    host='127.0.0.1',
    port='5432',
    database='test_bd'
)

try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = "SELECT * FROM persona"
            cursor.execute(sentencia)
            # Registramos datos
            registros = cursor.fetchall()
            print(registros)

except Exception as e:
    print(f"Error - {e}")

finally:
    # Cerramos conexión
    conexion.close()
