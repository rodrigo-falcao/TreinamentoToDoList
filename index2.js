const carregarTarefas = () => {
    let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    
    tarefas.forEach((tarefa) => {
        let lista = document.createElement('li');
        lista.textContent = tarefa;
        
        let botao = excluirBotao(tarefa);
        lista.appendChild(botao);
        
        document.getElementById('lista').appendChild(lista)
    });
}

document.addEventListener('DOMContentLoaded', carregarTarefas);

function adicionarTasks() {
    let input = document.getElementById('tarefa');
    let texto = input.value.trim();

    if(texto === ''){
        alert('É necessário adicionar uma tarefa válida!');
        return;
    }

    let lista = document.createElement('li');
    lista.textContent = texto;

    let botao = excluirBotao(texto);
    lista.appendChild(botao)
    
    document.getElementById('lista').appendChild(lista);
    
    salvarNoLocalStorage(texto);
    input.value = '';
    console.log(texto)
}

function excluirBotao(texto) {
    let botao = document.createElement('button');
    botao.textContent = 'X';
    botao.onclick = function() {
        this.parentElement.remove();
        removerTarefaDoLocalStorage(texto);
    }
    return botao;
}

const salvarNoLocalStorage = (texto) => {
    let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    tarefas.push(texto);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

const removerTarefaDoLocalStorage = (tarefa) => {
    let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    tarefas = tarefas.filter(item => item !== tarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}