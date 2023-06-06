class Empleado extends Persona {
    static contadorE = 0;

    constructor(n, a, e, sueldo) {
        super(n, a, e);
        this._idEmpleado = ++Empleado.contadorE;
        this._sueldo = sueldo; 
    }

    get idEmpleado() {
        return this._idEmpleado;
    }

    get sueldo() {
        return this._sueldo;
    }

    set sueldo(sueldo) {
        this._sueldo = sueldo;
    }

    toString() {
        return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`;
    }
}
