"use strict";
const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora',
};
pessoa.idade = 29;
const andre = {
    nome: 'Andre',
    idade: 25,
    profissao: "pintor"
};
const paula = {
    nome: 'Paula',
    idade: 25,
    profissao: "Desenvolvedora"
};
//Usando elementos do TypeSCRIPT
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora,
};
const maria = {
    nome: 'Maria',
    idade: 23,
    profissao: Profissao.Desenvolvedora,
};
const jessica = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['Portugues', 'Ingles']
};
const monica = {
    nome: 'monica',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['Portugues', 'Ingles']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(monica.materias);
