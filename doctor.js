import Nombre from "./nombre.js";

export default class Doctor {
    /**
     * 
     * @param {Nombre} nombre Nombre del doctor
     * @param {string} especialidad En qué se especiliza
     * @param {number} telefono Contacto del doctor
     * @param {number} cedula Cédula del médico
     */
    constructor(nombre, especialidad, telefono, cedula) {
        this.nombre = nombre;
        this.especialidad = especialidad;
        this.telefono = telefono;
        this.cedula = cedula;
    }

    getPerfil() {
        return(`Nombre: ${this.nombre}, Especialidad: ${this.especialidad}, Tel. ${this.telefono}, Cédula: ${this.cedula}`);
    }
}