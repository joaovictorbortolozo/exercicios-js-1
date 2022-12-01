function periodo(){

    let periodo = document.getElementById("periodo").value
    if(periodo == "M"){
        document.getElementById("Resultado").innerHTML = "Bom dia!"
    } 
    else if(periodo == "V"){
        document.getElementById("Resultado").innerHTML = "Boa tarde"
    }
    else if (periodo == "N")
    {
        document.getElementById("Resultado").innerHTML = "Boa Noite"
    }
    else{
        document.getElementById("Resultado").innerHTML = "Período inaválido"
    }
    Document.getElementById('periodo').value = ("")
}