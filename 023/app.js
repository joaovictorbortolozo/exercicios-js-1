function Menor(){
    let n1 = document.getElementById("N1").value
    let n2 = document.getElementById("N2").value
    let n3 = document.getElementById("N3").value
    
    if(n1 < n2 && n1 < n3 ){

        document.getElementById('Resposta').innerHTML = n1 + (" ") + "N1 é o menor número"
        
        }else if(n2 < n1&&n2 < n3){
        document.getElementById('Resposta').innerHTML = n2 + (" ") + "N2 é o menor número"
        }
        
        else{
            document.getElementById('Resposta').innerHTML = n3 + (" ") + "N3 é o menor número"
        }   
}