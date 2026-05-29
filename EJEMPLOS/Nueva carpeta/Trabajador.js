export class Trabajador{
    //Encapsulamiento
    #nombre;
    #horasTrabajadas;
    #pagoxHora

    constructor(nombre, horasTrabajadas,pagoxHora){
        this.#nombre=nombre;
        this.#horasTrabajadas=horasTrabajadas;
        this.#pagoxHora=pagoxHora;
    }

    //Uso de los getters
    get getNombre(){
        return this.#nombre
    }
    get getHorasTrabajadas(){
        return this.#horasTrabajadas
    }
    get getPagoxHora(){
        return this.#pagoxHora
    }

    //Uso de setters
    set setNombre(nombre){
        if(nombre.trim()===""){
            throw new Error("El nombre no puede estar vacio")
        }
        this.#nombre
    }

    set setHorasTrabajadas(horas){
        if(horas<=0 || isNaN(horas)){
            throw new Error ("Las horas trabajadas debe ser mayor a 0")
        }
        this.#horasTrabajadas
    }
       set setPagoxHora(pago){
        if(pago<=0 || isNaN(pago)){
            throw new Error ("El pago por hora debe ser mayor a 0")
        }
        this.#pagoxHora
    }

    //Métodos para calcular sueldos
    calcularSueldoBruto(){
        return this.#horasTrabajadas * this.#pagoxHora
    }

    calcularDescuento(){
        return this.calcularSueldoBruto()*0.10
    }

    calcularSueldoFinal(){
        return this.calcularSueldoBruto()-this.calcularDescuento()
    }

}
