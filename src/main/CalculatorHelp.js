

export function whichOperation(sinal,valor1,valor2){
    if(sinal === '+'){
        return some(valor1,valor2)
    }else{
        if(sinal === '-'){
            return subtraction(valor1,valor2)
        }else{
            if(sinal === '*'){
                return multiplication(valor1,valor2)
            }else{
                if(sinal === '/'){
                    return division(valor1,valor2)
                }else{
                    console.log('@_@ houve algum erro')
                }
            }
        }
    }
}

function some(valor1,valor2){
    const vl1 = parseInt(valor1)
    const vl2 = parseInt(valor2)   
    return  vl1 + vl2
}
function subtraction(valor1,valor2){
    return valor1 - valor2
}
function multiplication(valor1,valor2){
    return valor1 * valor2
}
function division(valor1,valor2){
    return valor1 / valor2
}