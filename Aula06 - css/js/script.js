/* Arquivo JS + alterar CSS */

let titulo = document.querySelector('h1')
titulo.textContent = 'Aula 09 Manipular CSS'
titulo.innerHTML = 'Aula Manipular CSS'
let imagem = document.querySelector('#foto')
imagem.setAttribute('width', '300px')

/* MANIPULAR CSS */
document.querySelector('h1').style.color = "brown";
titulo.style.color = "brown";
titulo.style.backgroundColor = "lightgray";
titulo.style.borderBottom = "5px solid brown";
titulo.style.padding = "0.625rem";
titulo.style.borderRadius = "5px";

let box = document.querySelectorAll('.box')
box[0].setAttribute('class', 'escura')
box[0].removeAttribute('class')

/////// MODOS DE COR ///////
let tela = document.querySelector('main')

let btnDark = document.querySelector('#btdark')

let btnLight = document.querySelector('#btlight')

let btnRosa = document.querySelector('#btrosa')

let btnAzul = document.querySelector('#btazul')

let btnAmarelo = document.querySelector('#btamarelo')

let btnVermelho = document.querySelector('#btvermelho')

btnDark.addEventListener('click', modoDark)
btnLight.addEventListener('click', modoLight)
btnRosa.addEventListener('click', modoRosa)
btnAzul.addEventListener('click', modoAzul)
btnAmarelo.addEventListener('click', modoAmarelo)
btnVermelho.addEventListener('click', modoVermelho)

function modoDark() {
    event.preventDefault();
    console.log('modo dark')
    tela.classList.add("dark");
    tela.classList.remove("light");
    tela.classList.remove("rosa");
    tela.classList.remove("amarelo");
    tela.classList.remove("azul");
    tela.classList.remove("vermelho");
    imagem.setAttribute('src', 'img/bloom.jpg')
}

function modoLight() {
    event.preventDefault();
    console.log('modo light')
    tela.classList.remove("rosa");
    tela.classList.remove("dark");
    tela.classList.remove("amarelo");
    tela.classList.remove("azul");
    tela.classList.add("light");
    tela.classList.remove("vermelho");
    imagem.setAttribute('src', 'img/tecna.jpg')
}

function modoRosa() {
    event.preventDefault();
    console.log('modo rosa')
    tela.classList.add("rosa");
    tela.classList.remove("light");
    tela.classList.remove("dark");
    tela.classList.remove("amarelo");
    tela.classList.remove("azul");
    tela.classList.remove("vermelho");
    imagem.setAttribute('src', 'img/flora.jpg')
}

function modoAzul() {
    event.preventDefault();
    console.log('modo azul')
    tela.classList.add("azul");
    tela.classList.remove("light");
    tela.classList.remove("dark");
    tela.classList.remove("amarelo");
    tela.classList.remove("rosa");
    tela.classList.remove("vermelho");
    imagem.setAttribute('src', 'img/aisha.jpg')
}

function modoAmarelo() {
    event.preventDefault();
    console.log('modo amarelo')
    tela.classList.add("amarelo");
    tela.classList.remove("rosa");
    tela.classList.remove("dark");
    tela.classList.remove("light");
    tela.classList.remove("azul");
    tela.classList.remove("vermelho");
    imagem.setAttribute('src', 'img/stela.jpg')
}

function modoVermelho() {
    event.preventDefault();
    console.log('modo vermelho')
    tela.classList.add("vermelho");
    tela.classList.remove("rosa");
    tela.classList.remove("dark");
    tela.classList.remove("light");
    tela.classList.remove("azul");
    tela.classList.remove("amarelo");
    imagem.setAttribute('src', 'img/musa.jpg')
}

titulo.addEventListener('click', mudarId)
function mudarId() {
    titulo.id = 'titulo'
    console.log(titulo.id)
}
