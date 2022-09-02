const x = 'Global'

function fora(){
    const x = 'loja'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())