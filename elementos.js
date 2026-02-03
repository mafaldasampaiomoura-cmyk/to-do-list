const inputBox = document.getElementById("input-box");
const listaContainer = document.getElementById("lista-container");

function adicionarTarefa(){
    if (inputBox.value === ""){ //caso a caixa onde escrevo esteja vazia... eu faço um alerta para que a caixa não siga vazia 
        alert("Por favor, escreva algo!")
    }else {
        let li = document.createElement("li"); // crio um li de forma a que crie todos os elementos a partir daí, que vou adicionar à minha lista 

        li.innerHTML = inputBox.value; 
        listaContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // "\u00d7 significa que ele vai criar a cruz no final do to-do-list" O span é um markup que serve para 
        li.appendChild(span);
    }
    inputBox.value="";
}

listaContainer.onclick = function(e) { //(e) corresponde a um evento. Ou seja para ele saber que, efetivamente, houve um clique. 
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
};