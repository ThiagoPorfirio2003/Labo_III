"use strict";
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
var Prueba;
(function (Prueba) {
    class Persona {
        constructor(apellido, nombre) {
            this.apellido = apellido;
            this.nombre = nombre;
        }
        set Apellido(apellido) {
            this.apellido = apellido;
        }
        get Apellido() {
            return this.apellido;
        }
        set Nombre(nombre) {
            this.nombre = nombre;
        }
        get Nombre() {
            return this.nombre;
        }
        ToString() {
            return this.apellido + " - " + this.nombre;
        }
    }
    Prueba.Persona = Persona;
})(Prueba || (Prueba = {}));
//# sourceMappingURL=persona.js.map