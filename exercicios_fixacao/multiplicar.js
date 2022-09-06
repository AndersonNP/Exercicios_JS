const multiplicar = function(valor1, valor2){
    let total = 0;
    if(valor1 === 0 || valor2 === 0) return total

    for(let i = 0; i < valor2; i++){
        total += valor1
    }

    return total
}

console.log(multiplicar(5,5))
console.log(multiplicar(5,0))
console.log(multiplicar(4,3))
