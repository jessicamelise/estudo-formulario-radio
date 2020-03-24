let saudacaoNome = document.getElementById("saudacaoNome");
let caixaPreencherNome = document.getElementById("caixaPreencherNome");
let preencherNome = document.getElementById("preencherNome");
let assuntoQuiz = document.getElementById("assuntoQuiz");
let primeiroIng = document.getElementById("primeiroIng");
let primeiroMat = document.getElementById("primeiroMat");
let segundoIng = document.getElementById("segundoIng");
let segundoMat = document.getElementById("segundoMat");
let terceiroIng = document.getElementById("terceiroIng");
let terceiroMat = document.getElementById("terceiroMat");
let botaoReset = document.getElementById("botaoReset");
let mostrarResposta = document.getElementById("mostrarResposta");

ocultarTela();

function ocultarTela() {
    saudacaoNome.style.display = "none";
    assuntoQuiz.style.display = "none";
    primeiroIng.style.display = "none";
    primeiroMat.style.display = "none";
    segundoIng.style.display = "none";
    segundoMat.style.display = "none";
    terceiroIng.style.display = "none";
    terceiroMat.style.display = "none";
    botaoReset.style.display = "none";
    mostrarResposta.style.display = "none";
}


function submeterNome() {
    saudacaoNome.style.display = "block";
    saudacaoNome.innerHTML = "Seja bem vindo(a) " + preencherNome.value.charAt(0).toUpperCase() + preencherNome.value.slice(1) + "!";
    caixaPreencherNome.style.display = "none";
    assuntoQuiz.style.display = "block";

}

function começarQuiz() {
    let valorRadioTeste = document.getElementsByName("escolher-teste");

    for (var i = 0; i < valorRadioTeste.length; i++) {
        if (valorRadioTeste[i].checked) {
            let resultadoTeste = valorRadioTeste[i].value;

            if (resultadoTeste === "matematica") {
                primeiroMat.style.display = "block";
                assuntoQuiz.style.display = "none";
            } else {
                primeiroIng.style.display = "block";
                assuntoQuiz.style.display = "none";
            }
        }
    }
}

function respostaUmIng() {
    let valorRadioUmIng = document.getElementsByName("ing-pergunta-um");

    for (var i = 0; i < valorRadioUmIng.length; i++) {
        if (valorRadioUmIng[i].checked) {
            let resultadoUmIng = valorRadioUmIng[i].value;

            if (resultadoUmIng === "amarelo") {
                mostrarResposta.innerHTML += "Você acertou a Questão 1 <br>";
                mostrarResposta.style.display = "none";
            } else {
                mostrarResposta.innerHTML += "Você errou a Questão 1 <br>";
                mostrarResposta.style.display = "none";
            }
        }
    }
    primeiroIng.style.display = "none";
    segundoIng.style.display = "block";
}

function respostaUmMat() {
    let valorRadioUmMat = document.getElementsByName("mat-pergunta-um");

    for (var i = 0; i < valorRadioUmMat.length; i++) {
        if (valorRadioUmMat[i].checked) {
            let resultadoUmMat = valorRadioUmMat[i].value;

            if (resultadoUmMat === "4") {
                mostrarResposta.innerHTML += "Você acertou a Questão 1 <br>";
                mostrarResposta.style.display = "none";
            } else {
                mostrarResposta.innerHTML += "Você errou a Questão 1 <br>";
                mostrarResposta.style.display = "none";
            }
        }
    }
    primeiroMat.style.display = "none";
    segundoMat.style.display = "block";
}

function respostaDoisIng() {
    let valorRadioDoisIng = document.getElementsByName("ing-pergunta-dois");

    for (var i = 0; i < valorRadioDoisIng.length; i++) {
        if (valorRadioDoisIng[i].checked) {
            let resultadoDoisIng = valorRadioDoisIng[i].value;

            if (resultadoDoisIng === "orange") {
                mostrarResposta.innerHTML += "Você acertou a Questão 2 <br>";
                mostrarResposta.style.display = "none";
            } else {
                mostrarResposta.innerHTML += "Você errou a Questão 2 <br>";
                mostrarResposta.style.display = "none";
            }
        }
    }
    segundoIng.style.display = "none";
    terceiroIng.style.display = "block";
}

function respostaDoisMat() {
    let valorRadioDoisMat = document.getElementsByName("mat-pergunta-dois");

    for (var i = 0; i < valorRadioDoisMat.length; i++) {
        if (valorRadioDoisMat[i].checked) {
            let resultadoDoisMat = valorRadioDoisMat[i].value;

            if (resultadoDoisMat === "5") {
                mostrarResposta.innerHTML += "Você acertou a Questão 2 <br>";
                mostrarResposta.style.display = "none";
            } else {
                mostrarResposta.innerHTML += "Você errou a Questão 2 <br>";
                mostrarResposta.style.display = "none";
            }
        }
    }
    segundoMat.style.display = "none";
    terceiroMat.style.display = "block";
}

function resultadoQuizIng() {
    let valorRadioTresIng = document.getElementsByName("ing-pergunta-tres");

    for (var i = 0; i < valorRadioTresIng.length; i++) {
        if (valorRadioTresIng[i].checked) {
            let resultadoTresIng = valorRadioTresIng[i].value;

            if (resultadoTresIng === "yellow-blue-red") {
                mostrarResposta.innerHTML += "Você acertou a Questão 3 <br>";
                mostrarResposta.style.display = "none";
            } else {
                mostrarResposta.innerHTML += "Você errou a Questão 3 <br>";
                mostrarResposta.style.display = "none";
            }
        }
    }
    terceiroIng.style.display = "none";
    mostrarResposta.style.display = "block";
}

function resultadoQuizMat() {
    let valorRadioTresMat = document.getElementsByName("mat-pergunta-tres");

    for (var i = 0; i < valorRadioTresMat.length; i++) {
        if (valorRadioTresMat[i].checked) {
            let resultadoTresMat = valorRadioTresMat[i].value;

            if (resultadoTresMat === "42") {
                mostrarResposta.innerHTML += "Você acertou a Questão 3 <br>";
                mostrarResposta.style.display = "none";
            } else {
                mostrarResposta.innerHTML += "Você errou a Questão 3 <br>";
                mostrarResposta.style.display = "none";
            }
        }
    }
    terceiroMat.style.display = "none";
    mostrarResposta.style.display = "block";
}