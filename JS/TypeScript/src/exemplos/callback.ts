function printaValoresNumericos(num1:number,num2:number):void{
    console.log(num1+num2);
}

function somarValoresNumericos(num1:number,num2:number,callback:(num:number)=>number):number{
let resultado =num1+num2;
return callback(resultado);
}

function aoQuadrado(num:number):number{
    return num*num;
}

console.log(somarValoresNumericos(1,3,aoQuadrado));