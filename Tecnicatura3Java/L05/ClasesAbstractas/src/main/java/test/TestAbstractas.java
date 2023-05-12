package test;

import domain.*;

public class TestAbstractas {
    public static void main( String[] args ) {
        FiguraGeometrica figura = new Rectangulo("Rectangulo");
        // Aplicando upcasting - de tipo hija (Rectangulo) a tipo padre (FG)
        figura.dibujar();
        
    }
}
