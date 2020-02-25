import Nombre from "./nombre.js";
import Fecha from "./fecha.js";

export default class Paciente {
    /**
     * 
     * @param {Nombre} nombre 
     * @param {Fecha} fechaNacimiento 
     * @param {number} telefono 
     */
    constructor(nombre, fechaNacimiento, telefono) {
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.telefono = telefono;
    }

    getPerfil() {
        return (`        Nombre: ${this.nombre.getNombreCompleto()}
        Fecha de nacimiento: ${this.fechaNacimiento.getFecha()}
        Tel.: ${this.telefono}`);
    }
}