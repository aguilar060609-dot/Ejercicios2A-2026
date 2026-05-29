const prompt = require("prompt-sync")();

class Restaurante {
hs=15;
hq=18;
he=20;
pf=8;
r=5;
p=6;
constructor(Mesa,cantidad) {
    this.Mesa = Mesa;
    this.cantidad = cantidad;
    this.menu = [
        { Menu: 1, nombre: "Hamburguesa sencilla", precio: this.hs },
        { Menu: 2, nombre: "Hamburguesa con queso", precio: this.hq },
        { Menu: 3, nombre: "Hamburguesa especial", precio: this.he },
        { Menu: 4, nombre: "Papas fritas", precio: this.pf },
        { Menu: 5, nombre: "Refresco", precio: this.r },
        { Menu: 6, nombre: "Postre", precio: this.p }
    ];
    this.pedido = [];
    this.totalCuenta = 0;
}
mesa () {
    console.log(`\nMesas disponibles: 1, 2, 3, 4, 5`);
    let opcion = parseInt(prompt("Seleccione una mesa: "));

switch (opcion) {
    case 1:
        console.log(`Mesa ${opcion} seleccionada.`);
        break;
    case 2:
        console.log(`Mesa ${opcion} seleccionada.`);
        break;
    case 3:
        console.log(`Mesa ${opcion} seleccionada.`);
        break;
    case 4:
        console.log(`Mesa ${opcion} seleccionada.`);
        break;
    case 5:
        console.log(`Mesa ${opcion} seleccionada.`);
        break;
    default:
        console.log(" Seleccione una mesa .");
    }
}
mosMenu() {

        console.log(`\n   Menu del dia `);

        this.menu.forEach(producto => {

            console.log(
                `${producto.Menu}. ${producto.nombre} - $${producto.precio}`
            );
        });
    }

carta() {
    while (true) {
        const opcion = parseInt(prompt(`[Mesa ${this.Mesa}] Seleccione el producto (0 para cerrar cuenta): `));
        switch (opcion) {
            case 0:
                console.log(`Cuenta cerrada. Total a pagar: $${this.TotalCuenta()}`);
                return;
            case 1:
                this.pedidito(this.hs, "Hamburguesa sencilla");
                break;
            case 2:
                this.pedidito(this.hq, "Hamburguesa con queso");
                break;
            case 3:
                this.pedidito(this.he, "Hamburguesa especial");
                break;
            case 4:
                this.pedidito(this.pf, "Papas fritas");
                break;
            case 5:
                this.pedidito(this.r, "Refresco");
                break;
            case 6:
                this.pedidito(this.p, "Postre");
                break;
            default:
                console.log("Opción inválida. Intente nuevamente.");
        }
    }
}

pedidito(alimento, nombre) {
    const cantidad = parseInt(prompt(`¿Cantidad de "${nombre}"?: `));
    if (cantidad > 0) {
        const subtotal = alimento * cantidad;
        this.pedido.push({
            "Producto": nombre,"Precio ": `$${alimento}`, "Cantidad": cantidad,"Subtotal": `$${subtotal}`
        });
        this.totalCuenta += subtotal;
        console.log(`-> Agregado con éxito.`);
    } else {
        console.log("ingrese una cantidad ");
    }
}
TotalCuenta() {
    return this.totalCuenta;
}
}
const restaurante = new Restaurante();
restaurante.mesa();
restaurante.mosMenu();
restaurante.carta();
