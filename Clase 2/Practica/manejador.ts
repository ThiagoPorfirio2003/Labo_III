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

namespace Manejador
{
    export function CrearAlumno() : void
    {
        let alumno : Prueba.Alumno = new Prueba.Alumno((<HTMLInputElement>document.getElementById("txt_Apellido")).value,
        (<HTMLInputElement>document.getElementById("txt_Nombre")).value,
        parseInt((<HTMLInputElement>document.getElementById("txt_Legajo")).value));
    
        alert(alumno.ToString());
        console.log(alumno.ToString());
    }
}