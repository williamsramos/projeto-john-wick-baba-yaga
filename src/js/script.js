/*
    OBJETIVO -  quando clicarmos no botão temos  que mostrar a imagem de fundo correspondente
    - passo 1 - dar um jeito de pegar o elemnto HTML dos botões
    - passo 2 - dar um jeito de identificar o clique do usuário no botão
    - passo 3 - desmarcar o botão selecionado anterior
    passo 4 - marcar o botão clicando como se estivesse selecionada
    passo 5 - esconder a imagem de fundo anterior 
    passo 6 fazer aparecer a imagem  de fundo correspondente ao botão clicado
*/

const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click' , () => {

        desativarBotaoSelecionado();

        selecionarBotaoCarrossel();

        esconderImagemAtiva(botao);

        mostrarImagemdeFundo(indice);
    })
})

function mostrarImagemdeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function esconderImagemAtiva(botao) {
    botao.classList.add('selecionado');
}

function selecionarBotaoCarrossel() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}