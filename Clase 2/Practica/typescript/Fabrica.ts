import { Empleado } from './Empleado';

class Fabrica
{
    private _empleados : Array<Empleado>;
    private _razonSocial : string;

    public constructor(razonSocial : string)
    {
        this._empleados = new Array<Empleado>();
        this._razonSocial = razonSocial;
    }

    public AgregarEmpleado(persona : Empleado) : bool
    {
        
    }

}