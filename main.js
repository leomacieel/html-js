const form = document.getElementById('formulario');

function validaValores(ValorA, ValorB) {
    return ValorB > ValorA
}

form.addEventListener('submit', function(e){
    let formEValido = false;
    e.preventDefault();

    const ValorCampoA = document.getElementById('campo-a')
    const ValorCampoB = document.getElementById('campo-b')

    formEValido = validaValores(ValorCampoA.value, ValorCampoB.value)
    if (formEValido) {
        alert('Formulário Válido - O Valor B é Maior que o A')
        ValorCampoA.value = '';
        ValorCampoB.value = '';
    } else {
        alert('Formulário Inválido - O Valor A é Maior que o B')
    }
})

console.log(form);
