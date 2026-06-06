export interface IPersona<T> {
    id: T;
    nombre: string;
    apellido: string;
    fechaNacimiento: string;
    dni: string;

    presentarse(): void;
}