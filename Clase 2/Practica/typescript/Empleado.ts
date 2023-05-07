import { Persona } from "./Persona";

export class Empleado extends Persona
{
    protected _legajo : number;
    protected _sueldo : number;

    public constructor(apellido : string, dni : number, nombre : string, sexo : string, 
        legajo : number, sueldo : number)
    {
        super(apellido, dni, nombre, sexo);
        this._legajo = legajo;
        this._sueldo = sueldo;
    }

    public get Legajo() : number
    {
        return this._legajo;
    }

    public get Sueldo() : number
    {
        return this._sueldo;
    }

    public Hablar(idioma: string): string 
    {
        return "El empleado hablar " + idioma;
    }

    public ToString(): string 
    {
        return super.ToString() + " - " + this._legajo + " - " + this._sueldo;
    }
}