import PromptSync from "prompt-sync";
const prompt = PromptSync();

class Restaurante {
    constructor(Mesa) {
        this.Mesa = Mesa;
        this.menu = [
            { L: 1, nombre: "Hamburguesa sencilla", precio: 15 },
            { L: 2, nombre: "Hamburguesa con queso", precio: 18 },
            { L: 3, nombre: "Hamburguesa especial", precio: 20 },
            { L: 4, nombre: "Papas fritas", precio: 8 },
            { L: 5, nombre: "Refresco", precio: 5 },
            { L: 6, nombre: "Postre", precio: 6 }
        ];
        this.pedido = [];
        this.totalCuenta = 0;
    }

    mostrarMenu() {
        console.log(`\n--- Menú (Mesa ${this.Mesa}) ---`);
        this.menu.forEach(producto => {
            console.log(`${producto.L}. ${producto.nombre} - $${producto.precio}`);
        });
    }

    regVen() {
        let pidiendo = true;
        this.mostrarMenu();

        while (pidiendo) {
            const opcion = parseInt(prompt(`[Mesa ${this.Mesa}] Seleccione el producto (0 para cerrar cuenta): `));

            switch (opcion) {
                case 0:
                    pidiendo = false;
                    break;

                default:
                    const producto = this.menu.find(p => p.L === opcion);
                    switch (!!producto) {
                        case true:
                            const cantidad = parseInt(prompt(`¿Cantidad de "${producto.nombre}"?: `));

                            switch (cantidad > 0) {
                                case true:
                                    const subtotal = producto.precio * cantidad;
                                    
                                    this.pedido.push({
                                        "Producto": producto.nombre,
                                        "Precio Unitario": `$${producto.precio}`,
                                        "Cantidad": cantidad,
                                        "Subtotal": `$${subtotal}`
                                    });

                                    this.totalCuenta += subtotal;
                                    console.log(`-> Agregado con éxito.`);
                                    break;
                                
                                case false:
                                    console.log("Cantidad inválida.");
                                    break;
                            }
                            break;

                        case false:
                            console.log("ID de producto no encontrado.");
                            break;
                    }
                    break;
            }
        }

        this.mostrarTicket();
    }

    mostrarTicket() {
        switch (this.pedido.length) {
            case 0:
                console.log(`\nLa Mesa ${this.Mesa} no registró consumo.\n`);
                break;
                
            default:

                console.log(`--------- DETALLE DE VENTA - MESA ${this.Mesa} ---------`);
                console.table(this.pedido);
                console.log(` ----- TOTAL NETO A PAGAR: $${this.totalCuenta} ----------\n`);
                break;
        }
    }
}

const mesas = {
    1: new Restaurante(1),
    2: new Restaurante(2),
    3: new Restaurante(3),
    4: new Restaurante(4),
    5: new Restaurante(5)
};

let sistemaActivo = true;

while (sistemaActivo) {
    console.log("=== SISTEMA DE CONTROL DE RESTAURANTE ===");
    console.log("Mesas disponibles: 1, 2, 3, 4, 5");
    const seleccion = parseInt(prompt("¿A qué mesa desea atender? (O introduce 0 para salir del sistema): "));

    switch (seleccion) {
        case 0:
            sistemaActivo = false;
            console.log("Saliendo del sistema... ¡Buen día!");
            break;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            mesas[seleccion].regVen();
            break;
        default:
            console.log("Esa mesa no existe.\n");
            break;
    }
}