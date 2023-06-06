class Persona {
    static contadorP = 0;

    constructor(nombre, apellido, edad) {
        this._idPersona = ++Persona.contadorP;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get idPersona(){
        return this._idPersona;
    }

    get nombre() {
        return this._nombre;
    }

    get apellido() {
        return this._apellido;
    }

    get edad() {
        return this._edad;
    }

    set nombre(n) {
        this._nombre = n;
    }

    set apellido(a) {
        this._apellido = a;
    }

    set edad(e) {
        this._edad = e;
    }

    toString() {
        return `${this._idPersona} ${this._nombre} ${this._apellido} ${this._edad}`;
    }
}

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

class Cliente extends Persona {
    static contadorC = 0;

    constructor(nombre, apellido, edad, fechaRegistro) {
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorC;
        this._fechaReg = fechaRegistro;
    }

    get idCliente() {
        return this._idCliente;
    }

    get fechaRegistro() {
        return this._fechaReg;
    }

    set fechaRegistro(fecha) {
        this._fechaReg = fecha;
    }

    toString() {
        return `${super.toString()} ${this._idCliente} ${this._fechaReg}`;
    }
}
