// Crie um programa que peça ao usuário para digitar uma senha.
// Continue pedindo a senha até que o usuário digite "1234". 
// Use um laço do…while para controlar as tentativas 
// e, quando a senha correta for inserida, exiba a mensagem "Acesso Permitido".

const senha

do {
    senha = prompt(`Digite sua senha`)
} while(senha !== 1234)
    alert(`Acesso Permitido`);


// Exercicio 3

let alunos = parseInt(prompt(`Digite a quantidade de alunos`))
let notas = 0

for (let index = 1; index <= alunos; index++) {
    notas += parseInt(prompt(`Ddigite a nota`))
}

const media = notas/alunos
alert(`A media dos alunos é ${media}`)

// Exercicio 4

