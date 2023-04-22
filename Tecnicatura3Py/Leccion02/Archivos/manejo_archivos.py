try:
    archivo = open('prueba.txt', 'w', encoding="utf8")  # accedemos o creamos
    # archivo prueba.txt con permiso de escritura, esto suele dar excepciones

    # modificación del archivo
    archivo.write("Programamos con diferentes tipos de archivos, ahora en txt.\n")

    # Necesitamos especificar encodig utf-8 para usar á
    archivo.write("Los acentos son importantes para las palabras.\n")
    archivo.write("Como por ejemplo: acción, ejecución y producción.\n")

    archivo.write("Con esto terminamos\n")

except Exception as e:
    print(e)
finally:
    archivo.close()
