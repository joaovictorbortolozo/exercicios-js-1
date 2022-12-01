function Resultado(){
    let valor1 = document.getElementById('idade').value
    if (valor1 >= 18){
    document.getElementById('resposta').innerHTML = 'Maior de idade' 
    }
    else if (valor1 <= 17){
        document.getElementById('resposta').innerHTML = 'Menor de idade' 
        }
}