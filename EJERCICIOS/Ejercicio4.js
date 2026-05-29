class PersonalMedico {
  static baseDato = [];
  constructor(id, nombre, departamento, sueldo) {
    this.id = id;
    this.nombre = nombre;
    this.departamento = departamento;
    this.sueldo = sueldo;
  }
  static agregarPersonal(personal) {
    this.baseDato.push(personal);
  }
}
class Doctor extends PersonalMedico {
  constructor(id, nombre, departamento, sueldo, especialidad) {
    super(id, nombre, departamento, sueldo);
    this.especialidad = especialidad;
  }
  
}

class Enfermero extends PersonalMedico {
  constructor(id, nombre, departamento, sueldo, turno) {
    super(id, nombre, departamento, sueldo);
    this.turno = turno;
  }
}
const doctor1 = new Doctor(1, "Dr. Patricio", "Insano", 5000, "Masvida");
const enfermero1 = new Enfermero(
  2,
  "Enfermero. Licho",
  "Pediatria",
  3000,
  "Noche",
);

PersonalMedico.agregarPersonal(doctor1);
PersonalMedico.agregarPersonal(enfermero1);

console.log(PersonalMedico.baseDato);

PersonalMedico.baseDato.map((personal) => {
  console.log(
    `\n ID: ${personal.id} \n Nombre: ${personal.nombre} \n Departamento: ${personal.departamento} \n Sueldo: ${personal.sueldo}`,
  );
});
