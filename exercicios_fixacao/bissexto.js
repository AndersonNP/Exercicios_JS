const isBissexto = function(ano){
    if(ano%4 === 0){
        if(ano%100 === 0){
            if(ano%400 === 0){
                console.log("é bissexto")
            }else{
                console.log("não é bissexto")
            }
        }else{
            console.log("é bissexto")
        }
    }else{
        console.log("não é bissexto")
    }
}



isBissexto(2028)