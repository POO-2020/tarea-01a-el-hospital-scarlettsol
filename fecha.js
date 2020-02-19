class Fecha {
    constructor(dia, mes, año) {
        this.fecha = new Date(año, mes-1, dia);
        this.fecha2 = new Date(año, mes-1, dia);
        this.DiaSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        this.mesNombre = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    }

    getAños() {
        return (`${this.fecha.getFullYear} - ${this.fecha2.getFullYear}`);
    }
    getMeses() {
        let meses = años * 12;
        return (`${meses}`);
    }
    getSemanas() {
        let semanas = meses * 4;
        return (`${semanas}`);
    }
    getDias() {
        let dias = semanas * 7;
        return (`${dias}`);
    }
    getFecha() {
        return(`${this.fechaNacimiento.getDate()}/${this.fechaNacimiento.getMonth()+1}/${this.fechaNacimiento.getFullYear()}`);
    }
    getDiaFecha() {
        let dia = this.DiaSemana[this.fecha.getDay()];
    }
}

let f1 = new Fecha(27,11,2000);
console.log(f1.getAños());
console.log(f1.getMeses());
console.log(f1.getSemanas());
console.log(f1.getDias());
console.log(f1.getFecha());
console.log(f1.getDiaFecha());