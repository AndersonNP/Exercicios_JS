const filtrarNumeros = function(array){
    return array.filter(valor => typeof valor === 'number')    
}

console.log(filtrarNumeros(["javascript",1,"3","Web",20]))
console.log(filtrarNumeros(["a","c"]))
