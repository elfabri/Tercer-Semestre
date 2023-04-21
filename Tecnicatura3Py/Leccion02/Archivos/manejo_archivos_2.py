class manejo_archivos_2:
    def __init__(self, nombre):
        self.nombre = nombre

    def __enter__(self):
        print("Obtenemos el recurso".center(50, '-'))
        # Encapsulamos el código dentro del método
        self.nombre = open(self.nombre, 'r', encoding="utf-8")
        return self.nombre

    def __exit__(self, exc_type, exc_val, exc_tb):
        # (tipo de excepción, valor de excepción, track back de la excepción)
        # son parámetros opcionales necesarios en caso de error

        print("cerramos el recurso".center(50, '-'))
        if self.nombre:
            self.nombre.close()  # Se cierra el archivo en caso de estar open
