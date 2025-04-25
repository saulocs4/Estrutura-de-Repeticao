let cor

do {
    cor = prompt(`Digite a cor da etiqueta: verde, amarelo, azul ou vermelho`).toLowerCase()
} while (cor != 'verde' || cor != 'amarelo' || cor != 'azul' || cor != 'vermelho')

const preco = Number(prompt(`Digite o preço do produto`))
let desconto

switch (cor) {
    case `verde`:
        desconto = 0.1
        break
    case `amarelo`:
        desconto = 0.2
        break
    case 'azul':
        desconto = 0.3
        break
    case 'vermelho':
        desconto = 0.4
        break
    default:
        alert('Voce digitou uma etiqueta que não existe')
}

let valorDescontado = preco * (1 - desconto)
valorDescontado = preco - (preco - desconto)

let resposta = alert(`O valor total é ${preco} e com desconto ficou ${valorDescontado}`)