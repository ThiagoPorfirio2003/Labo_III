/*
Realizar una función que reciba un número y que muestre (por consola) un mensaje
como el siguiente:
El número 5 es impar, siendo 5 el número recibido como parámetro.
*/

//let meses : string[] = ["enero", "Febrero"];
function ejer_04(numero : number) : void
{
    let mensaje : string = "impar";
    
    if(numero%2==0)
    {
        mensaje = "par"
    }

    console.log(`El ${numero} es ${mensaje}`);
}

ejer_04(5);