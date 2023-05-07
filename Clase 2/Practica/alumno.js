"use strict";
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
var Prueba;
(function (Prueba) {
    class Alumno extends Prueba.Persona {
        constructor(apellido, nombre, legajo) {
            super(apellido, nombre);
            this.lejago = legajo;
        }
        set Legajo(legajo) {
            this.lejago = legajo;
        }
        ToString() {
            return super.ToString() + " - " + this.lejago;
        }
    }
    Prueba.Alumno = Alumno;
})(Prueba || (Prueba = {}));
//# sourceMappingURL=alumno.js.map