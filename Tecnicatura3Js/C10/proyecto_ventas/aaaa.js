class Orden {
    static contOrdenes = 0
    static MAX_PRODUCTOS = 5;

    constructor() {
        this.idOrden = ++Orden.contOrdenes;
        this.productos = []
        this.contProdAgregados = 0;  // no es el length del array productos?
    }

    agregarProducto(producto) {
        this.contProdAgregados++
        if (this.contProdAgregados <= Orden.MAX_PRODUCTOS) {
            this.productos.push(producto);
        } else {
            this.contProdAgregados = Orden.MAX_PRODUCTOS;  // ya no aumentamos el contador de productos agregados
        }
    }

    calcularTotal() {
        let total = 0;
        for (let i = 0; i < this.productos.length; i++){
            total += this.productos[i].precio;
        }
        return total;
    }

    mostrarOrden() {
        return `
    \n- Orden: ${this.idOrden}
    productos: ${this.productos}
    \ncontador productos agregados: ${this.contProdAgregados}
    \nTotal de la orden: ${this.calcularTotal()}\n`
    }
}

class Producto {
    static contProd = 0;
    constructor(str, num) {
        this._idProducto = ++Producto.contProd;
        this._nombre = str;
        this._precio = num;
    }

    get idProducto() {
        return this._idProducto;
    }

    get nombre() {
        return this._nombre;
    }

    get precio() {
        return this._precio;
    }

    set nombre(str) {
        this._nombre = str;
    }

    set precio(num) {
        this._precio = num
    }

    toString(){
        return `
        - id Producto: ${this._idProducto},
            nombre: ${this._nombre},
            precio: ${this._precio}`;
    }
}

// Test
const prod1 = new Producto("Pizza Napolitana", 2200);
const prod2 = new Producto("Quilmes", 450);
const prod3 = new Producto("Andes", 450);
const prod4 = new Producto("Patagonia", 500);
const prod5 = new Producto("Lomito", 1900);
const prod6 = new Producto("Pizza 4 Quesos", 2000);
const prod7 = new Producto("Pizza Calabresa", 1950);

const orden1 = new Orden()
const orden2 = new Orden()
const orden3 = new Orden()
const orden4 = new Orden()
const orden5 = new Orden()
const orden6 = new Orden()
const orden7 = new Orden()

orden1.agregarProducto(prod1)
orden1.agregarProducto(prod2)
orden1.agregarProducto(prod2)
orden1.agregarProducto(prod6)

orden2.agregarProducto(prod2)
orden2.agregarProducto(prod3)
orden2.agregarProducto(prod3)
orden2.agregarProducto(prod4)
orden2.agregarProducto(prod5)

orden3.agregarProducto(prod3)
orden3.agregarProducto(prod3)
orden3.agregarProducto(prod2)
orden3.agregarProducto(prod2)

orden4.agregarProducto(prod7)
orden4.agregarProducto(prod6)
orden4.agregarProducto(prod5)
orden4.agregarProducto(prod4)

orden5.agregarProducto(prod2)

orden6.agregarProducto(prod4)
orden6.agregarProducto(prod4)
orden6.agregarProducto(prod4)
orden6.agregarProducto(prod4)
orden6.agregarProducto(prod4)
orden6.agregarProducto(prod7)  // no se debería agregar al superar límite

orden7.agregarProducto(prod7)
orden7.agregarProducto(prod3)
orden7.agregarProducto(prod3)
orden7.agregarProducto(prod3)

console.log(orden1.mostrarOrden())
console.log(orden2.mostrarOrden())
console.log(orden3.mostrarOrden())
console.log(orden4.mostrarOrden())
console.log(orden5.mostrarOrden())
console.log(orden6.mostrarOrden())
console.log(orden7.mostrarOrden())
