const input = document.getElementById('taskInput');
const ul = document.getElementById('taskList');

function addTask() {
    if(input.value !== "") {
        const li = document.createElement("li");
        li.textContent = input.value;
        const removerBotao = document.createElement("Button");

        removerBotao.textContent = "Remover";

        removerBotao.onclick = function() {
            ul.removeChild(li);
        }

        ul.appendChild(li);
        li.appendChild(removerBotao);

        input.value = "";
    }
    else {
        alert("Por favor, insira uma tarefa");
    }
}