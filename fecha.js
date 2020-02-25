export default class Fecha {
    /**
     * 
     * @param {number} dia valor 1..31
     * @param {number} mes valor 1..12
     * @param {number} año 
     * @param {string} diaSemana qué día de la semana era
     */
    constructor(dia, mes, año, diaSemana) {
        this.fecha = new Date(año, mes-1, dia);
        this.fecha2 = new Date;
        this.diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    }

    getAños() {
        let años = this.fecha2.getUTCFullYear() - this.fecha.getFullYear();
        return (`${años}`);
    }
    getMeses() {
        let meses = this.getAños() * 12;
        return (`${meses}`);
    }
    getSemanas() {
        let semanas = this.getMeses() * 4;
        return (`${semanas}`);
    }
    getDias() {
        let dias = this.getSemanas() * 7;
        return (`${dias}`);
    }
    getFecha() {
        return(`${this.fecha.getDate()}/${this.fecha.getMonth()+1}/${this.fecha.getFullYear()}`);
    }
    getDiaFecha() {
        let dia = this.diaSemana[this.fecha.getDay()];
        return(`${dia}`);
    }
}