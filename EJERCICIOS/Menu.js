import promptSync from "prompt-sync";
import { Alimento } from "./Alimentos.js"; 

const prompt = promptSync();

let listaAlimentos = [];
let opcion;

do {
    console.log("\n=========== MENÚ DE CONFIGURACIÓN ==========");
    console.log("1. Registrar alimentos en el menú:");
    console.log("2. Mostrar alimentos registrados:");
    console.log("3. Salir");

    opcion = parseInt(prompt("Seleccione una opción: "));

    switch (opcion) {
        case 1:
            try {
                let nombre = prompt("Ingrese el nombre del alimento: ");
                let cantidad = parseInt(prompt("Ingrese la cantidad disponible: "));
                let precio = parseFloat(prompt("Ingrese el precio del producto: "));

                let nuevoAlimento = new Alimento(nombre, cantidad, precio);

                nuevoAlimento.setNombre = nombre;
                nuevoAlimento.setCantidad = cantidad;
                nuevoAlimento.setPrecio = precio;
                listaAlimentos.push(nuevoAlimento);

                console.log("\n¡Alimento agregado correctamente!");
            } catch (error) {
                console.log("\nERROR:", error.message);
            }
            break;

        case 2:

            switch (listaAlimentos.length === 0) {
                case true:
                    console.log("\nAún no hay registros de alimentos.");
                    break;
                
                case false:
                    console.log("\n========= LISTA DE ALIMENTOS EN MENÚ =========");
                    listaAlimentos.forEach((alimento, index) => {
                        console.log(`\nProducto [${index + 1}]`);
                        console.log(`Nombre:          `, alimento.getNombre);
                        console.log(`Cantidad:        `, alimento.getCantidad);
                        console.log(`Precio Unitario: $`, alimento.getPrecio);
                        console.log(`Valor Total Inventario: $`, alimento.calcularValorTotal ? alimento.calcularValorTotal() : (alimento.getPrecio * alimento.getCantidad));
                    });
                    console.log("\n==============================================");
                    break;
            }
            break;

        case 3:
            console.log("\nFin de la ejecución. ¡Buen provecho!");
            break;
            
        default:
            console.log("\nOpción no válida.");
    }
} while (opcion !== 3);