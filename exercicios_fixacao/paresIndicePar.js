const paresIndicePar = function(array){
    return array.filter((valor,indice) => valor%2 == 0 && indice%2 == 0)
}

console.log(paresIndicePar([1,2,3,4]))
console.log(paresIndicePar([10,70,22,43]))