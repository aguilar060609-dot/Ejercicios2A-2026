class Cliente {
    constructor(nombre, id, cuenta  ) {
        this.nombre = nombre;
        this.id = id;
        this.cuenta = cuenta;
    }
}
class Cuenta {
    constructor(numeroCuenta, saldo, ) {
        this.numeroCuenta = numeroCuenta;
        this.saldo = saldo;
    }
    CSaldo() {
        return this.saldo;
    }
    depositar(monto) {
        this.saldo += monto;
    }  
    retirar(monto) {
        if (monto <= this.saldo) {
            this.saldo -= monto;
        } else {
            console.log("Saldo insuficiente");
        }
    }
}
class CuentaAhorro extends Cuenta {
    constructor(numeroCuenta, saldo, tasaInteres) {
        super(numeroCuenta, saldo);
        this.tasaInteres = tasaInteres;
    }
    calcularInteres() {
        return this.saldo * this.tasaInteres;
    }
}
class CuentaCorriente extends Cuenta {
    constructor(numeroCuenta, saldo, limiteCredito) {
        super(numeroCuenta, saldo);
        this.limiteCredito = limiteCredito;
    }   
    retirar(monto) {
        if (monto <= this.saldo + this.limiteCredito) {
            this.saldo -= monto;
        } else { console.log("Excede el límite de crédito");
        }
    }

}
let listaClientes = [];

let cliente1 = new Cliente("Darius", "K02", new CuentaAhorro("BBVA", 1000, 0.05));
let cliente2 = new Cliente("Pedro", "K03", new CuentaCorriente("Santander", 500, 200));

listaClientes.push(cliente1, cliente2);

console.log("\nInformación de los clientes:");
listaClientes.map(cliente=> {
    console.log(`Nombre: ${cliente.nombre}, ID: ${cliente.id}, Número de Cuenta: ${cliente.cuenta.numeroCuenta}, Saldo: $${cliente.cuenta.CSaldo()}`);
});

console.log("\nOperaciones:");
cliente1.cuenta.depositar(200);
console.log(`Saldo después de depósito para ${cliente1.nombre}: $${cliente1.cuenta.CSaldo()}`);
cliente2.cuenta.retirar(600);
console.log(`Saldo después de retiro para ${cliente2.nombre}: $${cliente2.cuenta.CSaldo()}\n`);


