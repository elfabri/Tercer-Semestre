package aritmetica;

import excepciones.OperacionExcepcion;

public class Aritmetica {
    public static int division(int numer, int denom) {
        if (denom == 0) {
            throw new OperacionExcepcion("División entre cero");
        }
        return numer / denom;
    }
}
