function ordem(){
    let num1 = document.getElementById('N1').value
    let num2 = document.getElementById('N2').value
    let num3 = document.getElementById('N3').value
    
    let aux = num1;

    if(num2 > num1){
     aux=num2;
     num2=num1;
     num1=aux;
    }

    if(num3 > num1){
     aux=num3;
     num3=num1;
     num1=aux;
    }

    if(num3 > num2){
     aux=num3;
     num3=num2;
     num2=aux;
    }
    
    document.getElementById("Resultado").innerHTML 

}