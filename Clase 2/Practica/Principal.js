var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    var Persona = /** @class */ (function () {
        function Persona(apellido, nombre) {
            this.apellido = apellido;
            this.nombre = nombre;
        }
        Object.defineProperty(Persona.prototype, "Apellido", {
            get: function () {
                return this.apellido;
            },
            set: function (apellido) {
                this.apellido = apellido;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Persona.prototype, "Nombre", {
            get: function () {
                return this.nombre;
            },
            set: function (nombre) {
                this.nombre = nombre;
            },
            enumerable: false,
            configurable: true
        });
        Persona.prototype.ToString = function () {
            return this.apellido + " - " + this.nombre;
        };
        return Persona;
    }());
    Prueba.Persona = Persona;
})(Prueba || (Prueba = {}));
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
    var Alumno = /** @class */ (function (_super) {
        __extends(Alumno, _super);
        function Alumno(apellido, nombre, legajo) {
            var _this = _super.call(this, apellido, nombre) || this;
            _this.lejago = legajo;
            return _this;
        }
        Object.defineProperty(Alumno.prototype, "Legajo", {
            set: function (legajo) {
                this.lejago = legajo;
            },
            enumerable: false,
            configurable: true
        });
        Alumno.prototype.ToString = function () {
            return _super.prototype.ToString.call(this) + " - " + this.lejago;
        };
        return Alumno;
    }(Prueba.Persona));
    Prueba.Alumno = Alumno;
})(Prueba || (Prueba = {}));
//import { Persona } from './persona.ts';
//Esto de arriba es si importo un "modulo", no un archivo
/// <reference path = "./persona.ts"/>
/// <reference path = "./alumno.ts"/>
var TestPrueba;
(function (TestPrueba) {
    var alumnos = new Array();
    alumnos.push(new Prueba.Alumno("Porfirio", "Thiago", 112233), new Prueba.Alumno("Raciopi", "Mauro", 445566), new Prueba.Alumno("Sulivan", "Nathan", 778899), new Prueba.Alumno("Fernandez", "Alberto", 999888));
    alumnos.forEach(function (alumno) {
        console.log(alumno.ToString() + "\n");
    });
})(TestPrueba || (TestPrueba = {}));
