"use strict";
/*
Crear una función que realice el cálculo factorial del número que recibe como parámetro.
Nota: Utilizar console.log()
*/
/*
function ejer_08(numero : number) : void
{
    let factorial : number = numero;
    for(let i : number = numero-1; i > -1; i--)
    {
        factorial *= numero;
    }

    console.log(`El factorial de ${numero} es ${factorial}\n`);
}

for(let i : number = 1; i <= 10; i++)
{
    ejer_08(5);
}
*/
function ejer_08(numero) {
    let factorial = numero;
    for (let i = numero - 1; i > 0; i--) {
        factorial *= i;
    }
    return `El factorial de ${numero} es ${factorial}`;
}
for (let i = 1; i <= 10; i++) {
    console.log(ejer_08(i) + "\n");
}
//# sourceMappingURL=ejer_08.js.map