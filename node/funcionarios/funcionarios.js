
const url2 = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')


axios.get(url2).then(response => {
    const retorno = response.data
    var funcionario = retorno.filter(func => func.pais == "China" && func.genero == "F").reduce(function(funcR, func){
        if(func.salario < funcR.salario){
            return func
        }else{
            return funcR
        }
    })
    console.log(funcionario)
})
