# archivo = open("prueba.txt", 'r', encoding="utf-8")  # Si el archivo no existe, da error
# print(archivo.read())

# archivo = open("prueba.txt", 'x', encoding="utf-8")
# a: append, x: create file, b: binary file
# w: write, r: read, t: type of text, w+: wr, r+: wr

archivo = open("prueba.txt", 'r', encoding="utf-8")

# print(archivo.read(16))  # lee hasta caracter 16
# print(archivo.read(10))  # continua leyendo hasta caracter 26 en este caso

# print(archivo.readline())  # lee primera línea completa
# print(archivo.readline())  # lee segunda línea completa

# Iteración
# for linea in archivo:
    # print(linea)

# Creación de lista de líneas del archivo
# se consigue con archivo.readlines()
# print(archivo.readlines())

# se puede acceder al elemento n con archivo.readlines()[n]
# se puede limitar las lineas en la lista a primeras
# n lineas con archivo.readlines(n) con n mayor igual que 1

# Anexamos información, copiamos a otro
archivo2 = open("copia.txt", 'a', encoding="utf-8")
archivo2.write(archivo.read())
archivo.close()
archivo2.close()

# archivo2 en modo append, este programa fue ejecutado 2 veces
print("se ha terminado el proceso de leer y copiar archivos")
