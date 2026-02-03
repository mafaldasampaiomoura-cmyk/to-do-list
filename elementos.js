const inputBox = document.getElementById("input-box").value;
const listaContainer = document.getElementById("lista-container")


function adicionarTarefa(){
    if (inputBox.value === ""){ //caso a caixa onde escrevo esteja vazia... eu faço um alerta para que a caixa não siga vazia 
        alert("Por favor, escreva algo!")
    }else {
        let li = document.createElement("li"); 
        li.innerHTML = inputBox.value; 
        listaContainer.appendChild(li);
    }
}

function apagarTarefa(){
    li.parentElement.remove()

}