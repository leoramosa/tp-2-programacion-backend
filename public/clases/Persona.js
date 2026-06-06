export class Persona {
    id;
    nombre;
    apellido;
    fechaNacimiento;
    dni;
    constructor(id, nombre, apellido, fechaNacimiento, dni) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.dni = dni;
    }
    presentarse() {
        console.log(`Hola soy ${this.nombre} y nací el ${this.fechaNacimiento}`);
    }
}
