"use strict";
/*
Se necesita mostrar por consola los primeros 20 números primos. Para ello realizar una
función.
Nota: Utilizar console.log()
*/
function ejer_07(cantidad_Primos = 20) {
    let primosEncontrados = 0;
    let numeroActual = 2;
    let cantidad_Divisores = 0;
    while (primosEncontrados < cantidad_Primos) {
        for (let i = 1; i <= numeroActual; i++) {
            if (numeroActual % i == 0) {
                cantidad_Divisores++;
                if (cantidad_Divisores > 2) {
                    break;
                }
            }
        }
        if (cantidad_Divisores == 2) {
            primosEncontrados++;
            console.log(`${primosEncontrados}: ${numeroActual}`);
        }
        cantidad_Divisores = 0;
        numeroActual++;
    }
}
ejer_07();
//# sourceMappingURL=ejer_07.js.map