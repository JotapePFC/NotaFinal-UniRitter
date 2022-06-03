function calcular() {
    let nota1 = window.document.getElementById('txtn1')
    let nota2 = window.document.getElementById('txtn2')
    let nota3 = window.document.getElementById('txtn3')
    let nota4 = window.document.getElementById('txtn4')
    let nota5 = window.document.getElementById('txtn5')
    let nfinal = window.document.getElementById('nfinal')
    let n1 = Number(nota1.value)
    let n2 = Number(nota2.value)
    let n3 = Number(nota3.value)
    let n4 = Number(nota4.value)
    let n5 = Number(nota5.value)
    let calc = ((n1 + n2 + n3 + n4) / 4 * 0.4) + (n5 * 0.6)
    nfinal.innerHTML = `A sua nota final no semestre é <strong>${calc}</strong>`
}