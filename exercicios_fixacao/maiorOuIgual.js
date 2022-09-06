const maiorOuIgual = function(valor1, valor2){
    if(typeof valor1 != typeof valor2)
        return false
    return valor1 >= valor2
} 

console.log(maiorOuIgual(0,0))
console.log(maiorOuIgual(0,"0"))
console.log(maiorOuIgual(5,1))


console.log(typeof 0, typeof "0")