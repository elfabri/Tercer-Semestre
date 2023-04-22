# Contexto with - manejo de contexto with
# with open("prueba.txt", 'r', encoding="utf-8") as archivo:
    # print(archivo.read())

# los métodos que utiliza son:
# __enter__ abre
# __exit__ cierra

# Manejo de archivos con clase prehecha que define los métodos
# __enter__ para abrir archivo en modo lectura
# __exit__ para cerrar el mismo
from manejo_archivos_2 import manejo_archivos_2

with manejo_archivos_2("prueba.txt") as archivo:  # se ejecuta __enter__
    print(archivo.read())  # se imprime, y a continuación se ejecuta __exit__
