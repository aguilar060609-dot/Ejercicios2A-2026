/*Calcular el area y el perimetro de un rectangulo utilizando las clase de Js */
class Rectangulo {
    constructor (base , altura){ //Instanciar//
        this.base = base ;
        this.altura = altura ;
    } //opercion//
    CalcularArea(){
    return this.base * this.altura;
    }
    CalcularPer(){
    return (2*this.base) + (2*this.altura);
    }
     get obtenerArea(){
       return this.CalcularArea();
    }
     get obtenerPer(){
       return this.CalcularPer();
    }
}
    let Rectangulo1 = new Rectangulo (12 , 25);{
    console.log (Rectangulo1.obtenerArea);
    console.log (Rectangulo1.obtenerPer);
    }
//let alumnos =new Estudiantes (`Nombr: ${this.nombre}, matricula ${this.matricula}`);
