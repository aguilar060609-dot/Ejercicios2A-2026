class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    describir(){
        return console.log (`Soy ${this.nombre}y tengo ${this.edad} años`);
    }

}
class Perro extends Animal{
    ladrar(){
        return console.log("Guau Guau");
    }
}

let mIFirulais = new Perro ("Fidudias",5)
mIFirulais.describir();
mIFirulais.ladrar();