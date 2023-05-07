"use strict";
//import { Persona } from './persona.ts';
//Esto de arriba es si importo un "modulo", no un archivo
/// <reference path = "./persona.ts"/>
/// <reference path = "./alumno.ts"/>
var TestPrueba;
(function (TestPrueba) {
    let alumnos = new Array();
    alumnos.push(new Prueba.Alumno("Porfirio", "Thiago", 112233), new Prueba.Alumno("Raciopi", "Mauro", 445566), new Prueba.Alumno("Sulivan", "Nathan", 778899), new Prueba.Alumno("Fernandez", "Alberto", 999888));
    alumnos.forEach(alumno => {
        console.log(alumno.ToString() + "\n");
    });
})(TestPrueba || (TestPrueba = {}));
//# sourceMappingURL=main.js.map