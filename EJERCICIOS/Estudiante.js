class Estudiante {
    #nombre 

    constructor (nombre,matricula){ //Instanciar//
        this.#nombre= nombre  ;
        this.matricula = matricula ; 
    }
get Nombresito(){
        return this.#nombre;
    }
set Nombresito(nombre){
        if(nombre.length===0){
            throw new Error("El nombre no puede estar vacio")
        }
        this.#nombre = nombre;
    }
}

let estudiante1 = new Estudiante("Luis Angel", "25E20042");
console.log(estudiante1.Nombresito);
estudiante1.Nombresito = "Jesus Antonio";
console.log(estudiante1.Nombresito);
