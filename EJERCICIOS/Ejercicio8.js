class ErrorLibroNoDisponible extends Error {
  constructor(message) {
    super(message);
    this.name = "Error404";
  }
}
class Material {
  constructor(titulo, autor) {
    if (!titulo || titulo.length === 0) {
      throw new Error("El título no puede estar vacío");
    }
    if (!autor || autor.length < 3) {
      throw new Error("El autor debe tener al menos 3 caracteres");
    }
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
    if (!this.disponible) {
      throw new ErrorLibroNoDisponible(
        `El material "${this.titulo}" ya se encuentra prestado.`,
      );
    }
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
const biblioteca = [];
try {
  const libro1 = new Libro("Programacion", "Luis Aguilar", 86);
  libro1.prestar();
  biblioteca.push(libro1);
  console.log("Inventario de la biblioteca: ");
  biblioteca.forEach((item) => item.mostrarInfo());
  libro1.prestar();
  libro1.mostrarInfo();
  console.log(" Intentando  prestar el mismo libro otra vez: ");
  libro1.prestar();
} catch (error) {
  if (error instanceof ErrorLibroNoDisponible) {
    console.error(`[ERROR 404]: ${error.message}`);
  } else {
    console.error(`[ERROR DE VALIDACIÓN]: ${error.message}`);
  }
}
