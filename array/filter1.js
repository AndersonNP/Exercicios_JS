const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]


function isCaro(p){
    return p.preco >= 500
}

function isFragil(p){
    return p.fragil
}

console.log(produtos.filter(isCaro).filter(isFragil))