var altura = document.getElementById('altura')
var peso = document.getElementById('peso')
var resultado = document.getElementById('resultado')
var diag = document.getElementById('diag')
var sexo = document.getElementById("sexo").value

function calculo(){
    var altura = Number(document.getElementById('altura').value)
    var peso = Number(document.getElementById('peso').value)
    var conta = peso/(altura^2)
    resultado.innerHTML = conta
    diag.innerHTML = classIMC(sexo, conta)
    console.log('Resultado da operação é: ', conta)
}

function limp(){
    resultado.innerHTML = '0'
    document.getElementById('altura').value = ''
    document.getElementById('peso').value = ''
}

function classIMC(sexo, conta){
    if(sexo = "masculino"){
        return classmasc(conta)
    }
    else{
        return classificarFeminino(conta)
    }
}

function classmasc(conta){
    if(conta<18.5){
        return "Baixo peso"
    }
    else if(conta >= 18.5 && conta < 24.9){
    return "Normal"
    }
    else if(conta >= 25 && conta < 29.9){
    return "Sobrepeso"
    }
    else if(conta > 30){
    return "Obesidade"
    }
}

function classfem(conta){
    if(conta<18.5){
        return "Baixo peso"
    }
    else if(conta >= 18.5 && conta < 24.9){
    return "Normal"
    }
    else if(conta >= 25 && conta < 29.9){
    return "Sobrepeso"
    }
    else if(conta > 30){
    return "Obesidade"
    }
}