class EmpleadoError extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "Error404";
    }
}

class Empleado {
    #RFC;
    #nombre;
    #edad;
    #sueldoBase;
    #sueldoExtra;
    #horasExtra;

    constructor(RFC, nombre, edad, sueldoBase, sueldoExtra, horasExtra) {
        try {
            this.rfc = RFC;
            this.nombre = nombre;
            this.edad = edad;
            this.sueldoBase = sueldoBase;
            this.sueldoExtra = sueldoExtra;
            this.horasExtra = horasExtra;
        } catch (error) {
            throw new EmpleadoError(`Error al crear el empleado: ${error.message}`);
        }
    }

    get rfc() { return this.#RFC; }
    set rfc(valor) {
        if (typeof valor !== 'string' || valor.trim().length < 12) {
            throw new EmpleadoError("RFC debe tener al menos 12 caracteres.");
        }
        this.#RFC = valor;
    }

    get nombre() { return this.#nombre; }
    set nombre(valor) {
        if (typeof valor !== 'string' || valor.trim() === '') {
            throw new EmpleadoError("Nombre no puede estar vacío.");
        }
        this.#nombre = valor;
    }

    get edad() { return this.#edad; }
    set edad(valor) {
        if (typeof valor !== 'number' || valor < 18 || valor > 65) {
            throw new EmpleadoError("Edad debe ser un número entre 18 y 65.");
        }
        this.#edad = valor;
    }

    get sueldoBase() { return this.#sueldoBase; }
    set sueldoBase(valor) {
        if (typeof valor !== 'number' || valor <= 0) {
            throw new EmpleadoError("El sueldo base debe ser un número positivo.");
        }
        this.#sueldoBase = valor;
    }

    get sueldoExtra() { return this.#sueldoExtra; }
    set sueldoExtra(valor) {
        if (typeof valor !== 'number' || valor < 0) {
            throw new EmpleadoError("El pago por hora extra debe ser un número positivo.");
        }
        this.#sueldoExtra = valor;
    }

    get horasExtra() { return this.#horasExtra; }
    set horasExtra(valor) {
        if (typeof valor !== 'number' || valor < 0) {
            throw new EmpleadoError("Las horas extras deben ser un número positivo.");
        }
        this.#horasExtra = valor;
    }


    calcularComplementoHorasExtra() {
        return this.#sueldoExtra * this.#horasExtra;
    }

    calcularSueldoBruto() {
        return this.#sueldoBase + this.calcularComplementoHorasExtra();
    }

    mostrarEmpleado() {
        return `Empleado: ${this.nombre} (RFC: ${this.rfc}), Edad: ${this.edad}, ` +
               `Sueldo Base: $${this.sueldoBase.toFixed(2)}, Horas Extra: ${this.horasExtra}, ` +
               `Pago por Hora Extra: $${this.sueldoExtra.toFixed(2)}, ` +
               `Sueldo Bruto: $${this.calcularSueldoBruto().toFixed(2)}`;
    }

    mostrarAll() {
        return this.mostrarEmpleado();
    }
}


try {
    const emp = new Empleado("ABCJ123456H89", "Luis Aguilar", 30, 1000, 50, 10);
    console.log(emp.mostrarAll());
} catch (e) {
    console.error(e.message);
}