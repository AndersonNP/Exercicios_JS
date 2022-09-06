const simboloMais = function(valor){
    let simbolo = ""
    for(let i = 0; i < valor;i++){
        simbolo += "+"
    }

    return simbolo
}

const simboloMais2 = function(valor){
    return Array(valor).fill("+").join("")
}

const simboloMais3 = function(valor){
    return "+".repeat(valor)
}

console.log(simboloMais(3))
console.log(simboloMais2(3))
console.log(simboloMais3(3))