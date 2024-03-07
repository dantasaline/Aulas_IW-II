var altura = document.getElementById('altura')
var peso = document.getElementById('peso')
var resultado = document.getElementById('resultado')
var diag = document.getElementById('diag')

function calculo(){
    var altura = Number(document.getElementById('altura').value)
    var peso = Number(document.getElementById('peso').value)
    var conta = peso/(altura^2)
    resultado.innerHTML = conta
    console.log('Resultado da operação é: ', conta)
}

function limp(){
    resultado.innerHTML = '0'
    document.getElementById('altura').value = ''
    document.getElementById('peso').value = ''
}

