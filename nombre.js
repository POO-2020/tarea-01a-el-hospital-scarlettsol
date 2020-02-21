class Nombre {
    /**
     * 
     * @param {string} nombre Nombre de la persona
     * @param {string} apellidoPaterno Apellido paterno de la persona
     * @param {string} apellidoMaterno Apellido materno de la persona
     */
    constructor(nombre, apellidoPaterno, apellidoMaterno) {
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
    }

    getNombreCompleto (){
        return(`
        Nombre: ${this.nombre} 
        Apellido paterno: ${this.apellidoPaterno} 
        Apellido materno: ${this.apellidoMaterno}`);
    }

    getApellidoNombre() {
        return(`${this.apellidoPaterno} ${this.apellidoMaterno}, ${this.nombre}`);
    }

    getIniciales() {
        return(`${this.nombre.charAt(0)}.${this.apellidoPaterno.charAt(0)}.${this.apellidoMaterno.charAt(0)}`);
    }
}

let n1 = new Nombre("Marian", "Ramírez", "Solórzano");
console.log(n1.getNombreCompleto());
console.log(n1.getApellidoNombre());
console.log(n1.getIniciales());