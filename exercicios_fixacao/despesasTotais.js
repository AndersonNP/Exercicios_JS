const despesasTotais = function(produtos){
    return produtos.map(produto => produto.preco).reduce((total,valor) => total += valor)
}

console.log(despesasTotais([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
]))

console.log(despesasTotais([
    {nome: "Galaxy S20", categoria: "Eletronicos", preco: 3599.99},
    {nome: "Macbook pro", categoria: "Eletronicos", preco: 30999.90}
]))