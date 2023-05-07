"use strict";
/*
Realizar una función que reciba un parámetro requerido de tipo numérico y otro opcional
de tipo cadena. Si el segundo parámetro es recibido, se mostrará tantas veces por
consola, como lo indique el primer parámetro. En caso de no recibir el segundo
parámetro, se mostrará el valor inverso del primer parámetro.
*/
function F1(numero, cadena) {
    let salida;
    salida = numero * -1;
    //salida = "Numero inverso";
    if (cadena) {
        for (let i = 0; i < numero /* i<6*/; i++) {
            console.log(cadena + "\n");
        }
    }
    else {
        console.log(salida);
    }
}
F1(5, "Pepe");
/*
var f1 : Function = function(numero : Number, cadena? : string) : void
{
    if(cadena)
    {
        for(let i : Number = 0; i<numero /* i<6;i++)
        {
            console.log(cadena + "<br>");
        }
    }
    else
    {
        console.log("-" + numero);
    }
}
*/ 
//# sourceMappingURL=ejer_03.js.map