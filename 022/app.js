function Maior(){
    let n1 = document.getElementById("N1").value
    let n2 = document.getElementById("N2").value
    let n3 = document.getElementById("N3").value
    
    if(n1 < n3 && n1 < n2 ){

        document.getElementById('Resposta').innerHTML = n1
        
        }else if(n2 < n1&&n2 < n3){
        document.getElementById('Resposta').innerHTML = n2
        }
        
        else{
            document.getElementById('Resposta').innerHTML = n3
        }   
}