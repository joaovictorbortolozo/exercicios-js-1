function Media(){
    var n1 = parseFloat(document.getElementById("N1").value)
    var n2 = parseFloat(document.getElementById("N2").value)
    var media = (n1 + n2)/2;
   
    
    if( media >= 7 )
    if (media == 10)
    {
        document.getElementById("Resultado").innerHTML = "Aprovado com distinção" 
    }
    else{
         document.getElementById("Resultado").innerHTML = "Aprovado " 
    }
    else if(media <= 6){
        document.getElementById("Resultado").innerHTML  = "Reprovado" 
    }
  
} 