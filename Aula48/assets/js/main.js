const inputTarefa = document.querySelector ('.input-tarefa');
const btnTtarefa = document.querySelector ('.btn-tarefa');
const tarefas = document.querySelector ('.tarefas');

function criaLi() {
    const li=document.createElement('li'); 
    return li;
}

inputTarefa.addEventListener('keypress',function (e) {
    console.log(e)
    if (e.keyCode === 13){
        console.log(e)
        if (!inputTarefa.value) return;
        ciraTarefa(inputTarefa.value);
    }
});

function ciraTarefa(textoInput) {
   const li = criaLi();
   li.innerText=textoInput;
   tarefas.appendChild(li);
}



btnTtarefa.addEventListener('click',function(e){
    if (!inputTarefa.value) return;
    ciraTarefa(inputTarefa.value);
});