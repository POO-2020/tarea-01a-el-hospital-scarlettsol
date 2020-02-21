export default class Tiempo {
    /**
     * 
     * @param {number} hora 
     * @param {number} minutos 
     * @param {string} periodo A.M. o P.M.
     */
    constructor(hora, minutos, periodo) {
        this.hora = hora;
        this.minutos = minutos;
        this.periodo = periodo;
    }

    getFormato12() {
        return(`${this.hora}:${this.minutos} ${this.periodo}`);
    }

    getFormato24() {
        if (this.periodo == "PM") {
            this.hora = this.hora + 12
        }
        return(`${this.hora}:${this.minutos}`);
    }
}

let t1 = new Tiempo(9, 40, 'PM');
console.log(t1.getFormato12());
console.log(t1.getFormato24());