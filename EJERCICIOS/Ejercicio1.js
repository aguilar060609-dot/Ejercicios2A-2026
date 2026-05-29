class Estudiante {
    constructor (nombre,matricula,promedio){ //Instanciar//
        this.nombre = nombre  ;
        this.matricula = matricula ;
        this.promedio = promedio ;
    }
    Informacion() {
    console.log(`
        Nombre: ${this.nombre} 
        Matrícula: ${this.matricula} 
        Promedio: ${this.promedio}
        `);

}
ActualizarPromedio(Actprom) {
    return this.promedio = Actprom;
    }
Aprobado(){
    let resultado = this.promedio >= 70 ? "Aprobado" : "Reprobado";
    console.log(resultado);
}
}
let alumno1 = new Estudiante ("Luis","25E20042", 80 );
alumno1.ActualizarPromedio(60);
alumno1.Informacion();

console.log("Actualizar promedio a mayor 70 :");

let alumno2 = new Estudiante ("Ana","25E20043", 80); 
alumno2.ActualizarPromedio(70);
alumno2.Informacion();


