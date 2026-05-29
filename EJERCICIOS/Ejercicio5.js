class Reserva {
  static reservarMesa = [];
  constructor(nombre, numeroPersonas, fecha, hora) {
    this.nombre = nombre;
    this.numeroPersonas = numeroPersonas;
    this.fecha = fecha;
    this.hora = hora;
  }
  static agregarReserva(reserva) {
    this.reservarMesa.push(reserva);
  }
}
class ReservaNormal extends Reserva {
  constructor(nombre, numeroPersonas, fecha, hora, tipo) {
    super(nombre, numeroPersonas, fecha, hora);
    this.tipo = tipo;
  }
  estandar() {
    this.tipo = "Normal";
  }
}
class ReservaVIP extends Reserva {
  constructor(nombre, numeroPersonas, fecha, hora, tipo) {
    super(nombre, numeroPersonas, fecha, hora);
    this.tipo = tipo;
  }
  mesaPresencial() {
    this.tipo = "VIP";
  }
  postreCortesia() {
    console.log("¡Disfruta de un postre de cortesía!");
  }
}
function mostrarReserva(reserva){
  console.log(
    `\n Nombre: ${reserva.nombre} \n Numero de Personas: ${reserva.numeroPersonas} \n Fecha: ${reserva.fecha} \n Hora: ${reserva.hora} \n Tipo: ${reserva.tipo}`,
  );
}
let reserva1 = new ReservaNormal("Luis", 2, "2026-09-03", "20:00", "Normal");
let reserva2 = new ReservaVIP("Maria", 10, "2026-08-03", "19:00", "VIP");

Reserva.agregarReserva(reserva1);
Reserva.agregarReserva(reserva2);

Reserva.reservarMesa.map(reserva => mostrarReserva(reserva));validarPassword(Contra);

