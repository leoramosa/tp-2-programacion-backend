import { Persona } from "./Persona.js";
export class Alumno extends Persona {
    carrera;
    constructor(id, nombre, apellido, fechaNacimiento, dni, carrera) {
        super(id, nombre, apellido, fechaNacimiento, dni);
        this.carrera = carrera;
    }
    presentarse() {
        console.log(`Soy el alumno ${this.nombre} ${this.apellido} y estudio la carrera ${this.carrera}`);
    }
}
