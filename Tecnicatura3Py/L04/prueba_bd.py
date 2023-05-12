import psycopg2

conexion = psycopg2.connect(
    user='postgres',
    password='admin',
    host='127.0.0.1',
    port='5432',
    database='test_bd'
)

cursor = conexion.cursor()
sentencia = 'SELECT * FROM persona'

cursor.execute(sentencia)

# Registramos datos
registros = cursor.fetchall()

print(registros)

# Cerramos conexión
cursor.close()
conexion.close()
