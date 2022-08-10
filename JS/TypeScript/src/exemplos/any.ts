let valorAny:any;

valorAny=3;
valorAny='ola';
valorAny=true;

let valorString:string ='teste';
valorString=valorAny;
valorString=valorAny;
let valorString2:string="tes"
valorString2=valorAny;


function somarString(str1:string,str2:string){
    console.log(str1+str2);
}
//Diferença de resultados com o uso de any
somarString(valorString,valorString2),
somarString("ola","ola")