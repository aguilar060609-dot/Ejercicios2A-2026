class InvalidacionError extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "InvalidacionError";
    }
}

class ConsultaIncompletaError extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "ConsultaIncompletaError";
    }
}

class Persona {
    #nombre; 
    constructor(nombre, id) {
        this.nombre = nombre;
        this.id = id;
    }

    get nombre() { return this.#nombre; }
    set nombre(valor) {
        if (!valor || valor.length < 3) {
            throw new InvalidacionError("El nombre es inválido o muy corto.");
        }
        this.#nombre = valor;
    }
}

class Paciente extends Persona {
    constructor(nombre, id, estado) {
        super(nombre, id);
        this.estado = estado;
        this.historial = [];
    }

    agregarAlHistorial(consulta) {
        this.historial.push(consulta);
    }

    verHistorial() {
        console.log(`-== HISTORIAL CLÍNICO DE: ${this.nombre} (ID: ${this.id}) ==-`);
        if (this.historial.length === 0) {
            console.log("No hay registros previos.");
            return;
        }
        this.historial.forEach((c, index) => {
            console.log(`\nConsulta #${index + 1}`);
            console.log(c.generarReporte());
        });
        console.log("_________________________________________");
    }
}

class Profesional extends Persona {
    constructor(nombre, id, cedula) {
        super(nombre, id);
        this.cedula = cedula;
    }
}
class Administrador extends Persona {
    constructor(nombre, id, departamento) {
        super(nombre, id);
        this.departamento = departamento;
    }

    gestionarBaja(persona) {
        console.log(`ADMIN: Procesando baja de ${persona.nombre} del departamento de ${this.departamento}.`);
    }
}
class Medico extends Profesional {
    constructor(nombre, id, cedula, especialidad) {
        super(nombre, id, cedula);
        this.especialidad = especialidad;
    }
}

class Psicologo extends Profesional {
    constructor(nombre, id, cedula, area) {
        super(nombre, id, cedula);
        this.area = area;
    }
}
class Consulta {
    constructor(paciente, profesional, fecha) {
        if (!paciente || !profesional) {
            throw new ConsultaIncompletaError("Datos insuficientes para la consulta.");
        }
        this.paciente = paciente;
        this.profesional = profesional;
        this.fecha = fecha;
        

        this.paciente.agregarAlHistorial(this);
    }

    ReporteBase() {
        return `FECHA: ${this.fecha} | PROFESIONAL: ${this.profesional.nombre} (${this.profesional.constructor.name})`;
    }
}

class ConsultaMedica extends Consulta {
    constructor(paciente, profesional, fecha, diagnostico, tratamiento, receta) {
        super(paciente, profesional, fecha);
        this.diagnostico = diagnostico;
        this.tratamiento = tratamiento;
        this.receta = receta;
    }

    generarReporte() {
        return `${this.ReporteBase()}\nDIAGNÓSTICO: ${this.diagnostico}\nTRATAMIENTO: ${this.tratamiento}\nRECETA: ${this.receta || "N/A"}`;
    }
}

class ConsultaPsicologica extends Consulta {
    constructor(paciente, profesional, fecha, motivo, observaciones) {
        super(paciente, profesional, fecha);
        this.motivo = motivo;
        this.observaciones = observaciones;
    }

    generarReporte() {
        return `${this.ReporteBase()}\nMOTIVO: ${this.motivo}\nOBSERVACIONES: ${this.observaciones}`;
    }
}


try {
    const admin = new Administrador("Rosa Chan", "ADM01", "Recursos Humanos");
    const medico1 = new Medico("Dr. Eligio Juarez", "M001", "CED789", "Pediatría");
    const psicologo1 = new Psicologo("Dra. Andres Lopez", "PS001", "CED456", "Clínica");

    const paciente1 = new Paciente("Luis Aguilar", "P001", "Activo");
    const paciente2 = new Paciente("Jesús Díaz", "P002", "Activo");

    new ConsultaMedica(paciente1, medico1, "15-04-2026", "Gripe", "Descanso", "Vitamina C");
    new ConsultaPsicologica(paciente1, psicologo1, "20-04-2026", "Estrés laboral", "Ejercicios de respiración");
    new ConsultaMedica(paciente2, medico1, "15-04-2026", "Resfriado", "Descanso", "Paracetamol");
    new ConsultaPsicologica(paciente2, psicologo1, "20-04-2026", "Ansiedad", "Terapia cognitivo-conductual");


    console.log(`Acción realizada por: ${admin.nombre}`);
    paciente1.verHistorial();
    paciente2.verHistorial();

    admin.gestionarBaja(paciente1);
    admin.gestionarBaja(paciente2);


} catch (error) {
    console.error(`[${error.name}]: ${error.message}`);
} finally {
    console.log("Sistema finalizado.");
}