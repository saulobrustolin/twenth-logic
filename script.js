// IDs: inValor, inConvenio, rbSConvenio, rbNConvenio, inConvenio, outResposta, inSelectAA, inSelectSA
// 10% s/ convênio; 20% para "Amigo dos animais"; 50% para "Saúde animal"

function calcularDesconto(){
    var rbSConvenio = document.getElementById("rbSConvenio");
    var rbNConvenio = document.getElementById("rbNConvenio");

    var outResposta = document.getElementById("outResposta");

    var inValor = document.getElementById("inValor");
    valor = inValor.value;

    var inConvenio = document.getElementById("inConvenio");

    var inSelectAA = document.getElementById("inSelectAA");
    var inSelectSA = document.getElementById("inSelectAA");

    if(valor == "" || isNaN(valor)){
        alert("Por favor digite um valor válido!");
        inValor.focus();
        return;
    }

    var desconto = 0;

    if(inConvenio.classList.contains('hidden')){
        desconto = 0.9;
    } else if(inSelectAA.selected){
        desconto = 0.8;
    } else {
        desconto = 0.5;
    }

    console.log(desconto);

    outResposta.innerHTML = 'Desconto: R$' + (valor - (valor*desconto)).toFixed(2) + "<br>" + 'A pagar: R$' + (valor*desconto).toFixed(2);
}

var radio = document.querySelectorAll('input[type="radio"]');
radio.forEach(function(radio){
    radio.addEventListener('change', Convenio);
});

function Convenio(){
    if(rbNConvenio.checked){
        inConvenio.classList.add("hidden");
    } else if(rbSConvenio.checked) {
        inConvenio.classList.remove("hidden");
    }
}

var calcular = document.getElementById("btCalcular");
calcular.addEventListener("click", calcularDesconto);