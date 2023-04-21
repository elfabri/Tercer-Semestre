# Contexto with - manejo de contexto with
with open("prueba.txt", 'r', encoding="utf-8") as archivo:
    print(archivo.read())

# los métodos que utiliza son:
# __enter__ abre
# __exit__ cierra
