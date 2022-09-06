const somarNumeros = function(array){
    return array.reduce((total,valor) => total += valor)
}

console.log(somarNumeros([10,10,10]))
console.log(somarNumeros([15,15,15,15]))