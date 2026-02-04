const button = document.querySelector(".button-add-task");
const input = document.querySelector(".input-task");
const listaCompleta = document.querySelector('.list-tasks');
let minhaListaDeItens = []; 

function adicionarTarefa(){
    minhaListaDeItens.push({
        tarefa: input.value, 
        concluida: false
    })

    input.value = '';

    mostrarTarefa();

}

function mostrarTarefa(){
    let novaLi = '';

    minhaListaDeItens.forEach((item, index) => {
        novaLi = novaLi + `
        <li class = "task ${item.concluida && "done"} ">
            <img src="./Imagens_a_usar/check.png" alt="check na tarefa" onclick="tarefaConcluida(${index})">
            <p> ${item.tarefa} </p>
            <img src="./Imagens_a_usar/delete.png" alt= "tarefa eliminada!" onclick="eliminarTarefa(${index})">
        </li>`
    })

    listaCompleta.innerHTML=novaLi
}

function tarefaConcluida (index){
    minhaListaDeItens[index].concluida = !minhaListaDeItens[index].concluida
    mostrarTarefa()
}

function eliminarTarefa(index){
    minhaListaDeItens.splice(index, 1);
    mostrarTarefa();
}


button.addEventListener('click', adicionarTarefa);