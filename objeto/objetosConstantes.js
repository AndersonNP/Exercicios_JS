const pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)
//pessoa = { nome: 'Ana'}

Object.freeze(pessoa)
pessoa.nome = 'Maria'
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Joao'})
pessoaConstante.nome = 'Teste'
console.log(pessoaConstante)

