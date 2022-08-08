const alunos=[

    {
        nome:'João',
        nota:5,
        turma:'1B',
    },
    {
        nome:'Sofia',
        nota:9,
        turma:'1B',
    },
    {
        nome:'Paulo',
        nota:6,
        turma:'2C',
    }

];




function alunosAprovados(arr,media) {
    let aprovados=[];

    for(let i=0;i<arr.length;i++){
        //Metodo destruct, utilizando apenas as propriedades que queremos do array
        const {nota,nome}=arr[i];

        if(nota>=media){
            aprovados.push(nome);
        }
    }
    return aprovados;

}

function calculaIdade(anos){
    return`Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade +anos } anos de idade.`;
}

const passoa1={
    nome:"Maria",
    idade:30
};

const pessoa2={
    nome:"Carla",
    idade:26
};

const animal={
    nome:"Fioa",
    idade:5,
    raca:"pug",
};

//Formas de modficar o valor de this, que agr refere a uma constante exter
console.log(calculaIdade.call(animal,30))
console.log(calculaIdade.apply(animal,30))
//console.log(alunosAprovados(alunos,5));