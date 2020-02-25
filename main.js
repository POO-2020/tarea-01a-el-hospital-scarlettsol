import Doctor from "./doctor.js";
import Hospital from "./hospital.js";
import Cita from "./cita.js";
import Nombre from "./nombre.js";
import Tiempo from "./tiempo.js";
import Fecha from "./fecha.js";
import Paciente from "./paciente.js";

class Main {
    constructor() {
        let doc1 = new Doctor(new Nombre("Carlos", "Brizuela", "Chávez"),"Endocrinología",3125935009, 59438871);
        let doc2 = new Doctor(new Nombre("Sofía", "Llerenas", "Ramírez"),"Neurología",3131590469, 74036822);
        this.paciente1 = new Paciente(new Nombre ("Hernán", "Mendoza", "Ruiz"), new Fecha(3, 8, 1998),3124567855);
        this.hospital = new Hospital ("Hospital De la Cruz", "Gral. Lauro Villar 568");
    }

    probarNombre() {
        let n1 = new Nombre("Ana", "Gutiérrez", "Chávez");
        console.log(n1.getNombreCompleto());
        console.log(n1.getApellidoNombre());
        console.log(n1.getIniciales());
    }

    probarTiempo() {
        let tiempo = new Tiempo(7, 20, "PM");
        console.log(tiempo.getFormato12());
        console.log(tiempo.getFormato24());
    }

    probarFecha(){
        let f1 = new Fecha(7, 11, 1998);
        console.log(f1.getMeses());
        console.log(f1.getAños());
        console.log(f1.getSemanas());
        console.log(f1.getDias());
        console.log(f1.getFecha());
        console.log(f1.getDiaFecha());
    }

    probarDoctor(){
        let doc2 = new Doctor(new Nombre("Sofía", "Llerenas", "Ramírez"),"Neurología",3131590469, 74036822);
        console.log(doc2.getPerfil());
    }

   probarPaciente() {
        let paciente2 = new Paciente(new Nombre ("Mariana", "Solano", "Rodríguez"), new Fecha(1996, 10, 22), 312149648);
        console.log(paciente2.getPerfil());
    } 

    probarCita(){
        let c1 = new Cita(new Fecha(2020, 2, 1), new Tiempo(11, 1, "PM"), this.doc1.nombre, this.paciente1.nombre);
        console.log(c1.getPerfil());
    }

    probarHospital() {
        console.log(this.hospital.nombre);
        console.log(this.hospital.direccion);
        this.hospital.registrarDoctores(this.doc1);
        this.hospital.registrarDoctores(this.doc2);
        this.hospital.listarDoctores();
    }
}

let app = new Main();
app.probarNombre();
app.probarTiempo();
app.probarFecha();
app.probarDoctor();
app.probarPaciente();
app.probarCita();
app.probarHospital();