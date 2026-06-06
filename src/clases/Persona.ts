import { IPersona } from "../interfaces/IPersona";

export class Persona implements IPersona<number> {

    id: number;
    nombre: string;
    apellido: string;
    fechaNacimiento: string;
    dni: string;

    constructor(
        id: number,
        nombre: string,
        apellido: string,
        fechaNacimiento: string,
        dni: string
    ) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.dni = dni;
    }

    presentarse(): void {
        console.log(
            `Hola soy ${this.nombre} y nací el ${this.fechaNacimiento}`
        );
    }
}