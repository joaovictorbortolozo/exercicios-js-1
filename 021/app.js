function Media(){
    let Nota1 = document.getElementById("N1").value
    let Nota2 = document.getElementById("N2").value
    let Media = parseFloat(Nota1) + parseFloat(Nota2)
    
    if( Media >= 6 ){
        document.getElementById("Resultado").innerHTML = Media/2 + " " + "Aprovado"
    }
    else if(Media <= 5){
        document.getElementById("Resultado").innerHTML  = Media/2 + " " + "Reprovado"
    }
}