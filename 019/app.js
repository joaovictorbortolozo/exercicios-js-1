function periodo(){

let periodo = document.getElementById("periodo").value
if(periodo == "d"){
    document.getElementById("Resultado").innerHTML = "Dia"
} 
else if(periodo == "n"){
    document.getElementById("Resultado").innerHTML = "Noite"
}
else{
    document.getElementById("Resultado").innerHTML = "Período inaválido"
}
}