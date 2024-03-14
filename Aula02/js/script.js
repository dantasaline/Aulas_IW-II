const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
const lampada = document.getElementById('lamp')
const rest = document.getElementById('rest')
const int = document.getElementById('int')
const texto = document.getElementById('texto')

function estaquebrada(){
    return lampada.src.indexOf('quebrada') > -1
    //retorna true ou false
}

function inte(){
    return lampada.src.indexOf('desligada') > -1
}

function inter(){
    if(!estaquebrada()){
        if(inte()){
        lampada.src = 'img/ligada.jpg'
        texto.innerHTML = 'A lâmpada está ligada'
      }
        else{
        lampada.src = 'img/desligada.jpg'
        texto.innerHTML = 'A lâmpada está desligada'
      }
    }
}

function lampligada(){
    if(!estaquebrada()){
        lampada.src = 'img/ligada.jpg'
        texto.innerHTML = 'A lâmpada está ligada'
    }  
}

function lampdesligada(){
    if(!estaquebrada()){
        lampada.src = 'img/desligada.jpg'
        texto.innerHTML = 'A lâmpada está desligada'
    } 
}

function lampquebrada(){
    lampada.src = 'img/quebrada.jpg'
    texto.innerHTML = 'A lâmpada está quebrada'
}

function restaurar(){
    lampada.src = 'img/desligada.jpg'
    texto.innerHTML = 'A lâmpada foi restaurada'
}

int.addEventListener('click',inter)
ligar.addEventListener('click',lampligada)
desligar.addEventListener('click',lampdesligada)

lampada.addEventListener('mouseover',lampligada)
lampada.addEventListener('mouseleave',lampdesligada)

lampada.addEventListener('dblclick', lampquebrada)

rest.addEventListener('click', restaurar)
