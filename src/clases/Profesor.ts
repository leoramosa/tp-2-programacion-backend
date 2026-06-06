import { Persona } from "./Persona.js";

export class Profesor extends Persona {

    materia: string;

    constructor(
        id: number,
        nombre: string,
        apellido: string,
        fechaNacimiento: string,
        dni: string,
        materia: string
    ) {
        super(
            id,
            nombre,
            apellido,
            fechaNacimiento,
            dni
        );

        this.materia = materia;
    }

    presentarse(): void {
        console.log(
            `Soy el profesor y dicto la materia ${this.materia}`
        );
    }
}