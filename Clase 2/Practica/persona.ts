/*
archivo-> persona.ts

Namespace Prueba

Clase Persona 
atributos protected:
apellido:string; 
nombre:string; 

propiedades públicas (l/e)

constructor (2 parámetros)

método de instancia
ToString():string
*/

namespace Prueba
{
    export class Persona
    {
        protected apellido : string;
        protected nombre : string;

        public constructor(apellido : string, nombre : string)
        {
            this.apellido = apellido;
            this.nombre = nombre;
        }

        public set Apellido(apellido : string)
        {
            this.apellido = apellido;
        }

        public get Apellido() : string
        {
            return this.apellido;
        }
        
        public set Nombre(nombre : string)
        {
            this.nombre = nombre;
        }

        public get Nombre() : string
        {
            return this.nombre;
        }

        public ToString() : string
        {
            return this.apellido + " - " + this.nombre;
        }
    }
}