const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
const lampada = document.getElementById('lamp')
const restaurar = document.getElementById('restaurar')

function estaquebrada(){
    return lampada.src.indexOf('quebrada') > -1
    //isso retorna True ou False
}

function lampLigada(){
    if(!estaquebrada()){
        lampada.src = 'img/ligada.jpg'
    }
}

function lampDesligada(){
    if(!estaquebrada()){
        lampada.src = 'img/desligada.jpg'
    }
}

function quebrada(){
    lampada.src = 'img/quebrada.jpg'
}

function lamprestaurar(){
    lampada.src = 'img/desligada.jpg'
}

ligar.addEventListener('click',lampLigada)
desligar.addEventListener('click',lampDesligada)

lampada.addEventListener('mouseover',lampLigada)
lampada.addEventListener('mouseleave',lampDesligada)

lampada.addEventListener('dblclick',quebrada)

restaurar.addEventListener('click',lamprestaurar)