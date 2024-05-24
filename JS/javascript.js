function copiarCodigoPix() {
    var codigoPix = "00020126360014BR.GOV.BCB.PIX0114399078650001715204000053039865802BR5923NINETY FOUR AUTO CENTER6009SAO PAULO622605223RN4v9ksL6h72CMZtbuBtR63040EDB";
    navigator.clipboard.writeText(codigoPix)
    .then(() => {
        var botao = document.getElementById("botaoCopiar");
        var icone = botao.querySelector("i");
        botao.innerHTML = "Copiado  <i class='fas fa-check'></i>";
        setTimeout(function() {
            botao.innerHTML = "Copiar QR Code  <i class='fas fa-copy'></i>";
        }, 1000);
    })
    .catch(err => {
        console.error('Erro ao copiar: ', err);
    });
}

function copiarChavePix() {
    var ChavePix = "39.907.865/0001-71";
    navigator.clipboard.writeText(ChavePix)
    .then(() => {
        var botao = document.getElementById("CopiarPix");
        var icone = botao.querySelector("i");
        botao.innerHTML = "Copiado  <i class='fas fa-check'></i>";
        setTimeout(function() {
            botao.innerHTML = "39.907.865/0001-71  <i class='fas fa-copy'></i>";
        }, 1000);
    })
    .catch(err => {
        console.error('Erro ao copiar: ', err);
    });
}
