function CriarPessoa(nome){
    return{
        nome: nome,
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}


const teste = CriarPessoa('Teste')
teste.falar()

