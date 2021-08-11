function calcular() {
    var nota1 = window.document.getElementById('txtn1')
    var nota2 = window.document.getElementById('txtn2')
    var nota3 = window.document.getElementById('txtn3')
    var nota4 = window.document.getElementById('txtn4')
    var nota5 = window.document.getElementById('txtn5')
    var nfinal = window.document.getElementById('nfinal')
    var n1 = Number(nota1.value)
    var n2 = Number(nota2.value)
    var n3 = Number(nota3.value)
    var n4 = Number(nota4.value)
    var n5 = Number(nota5.value)
    var calc = ((n1 + n2 + n3 + n4) / 4 * 0.4) + (n5 * 0.6)
    nfinal.innerHTML = `A sua nota final no semestre é <strong>${calc}</strong>`
}