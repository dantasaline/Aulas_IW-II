var result = document.getElementById('resultado')

function pegasoma(){
    var num1 = Number(document.getElementById('n1').value)
    var num2 = Number(document.getElementById('n2').value)
    var soma = num1 + num2
    resultado.innerHTML = soma
    console.log('Resultado da soma: ', soma)
}

function pegasub(){
    var num1 = (document.getElementById('n1').value)
    var num2 = (document.getElementById('n2').value)
    var sub = num1 - num2
    resultado.innerHTML = sub
    console.log('Resultado da subtração: ', sub)
}

function pegamult(){
    var num1 = (document.getElementById('n1').value)
    var num2 = (document.getElementById('n2').value)
    var mult = num1 * num2
    resultado.innerHTML = mult
    console.log('Resultado da multiplicação: ', mult)
}

function pegadivi(){
    var num1 = (document.getElementById('n1').value)
    var num2 = (document.getElementById('n2').value)
    var divi = num1 / num2
    resultado.innerHTML = divi
    console.log('Resultado da Divisão: ', divi)
}

function limpa(){
    result.innerHTML = '0'
    n1.innerHTML = ''
    n2.innerHTML = ''
}