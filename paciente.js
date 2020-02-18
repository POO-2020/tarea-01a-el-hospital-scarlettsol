class Paciente {
    /**
     * 
     * @param {string} nombre 
     * @param {number} fechaNacimiento 
     * @param {number} telefono 
     */
    constructor(nombre, fechaNacimiento, telefono) {
        this.nombre = nombre;
        this.fechaNacimiento = new Date(año, mes-1, dia);
        this.telefono = telefono;
    }

    getFechaNacimiento(){
        return(`${this.fechaNacimiento.getDate()}/${this.fechaNacimiento.getMonth()+1}/${this.fechaNacimiento.getFullYear()}`);
    }

    getPerfil() {
        return (`Nombre: ${this.nombre}
        Fecha de nacimiento: ${this.getFechaNacimiento.getFechaNacimiento}
        Tel.: ${this.telefono}`);
    }
}

let