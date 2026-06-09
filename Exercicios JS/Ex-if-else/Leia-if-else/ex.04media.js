const leia = require("prompt-sync")()

let nota1 = Number(leia("Digite a primeira nota: "))
let nota2= Number(leia("Digite a segunda nota: "))
let nota3= Number(leia("Digite a terceira nota: "))
// Processamento 
let media = (nota1+nota2+nota3)/3
console.log(`A sua média: ${media}!`)

if (media >= 9) {
    console.log("Aprovado")
    console.log("Excelente aluno!")
}
else if (media < 9 && media >=6) {
    console.log("Recuperação" )
}
else  {
    console.log("Reprovado")
}
