function calcular() {
    var numero1 = document.getElementById('primeiroNumero')
    var numero2 = document.getElementById('segundoNumero')

    var operacao = document.getElementById('operacao')
    var resultado = document.getElementById('resultado')

    var primeiroNumero = Number(numero1.value)
    var segundoNumero = Number(numero2.value)

    var operador = operacao.value

    if (operador == 'somar') {
        var valorFinal = primeiroNumero + segundoNumero;
    }
    if (operador == 'subtrair') {
         valorFinal = primeiroNumero - segundoNumero;
    }
    if (operador == 'multiplicar') {
         valorFinal = primeiroNumero * segundoNumero;
    }
    if (operador == 'dividir') {
         valorFinal = primeiroNumero / segundoNumero;
    }


    resultado.innerHTML = `Resultado: ${valorFinal}`
}