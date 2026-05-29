class Vehiculo {
  #marca;
  #modelo;
  #conductor;
  #velocidad;
  constructor(marca, modelo, conductor) {
    this.#marca = marca;
    this.#modelo = modelo;
    this.#conductor = conductor;
    this.#velocidad = velocidad;
  }
  #validarVelocidad(velocidad) {
    if (velocidad >= 1 && velocidad <= 180) {
      return true;
    } else {
      console.log("Esto no esta permitido );");
      return false;
    }
  }
  get obtVelocidad() {
    return this.#velocidad;
  }
  set nvvelocidad(velocidad) {
    this.#velocidad = velocidad;
  }
  mostrarInfo() {
    console.log(
      `Marca: ${this.#marca}, 
      \nModelo: ${this.#modelo}, 
      \nConductor: ${this.#conductor}, 
      \nVelocidad: ${this.#velocidad} km/h`,
    );
  }
}
let auto1 = new Vehiculo("tzuro", "Maquina voladora", "Luis Angel", 190);
auto1.nvvelocidad = 120;
auto1.mostrarInfo();
