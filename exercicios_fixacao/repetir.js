const repetir = function(valor, repeticoes){
    let array = []
    for(let i = 0; i < repeticoes;i++){
        array.push(valor)
    }

    return array
}

const repetir2 = function(valor, repeticoes){
    return Array(repeticoes).fill(valor)
}

console.log(repetir("código",2))
console.log(repetir(7,3))

console.log(repetir2("código",2))
console.log(repetir2(7,3))