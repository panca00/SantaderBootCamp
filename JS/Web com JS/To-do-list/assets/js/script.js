const from =document.getElementById('flex-container');
const tarefas=document.getElementById('tarefas');


//funcção para captar o que foi submetido pelo formulario
from.onsubmit = function(e){
    e.preventDefault();
    const inputField=document.getElementById('entrada');
    addTask(inputField.value);
    from.reset();
};


function addTask(description) {
    const taskContainer =document.createElement('div');
    const newTask = document.createElement('input');
    const taskLabel =document.createElement('label');
    const taskDescriptionNode=document.createTextNode(description);

    //Criando o check box com nome e id igual ao atributo
    newTask.setAttribute('type','checkbox');
    newTask.setAttribute('name',description);
    newTask.setAttribute('id',description);
    //Criando o texto com a descrição
    taskLabel.setAttribute('for',description);
    taskLabel.appendChild(taskDescriptionNode);
    //unindo tudo
    taskContainer.classList.add('item-tarefa');
    taskContainer.appendChild(newTask);
    taskContainer.appendChild(taskLabel);
    var r=Math.random()*255;
    var g=Math.random()*255;
    var b=Math.random()*255;    
    taskContainer.style.backgroundColor = 'rgb('+r+","+g+","+b+")";

    tarefas.appendChild(taskContainer);
    
    
}
