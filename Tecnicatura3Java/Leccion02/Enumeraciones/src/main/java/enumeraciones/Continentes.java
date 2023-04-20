package enumeraciones;

public enum Continentes {
    AFRICA(53, "1 billon"),
    AMERICA(34, "4 billones"),
    ASIA(44, "4 billones"),
    EUROPA(46, "3 billones"),
    OCEANIA(14, "2 billones");

    private final int paises;
    private final String habitantes;

    Continentes(int paises, String habitantes) {
        this.paises = paises;
        this.habitantes = habitantes;
    }

    // Get
    public int getPaises() {
        return this.paises;
    }

    public String getHabitantes() {
        return this.habitantes;
    }
}
