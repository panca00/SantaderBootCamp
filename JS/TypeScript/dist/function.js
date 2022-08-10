"use strict";
//tipando tanto a entrada como a saida da funcao
function somarValores(input1, input2) {
    if (typeof input1 === "string" || typeof input2 === "string") {
        return input1.toString() + input2.toString();
    }
    return input1 + input2;
}
//retorno vazio
function somarValores1(input1, input2) {
    if (typeof input1 === "string" || typeof input2 === "string") {
        console.log(input1.toString() + input2.toString());
    }
    else {
        console.log(input1 + input2);
    }
}
console.log(somarValores(1, 3));
console.log(somarValores(4, 3));
console.log(somarValores('ola', ' tudo bem?'));
console.log(somarValores('1', 3));
