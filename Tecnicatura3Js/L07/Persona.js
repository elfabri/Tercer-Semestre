class Persona {
    static contadorP = 0;

    constructor(n, a, e) {
        this._idPersona = ++contadorP;
        this._nombre = n;
        this._apellido = a;
        this._edad = e;
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
