function Resultado(){
    let valor1 = document.getElementById('n1').value
    let valor2 = document.getElementById('n2').value
    let valor3 = document.getElementById('n3').value
    let valor4 = document.getElementById('n4').value
    let valor5 = document.getElementById('n5').value

    document.getElementById('respostas1').innerHTML = Math.pow(valor1, 2)
    document.getElementById('respostas2').innerHTML = Math.pow(valor2, 2)
    document.getElementById('respostas3').innerHTML = Math.pow(valor3, 2)
    document.getElementById('respostas4').innerHTML = Math.pow(valor4, 2)
    document.getElementById('respostas5').innerHTML = Math.pow(valor5, 2)
}