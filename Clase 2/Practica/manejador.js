"use strict";
/*
archivo -> manejador.ts

Namespace Manejador

función CrearAlumno():void

obtiene por ID, los valores para:
*-apellido, nombre y legajo.
Crea un objeto de tipo Alumno y lo muestra:
*-por consola
*-por alert

Generar documento HTML para crear alumnos

inputs, button (asociar onclick a la funcion CrearAlumno)

*/
/// <reference path = "./persona.ts"/>
/// <reference path = "./alumno.ts"/>
var Manejador;
(function (Manejador) {
    function CrearAlumno() {
        let alumno = new Prueba.Alumno(document.getElementById("txt_Apellido").value, document.getElementById("txt_Nombre").value, parseInt(document.getElementById("txt_Legajo").value));
        alert(alumno.ToString());
        console.log(alumno.ToString());
    }
    Manejador.CrearAlumno = CrearAlumno;
})(Manejador || (Manejador = {}));
//# sourceMappingURL=manejador.js.map