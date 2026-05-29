class Sistema {
  static baseDato = [];
  constructor(impuesto,descuento,costoEnvio) {
    this.impuesto=impuesto;
    this.descuento=descuento;
    this.costoEnvio=costoEnvio;
   
}
static Articulos(productos) {
    this.baseDato.push(productos);
  }
}
class Electronico extends Sistema{
  constructor(impuesto,descuento,costoEnvio,televisores,computadoras, telefonosMoviles,) {
    super(impuesto,descuento,costoEnvio);
    this.televisores = televisores;
    this.computadoras  = computadoras;
    this.telefonosMoviles = telefonosMoviles;
  }
Garantia() {
    console.log("¡Incluye garantia!");
  }
}
class Ropa extends Sistema {
    constructor(impuesto,descuentos,costoEnvio,camisas, pantalones, vestidos){
    super(impuesto,descuentos,costoEnvio);
    this.camisas = camisas;
    this.pantalones = pantalones;
    this.vestidos = vestidos;      
    }

  }
function mostrarAticulo(P){
  console.log(
    `\n Articulo: ${Listado.nombre} \n Numero de Personas: ${Listado.numeroPersonas} \n Fecha: ${Listado.fecha} \n Hora: ${Listado.hora} \n Tipo: ${Listado.tipo}`,
  );
}
let Persona1 = new Electronico("Luis", 2, "2026-09-03", "20:00", "Normal");
let Persona2 = new Ropa("Maria", 10, "2026-08-03", "19:00", "VIP");

Sistema.mostrarAticulo(Persona1);
Sistema.mostrarAticulo(Persona1);

Sistema.basDato.map(P => mostrarArticulo (P));