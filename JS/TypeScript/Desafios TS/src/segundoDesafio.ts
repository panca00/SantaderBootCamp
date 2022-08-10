const pessoa1 = {} as Pessoa;
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz";

const pessoa2 = {} as Pessoa;
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3:Pessoa = {
    nome: "laura",
    idade: 32,
    profissao: "Atriz"
};

let pessoa4:Pessoa = {
    nome: "carlos",
    idade: 19,
    profissao: "padeiro"
}
//pode usar type ou interface
type Pessoa = {
    nome:string,
    idade:number,
    profissao:string
}
//
/*
enum Trabalho {
    Atriz,
    Padeiro
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa1: Humano = {
    nome: 'maria',
    idade: 29,
    profissao: Trabalho.Atriz
};

let pessoa2: Humano = {
    nome: 'roberto',
    idade: 19,
    profissao: Trabalho.Padeiro
};

let pessoa3: Humano = {
    nome: 'laura',
    idade: 32,
    profissao: Trabalho.Atriz
};

let pessoa4: Humano = {
    nome: "carlos",
    idade: 19,
    profissao: Trabalho.Padeiro
}*/