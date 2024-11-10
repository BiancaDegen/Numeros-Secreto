// quando quero uma lista eu uso [], lembrando que o primeiro elemtento da lista sempre começa com indice 0. ex [0,1,2,3,4,5]
// se eu quiser saber o tamanho de uma lista, coloco o nome dela + .length, ai ele vai puxar a quantidade de elementos que a lista tem.
//se eu quiser pegar o ultimo elemento de uma lista eu faco o nome dela = [nome dela.length - 1], logo terei o ultimo elemento da lista.
// se eu quero adicionar algo a uma lista, eu uso o nome da lista.push = [' nome de algo que eu quero por] , isso vai incluir um alemento no final da lista.
//se eu quero tirar um elemento da lista, faço a mesma coisa por em .pop 
let listaDeNumerosSorteados = [];
let numeroLimite= 80;
//let titulo= document.querySelector ('h1');
//titulo.innerHTML= 'Jogo do número secreto';

//let paragrafo= document.querySelector('p');
//paragrafo.innerHTML= 'Escolha um número de 1 a 10';

let numeroSecreto = gerarNumeroAleatorio ();
let tentativas= 1;

function exibirTextoNaTela (tag, texto) {
//query.selector é usafdo qnd quero selecionar um elemento no html.
let campo= document.querySelector (tag);
campo.innerHTML= texto;
responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2}); //Primeiro, você precisa incluir <script src="https://code.responsivevoice.org/responsivevoice.js"></script>
//na linha do seu HTML. Após incluir a biblioteca, você pode chamar a função responsiveVoice.speak() para fazer o texto ser lido em voz alta. Se quiser modificar, velocidade,volume, etc sõ usar {}.
}

function exibirMensagemInicial () {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número de 1 a 10');
}

exibirMensagemInicial ();

function verificarChute () {
    let chute = document.querySelector('input').value; 

    if (chute == numeroSecreto) {
        exibirTextoNaTela ('h1', 'Acertou!');
        let palavraTentativa = tentativas> 1? 'Tentativas' : 'Tentativa';
        let mensagemTentativa = (`Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`);
        exibirTextoNaTela ('p', mensagemTentativa);
        //getElementById quando quero selecionar um elemento no html pelo seu ID.
        //.removeAttribute é quando quero eliminar aquele elemento.
        document.getElementById ('reiniciar').removeAttribute ('disabled');
    }   else { 
        if (chute < numeroSecreto) {
            exibirTextoNaTela ('p','O número secreto é maior');
        } else {
            exibirTextoNaTela ('p', 'O número secreto é menor');
        }
        //++ é usado quando quero somar um numero 
        tentativas++;
        limparCampo();
}
}

function gerarNumeroAleatorio () {
// o numeroLimite antes era um numero normal, como 20, mas pra nao precisarmos sempre ficar mudando ele, criamos uma varievel.
    let numeroEscolhido = parseInt (Math.random () *numeroLimite +1);
// o termo .includes adicione algo    
    let quantidadeDeElementosNaLista = (listaDeNumerosSorteados.length);

    if (quantidadeDeElementosNaLista = numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio ();
    } else {
        // o .push pega o parametro entre parenteses e coloca no final da lista.
        listaDeNumerosSorteados.push (numeroEscolhido) ;
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo () {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo ();
    tentativas = 1;
    exibirMensagemInicial ();
}

