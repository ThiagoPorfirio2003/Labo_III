/*
Realizar una función que solicite (por medio de un parámetro) un número. Si el número
es positivo, se mostrará el factorial de ese número, caso contrario se mostrará el cubo de
dicho número.
Nota: Reutilizar la función que determina el factorial de un número y la que calcula el
cubo de un número.
*/

function ejer_080(numero : number) : string
{
    let factorial : number = numero;
    for(let i : number = numero-1; i > 0; i--)
    {
        factorial *= i;
    }

    return `El factorial de ${numero} es ${factorial}`;
}

function ejer_10(numero : number) : string
{
    let retorno : string;

    if(numero > 0)
    {
        retorno = ejer_080(numero);
    }
    else
    {
        retorno = (String)(Math.pow(numero,3));
    }

    return retorno;
}

for(let i : number = -5; i <= 5; i++)
{
    //if(i != 0)
    //{
        console.log(ejer_10(i)+ "\n");
    //}
}