const media = array => array.reduce((total,valor) => total += valor)/array.length

console.log(media([2,10]))
console.log(media([1,2,3,4,5]))