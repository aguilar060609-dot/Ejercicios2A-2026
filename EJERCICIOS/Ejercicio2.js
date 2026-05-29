class Material {
  constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    this.disponible = true;
  }
  mostrarInfo() {
    console.log(
      `Titulo: ${this.titulo}\nAutor: ${this.autor}\nDisponible: ${this.disponible ? `si` : `no`}`,
    );
  }
  prestar() {
    this.disponible = false;
    console.log(`Se ha prestado el material "${this.titulo}"`);
  }
  devolver() {
    this.disponible = true;
    console.log(`Se ha devuelto el material "${this.titulo}"`);
  }
}
class Libro extends Material {
  constructor(titulo, autor, numerosPaginas) {
    super(titulo, autor);
    this.numerosPaginas = numerosPaginas;
  }
  mostrarInfo() {
    super.mostrarInfo();
    console.log(`Numero de paginas: ${this.numerosPaginas} \n`);
  }
}
class Revista extends Material {
  constructor(titulo, autor, numeroEdicion) {
    super(titulo, autor);
    this.numeroEdicion = numeroEdicion;
  }
  mostrarInfo() {
    super.mostrarInfo();
    console.log(`Numero de edicion: ${this.numeroEdicion}`);
  }
}
const biblioteca = [
  new Libro("Cerdito", "El pepe ", 180),
  new Revista("Diario de palenque", "Luis Angel Aguilar", 202),
  new Libro("Dopamina", "Darius", 417),
  new Revista("Vayven", "Pedro", 35),
];
console.log("\n Operaciones en la biblioteca: ");
biblioteca[0].prestar();

console.log("\n Estado después de préstamos:");
biblioteca.forEach((Material) => {
  Material.mostrarInfo();
});
biblioteca[0].devolver();

console.log("Operacion final:");
biblioteca.forEach((Material) => {
  Material.mostrarInfo();
});

