import { Persona } from "./Persona.js";

export class Alumno extends Persona {

    carrera: string;

    constructor(
        id: number,
        nombre: string,
        apellido: string,
        fechaNacimiento: string,
        dni: string,
        carrera: string
    ) {
        super(
            id,
            nombre,
            apellido,
            fechaNacimiento,
            dni
        );

        this.carrera = carrera;
    }

    presentarse(): void {
        console.log(
            `Soy el alumno ${this.nombre} ${this.apellido} y estudio la carrera ${this.carrera}`
        );
    }
}