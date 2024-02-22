const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
const lampada = document.getElementById('lamp')

function lampLigada(){

    lampada.src = 'img/ligada.jpg'

}

function lampDesligada(){

    lampada.src = 'img/desligada.jpg'

}

interruptor.addEventListener('click', lampLigada)
interruptor.addEventListener('dblclick', lampDesligada)