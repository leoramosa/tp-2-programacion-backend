import { Persona } from "./Persona.js";
export class Profesor extends Persona {
    materia;
    constructor(id, nombre, apellido, fechaNacimiento, dni, materia) {
        super(id, nombre, apellido, fechaNacimiento, dni);
        this.materia = materia;
    }
    presentarse() {
        console.log(`Soy el profesor y dicto la materia ${this.materia}`);
    }
}
