obj1 = {
    nome: "Maria",
    profissao: "Desenvolvedora de software"
    }

 obj2 =  {
        codigo: 11111,
        preco: 12000
        }

function objetoParaArray(objeto){
    const resultado = []

    for(let chave in objeto){
        resultado.push([chave,objeto[chave]])
    }

    return resultado
}

function objetoParaArray2(objeto){
    const chaves = Object.keys(objeto)
    const resultado = chaves.map(chave => [chave, objeto[chave]])

    return resultado
}


function objetoParaArray3(objeto){
    return Object.entries(objeto)
}

console.log(objetoParaArray(obj1))
console.log(objetoParaArray2(obj1))
console.log(objetoParaArray3(obj1))