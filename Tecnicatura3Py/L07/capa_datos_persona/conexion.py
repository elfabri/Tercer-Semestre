import psycopg2 as bd
from logger_base import log
import sys


class Conexion:
    _DATABASE = "test_bd"
    _USERNAME = "postgres"
    _PASSWORD = "admin"
    _HOST = "127.0.0.1"
    _DB_PORT = "5432"
    _conexion = None
    _cursor = None

    @classmethod
    def obtenerConexion(cls):
        if cls._conexion is None:
            try:
                cls._conexion = bd.connect(
                        host=cls._HOST,
                        port=cls._DB_PORT,
                        user=cls._USERNAME,
                        password=cls._PASSWORD,
                        database=cls._DATABASE,
                        )
                log.debug(f"Conexión exitosa: {cls._conexion}")
                return cls._conexion
            except Exception as e:
                log.error(f"Error: {e}")
                sys.exit()
        else:  # En este commit, arregló la identación de esto
            return cls._conexion

    @classmethod
    def obtenerCursor(cls):
        if cls._cursor is None:
            try:
                cls._cursor = cls.obtenerConexion().cursor()
                log.debug(f"Se abrió cursor {cls._cursor}")
                return cls._cursor
            except Exception as e:
                log.error(f"Error: {e}")
                sys.exit()
        else:  # En este commit, arregló la identación de esto
            return cls._cursor


if (__name__ == "__main__"):
    Conexion.obtenerConexion()
    Conexion.obtenerCursor()
