const myButtonLeft = document.querySelector(".button-number-left");
const myButtonRight = document.querySelector(".button-number-right");
const myInputLeft = document.querySelector(".input-left");
const myInputRight = document.querySelector(".input-right");
const myParagraphTermino = document.querySelector(".tempo-acabou");
const contador1 = document.querySelector("#contador-1");
const contador2 = document.querySelector("#contador-2");
const erroRight = document.querySelector(".erro-right");
const erroLeft = document.querySelector(".erro-left");
const historyLeft = Array.from(document.querySelectorAll(".paragraphs-left"));
const historyRight = Array.from(document.querySelectorAll(".paragraphs-right"));

function addHistoryItem(historyElements, newValue) {
    for (let i = historyElements.length - 1; i > 0; i--) {
        historyElements[i].textContent = historyElements[i - 1].textContent;
    }
    historyElements[0].textContent = newValue;
}

myButtonRight.addEventListener("click", () => {
    if (myInputRight.value == "") {
        erroRight.textContent = "Por favor digite um número";
        contador2.textContent = "0s";
        myButtonRight.style.marginTop = "0"
        return;
    }
    if (myInputRight.value !== "") {
        erroRight.textContent = "";
        myButtonRight.style.marginTop = "5px"
    }

    contador2.textContent = myInputRight.value + "s";
    let contador = parseInt(myInputRight.value);

    const contadorCrescente = setInterval(() => {
        contador--;
        contador2.textContent = contador + "s";

        if (contador === 0) {
            clearInterval(contadorCrescente);
            document.querySelector(".section-2").style.marginLeft = "0";
            myParagraphTermino.textContent = "Tempo finalizado!";
            setTimeout(() => {
                const result = myInputRight.value + "s";
                addHistoryItem(historyRight, result);
                contador2.textContent = "0s";
                myParagraphTermino.textContent = "";
                document.querySelector(".section-2").style.marginLeft = "128px";
                myInputRight.value = "";
            }, 2000);
        }
    }, 1000);
});






myButtonLeft.addEventListener("click", () => {
    if (myInputLeft.value == "") {
        erroLeft.textContent = "Por favor digite um número";
        contador1.textContent = "0s";
        myButtonLeft.style.marginTop = "0";
        return;
    }
    if (myInputLeft.value !== "") {
        erroLeft.textContent = "";
        myButtonLeft.style.marginTop = "5px";
    }

    const alvo = parseInt(myInputLeft.value, 10);
    let contador = 0;

    const contadorDecrescente = setInterval(() => {
        contador++;
        contador1.textContent = contador + "s";

        if (contador === alvo) {
            clearInterval(contadorDecrescente);
            document.querySelector(".section-2").style.marginLeft = "0";
            myParagraphTermino.textContent = "Tempo finalizado!";
            setTimeout(() => {
                const result = myInputLeft.value + "s";
                addHistoryItem(historyLeft, result);
                contador1.textContent = "0s";
                myParagraphTermino.textContent = "";
                document.querySelector(".section-2").style.marginLeft = "128px";
                myInputLeft.value = "";
            }, 2000);
        }
    }, 1000);
});
