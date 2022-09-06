const removerPropriedade = function(objeto, propriedade){
    const copia = Object.assign({}, objeto)
    delete copia[propriedade]
    return copia
}

let teste = {a: 1, b:2}
let teste2 = removerPropriedade(teste, "a")
console.log(teste2)
console.log(teste)
console.log(Object.is(teste2,teste))

