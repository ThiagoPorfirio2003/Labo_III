/*
archivo-> alumno.ts

Namespace Prueba

Clase Alumno extends Persona
atributos protected:
legajo:number

propiedad pública (l/e)

constructor (3 parámetros)

método de instancia (polimorfismo)
ToString():string

*/

/// <reference path="./persona.ts" />

namespace Prueba
{
    export class Alumno extends Persona
    {
        protected lejago : number;

        public constructor(apellido : string, nombre : string , legajo : number)
        {
            super(apellido, nombre);
            this.lejago = legajo;
        }

        public set Legajo(legajo : number)
        {
            this.lejago = legajo;
        }

        public ToString(): string 
        {
            return super.ToString() + " - " + this.lejago;
        }
    }
}