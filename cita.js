
import Tiempo from "./tiempo.js";

class Cita {
    constructor(cita) {
        this.cita = cita;
    }

    getCita() {
        return(`Fecha: ${fecha}
        Hora: ${tiempo}
        Doctor: ${doctor}
        Paciente: ${paciente}`);
    }
}

console.log(c1.getCita());