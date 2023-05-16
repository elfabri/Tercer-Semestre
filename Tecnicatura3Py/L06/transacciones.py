import psycopg2 as bd  # Conexión a postgres

conexion = bd.connect(
    user="postgres",
    password="admin",
    host="127.0.0.1",
    port="5432",
    database="test_bd"
)

try:
    conexion.autocommit = False
    cursor = conexion.cursor()
    sentencia = "INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)"
    valores = ("María", "Esparta", "aaaa@asdf.com")
    cursor.execute(sentencia, valores)
    print("Termina la transacción")

except Exception as e:
    print(f"Error - {e}")

finally:
    # Cerramos conexión
    conexion.close()
