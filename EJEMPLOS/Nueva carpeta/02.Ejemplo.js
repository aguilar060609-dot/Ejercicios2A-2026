class persona {
    constructor (nombre,edad,curp){
        //Instanciar 
        this.nombre = nombre ; 
        this.edad = edad ;
        this.curp = curp ;
    }
    //Metodo
    Saludarpersona(){
    console.log(`Soy ${this.nombre} y tengo ${this.edad} años y mi curp es ${this.curp}`);
    } 
}
    let humano = new persona("Luis",25,"thor");
    humano.Saludarpersona();