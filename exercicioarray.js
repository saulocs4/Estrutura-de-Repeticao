//**Cenário 1: Gerenciamento de Tarefas**

// Desenvolva um script que permita ao usuário criar uma lista de tarefas. 
// O usuário deve ser capaz de adicionar múltiplas tarefas ao final da lista até decidir parar. Ao final da adição, a lista completa de tarefas deve ser exibida. 
// Em seguida, o script deve perguntar se o usuário deseja remover a primeira tarefa da lista, realizando a remoção (se houver tarefas) e mostrando a lista atualizada, ou informando que não há tarefas a serem removidas.

let tarefas = [];
let adicionarTarefa = prompt(`Digite uma tarefa`)

while(adicionarTarefa !== `0`) {
    tarefas.push(adicionarTarefa)
    adicionarTarefa = prompt(`Digite uma tarefa ou 0 para sair`)
}