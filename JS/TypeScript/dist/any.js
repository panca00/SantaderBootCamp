"use strict";
let valorAny;
valorAny = 3;
valorAny = 'ola';
valorAny = true;
let valorString = 'teste';
valorString = valorAny;
valorString = valorAny;
let valorString2 = "tes";
valorString2 = valorAny;
function somarString(str1, str2) {
    console.log(str1 + str2);
}
//Diferença de resultados com o uso de any
somarString(valorString, valorString2),
    somarString("ola", "ola");
