let anyEstadeVolta:any;
anyEstadeVolta=3;
anyEstadeVolta='teste'


let stringTeste :string='verificar'

stringTeste=anyEstadeVolta;

let unknownValor:unknown;
unknownValor=3;
unknownValor='opa';
unknownValor=true;
unknownValor='vai sim';

let stringTeste2:string='agora vai';

//stringTeste2=unknownValor// não funciona sem uma verificação

if(typeof unknownValor==='string'){
    stringTeste2=unknownValor;
}
//codigo never, que nunca irá finalizar e que não retorna nada, um codigo 
//que impede de finalizar
function jogaErro(erro:string,codigo:number):never{
    throw{error:erro,code:codigo}
}

jogaErro('Deu erro',500)