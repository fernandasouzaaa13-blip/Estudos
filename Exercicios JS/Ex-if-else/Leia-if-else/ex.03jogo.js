const leia = require("prompt-sync")()

let jogador = leia("Pedra, papel ou tesoura? ")

let computador = Math.floor(Math.random() * 3)

if (computador == 0) {
    computador = "pedra"
}
else if (computador == 1) {
    computador = "papel"
}
else {
    computador = "tesoura"
}

console.log(`Jogador: ${jogador}`)
console.log(`Computador: ${computador}`)

if (jogador == computador) {
    console.log("Empate")
}
else if (
    jogador == "pedra" && computador == "tesoura" ||
     jogador == "papel" && computador == "pedra" ||
     jogador == "tesoura" && computador == "papel"
) {
    console.log("Você venceu!")
}
else {
    console.log("Computador venceu!")
}