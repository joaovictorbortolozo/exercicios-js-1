function Positivo(){

let n1 = document.getElementById('n1').value

if (n1 >= 1){
    document.getElementById('Resultado').innerHTML = "Positivo"
}

else if (n1 <= -1){
    document.getElementById('Resultado').innerHTML = "Negativo"
}
else if (n1 == 0){
    document.getElementById('Resultado').innerHTML = "Neutro"
}
else {
    document.getElementById('Resultado').innerHTML = "Valor Invalido"
}
//limpar campo
document.getElementById('Resultado').value = " "

}