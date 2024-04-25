var result = document.getElementById('resultado')

function peganome(){
    var nome = document.getElementById('nome').value
    console.log('Nome: ', nome)
    resultado.innerHTML = nome
}

