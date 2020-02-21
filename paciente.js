import Fecha from "./fecha.js";

class Paciente {
    /**
     * 
     * @param {string} nombre 
     * @param {Fecha} fechaNacimiento 
     * @param {number} telefono 
     */
    constructor(nombre, fechaNacimiento, telefono) {
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.telefono = telefono;
    }

    getPerfil() {
        return (`        Nombre: ${this.nombre}
        Fecha de nacimiento: ${this.fechaNacimiento.getFechaa()}
        Tel.: ${this.telefono}`);
    }
}

let p1 = new Paciente("Marian Ramírez", new Fecha(27, 11, 2000), 3131590469);
console.log(p1.getPerfil());