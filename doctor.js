import Nombre from "./nombre.js/index.js";

class Doctor {
    /**
     * 
     * @param {string} nombre Nombre del doctor
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

let doc1 = new Doctor("Marian Ramírez Solórzano", "Neurología", 3131590469, 5269489);
console.log(doc1.getPerfil());