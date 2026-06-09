const leia = require("prompt-sync")()

let compra = Number(leia("Digite o valor da compra: "))
let desconto = 0
let valorFinal = 0

if (compra >= 100 && compra < 200) {
    desconto = 10
}
else if (compra >= 200 && compra < 500) {
    desconto = 20
}
else if (compra >= 500) {
    desconto = 30
}

valorFinal = compra - (compra * desconto / 100)

console.log(`Desconto aplicado: ${desconto}%`)
console.log(`Valor final: R$ ${valorFinal}`)

