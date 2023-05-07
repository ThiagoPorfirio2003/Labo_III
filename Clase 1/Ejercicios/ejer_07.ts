/*
Se necesita mostrar por consola los primeros 20 números primos. Para ello realizar una
función.
Nota: Utilizar console.log()
*/

function ejer_07(cantidad_Primos : number = 20) : void
{
    let primosEncontrados : number = 0;
    let numeroActual : number =2;
    let cantidad_Divisores : number = 0;
    while(primosEncontrados < cantidad_Primos)
    {
        for(let i : number =1; i<=numeroActual;i++)
        {
            if(numeroActual % i==0)
            {
                cantidad_Divisores++;
                if(cantidad_Divisores > 2)
                {
                    break;
                }
            }
        }
        if(cantidad_Divisores == 2)
        {
            primosEncontrados++;
            console.log(`${primosEncontrados}: ${numeroActual}`);
        }
        cantidad_Divisores =0;
        numeroActual++;
    }
}

ejer_07();