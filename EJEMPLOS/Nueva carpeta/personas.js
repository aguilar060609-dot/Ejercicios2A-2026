class Personas {  
    static clientes = [];
    constructor (nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    guardarDatos (){
        let Datos = {
          nombre: this.nombre,
          edad: this.edad
        };
        Personas.clientes.push(Datos);

    }
    static obtenerDatos () {
        Personas.clientes.map(clientecitos => {
            console.log(`Nombre: ${clientecitos.nombre}, Edad: ${clientecitos.edad}`);
        });
    }
}