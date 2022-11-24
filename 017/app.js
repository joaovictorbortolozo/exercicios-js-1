Maior()
{
    let value1 = document.getElementById('n1').value
    let value2 = document.getElementById('n2').value

    if (value1 > value2){
        document.getElementById('Resultado').innerHTML = value1
    }
    else {
        2document.getElementById('Resultado').innerHTML = value2
    }
    
}