
/*
Cree una aplicación que muestre, a través de un Array, los nombres de los meses de un
año y el número al que ese mes corresponde. Utilizar una estructura repetitiva para
escribir en la consola (console.log()).
*/

function ejer_02()
{
    let meses : string[] = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    for(let i : number = 0; i<12; i++)
    {
        console.log(`${meses[i]}: ${i+1}`);
    }
}



