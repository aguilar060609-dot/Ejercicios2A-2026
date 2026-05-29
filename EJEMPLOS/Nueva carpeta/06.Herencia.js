class Persona {
  constructor(nombre, apellidos, curp) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.curp = curp;
  }

  mostrarInformacion() {
    return console.log(
      `\nNombre: ${this.nombre} \nApellido: ${this.apellidos},\nCurp: ${this.curp}`,
    );
  }
}

class Estudiante extends Persona {
  constructor(nombre, apellidos, curp, carrera, matricula, semestre) {
    super(nombre, apellidos, curp);
    this.carrera = carrera;
    this.matricula = matricula;
    this.semestre = semestre;
  }
  InfoEstudiante() {
    return console.log(`${this.mostrarInformacion()} \nCarrera: ${this.carrera}, \nSemestre: ${this.semestre}, \nMatricula es ${this.matricula}
        `);
  }
}

class infoDocente extends Persona {
  constructor(puesto, clave, departamento, nombre, apellidos, curp) {
    super(nombre, apellidos, curp);
    this.puesto = puesto;
    this.clave = clave;
    this.departamento = departamento;
  }
  infoDocente() {
    return console.log(`${this.mostrarInformacion()}
        Puesto: ${this.puesto}, clave: ${this.clave}, Departamento ${this.departamento}`);
  }
}

let alumno1 = new Estudiante(
  "Licho",
  "Aguilar",
  "AUEL060609HCGSSA2",
  "Ing. Sistemas",
  "2°A",
  "25E20042",
);
alumno1.InfoEstudiante();
