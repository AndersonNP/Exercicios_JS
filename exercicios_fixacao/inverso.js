const inverso = function(valor){
    if(typeof valor === "number"){
        console.log(valor * -1)
    }else if(typeof valor === "boolean"){
        console.log(!valor)
    }else{
        console.log("booleano ou números esperado, mas o parâmetro é do tipo string")
    }
}

inverso(true)
inverso("6")
inverso(-2000)
inverso("programação")
