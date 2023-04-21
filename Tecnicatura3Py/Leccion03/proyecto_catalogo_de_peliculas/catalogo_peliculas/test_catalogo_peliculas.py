opcion = None

while opcion != 4:
    try:
        print("Opciones: ")
        print("1. Agregar Película")
        print("2. Listar las Películas")
        print("3. Eliminar catálogo de Películas")
        print("4. Salir ")

        opcion = int(input("Introduzca una opción de menú (1-4): "))
    except Exception as e:
        print(f"Ocurrió un error de tipo: {e}")
        opcion = None
    else:
        print("Salimos del programa")
