class Fecha {
    constructor(dia, mes, año) {
        this.fecha = new Date(año, mes-1, dia);
        this.DiaSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        this.mesNombre = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    }

    getAños() {
        return (`${this.fecha.getFullYear}`)
    }
    getMeses() {}
    getSemanas() {}
    getFecha() {}
    getDiaFecha() {}
}