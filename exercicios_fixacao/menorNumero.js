const menorNumero = function(array){
    return array.reduce((menor,valor) => menor <= valor ? menor : valor)
}

const menorNumero2 = function(array){
    return Math.min(...array)
}

console.log(menorNumero([10,5,35,65]))
console.log(menorNumero([5,-15,50,3]))

console.log(menorNumero2([10,5,35,65]))
console.log(menorNumero2([5,-15,50,3]))