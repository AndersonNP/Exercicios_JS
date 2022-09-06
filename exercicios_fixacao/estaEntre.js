const estaEntre = function(numero, minimo, maximo, inclusivo){
    if(inclusivo){
        console.log(numero >= minimo && numero <= maximo)
    }else{
        console.log(numero > minimo && numero < maximo)
    }
}

estaEntre(10,10,50)
estaEntre(16,10,160)
estaEntre(3,3,150)
estaEntre(3,3,150,true)