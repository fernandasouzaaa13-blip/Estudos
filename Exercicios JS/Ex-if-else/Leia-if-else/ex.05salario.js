const leia = require("prompt-sync")();

let salario = Number(leia("Digite o seu salário: "))
let parcela = Number(leia("Digite a parcela: "))
let valorparcela = salario * (30 / 100)
if (parcela > valorparcela) {
  console.log("Negado")
} else {
  console.log("Aprovado")
}
