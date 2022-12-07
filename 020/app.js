function Letra(){
    let letra = document.getElementById('letra').value
    letra = letra.toLowerCase();

    if(letra=='a' || letra=='e' || letra=='i' || letra=='o' || letra=='u'){
        document.getElementById('Resposta').innerHTML = "Vogal"
    }
    else{
        document.getElementById('Resposta').innerHTML= "Consoante"
    }

}