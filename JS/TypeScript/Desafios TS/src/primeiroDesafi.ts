//#Metodo 1

const empregado:{code:number,name:string}={
    code:12,
    name:"Andre",
}
//#Metodo 2
const empregado2={
    code:12,
    name:"Andre",
}

//#Metodo 3
interface Emprego {
    nome:string,
    code:number
}

const antonio:Emprego={
    nome:"Antonio",
    code:12,
}

//#Metodo 4

const lucas={} as Emprego;
lucas.nome="Lucas";
lucas.code=14;