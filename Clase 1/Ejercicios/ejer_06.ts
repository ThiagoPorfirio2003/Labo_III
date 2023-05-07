/*
Realizar una función que reciba como parámetro un número y que retorne el cubo del
mismo.
Nota: La función retornará el cubo del parámetro ingresado. Realizar una función que
invoque a esta última y permita mostrar por consola el resultado.
*/

function ejer_06(numero : number): number
{
    return Math.pow(numero,3);
}

for(let i : number = 0; i<10; i++)
{
    console.log(`${i} -> ${ejer_06(i)}\n`);
}