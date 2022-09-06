const primeiroUltimoElemento = function(array){
    return [array[0],array[array.length-1]]
}

const primeiroUltimoElemento2 = function(array){
    return [array.shift(),array.pop()]
}

console.log(primeiroUltimoElemento([7,14,"olá"]))
console.log(primeiroUltimoElemento([-100, "aplicativo", 16]))

console.log(primeiroUltimoElemento2([7,14,"olá"]))
console.log(primeiroUltimoElemento2([-100, "aplicativo", 16]))