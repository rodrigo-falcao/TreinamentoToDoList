const adicionarTasks = () => {
    let input = document.getElementById('tarefa');
    let texto = input.value.trim();

    if(texto === ''){
        alert('É necessário adicionar uma tarefa válida!')
        return;
    }

    let lista = document.createElement('li');
    lista.textContent = texto;

    let botao = excluirTarefa(lista);
    lista.appendChild(botao);

    document.getElementById('lista').appendChild(lista);
    input.value = '';
    return lista;
}

const excluirTarefa = (lista) => {
    let botao = document.createElement('button');
    botao.textContent = 'X'
    botao.onclick = function() { lista.remove(); };
    return botao;
}
