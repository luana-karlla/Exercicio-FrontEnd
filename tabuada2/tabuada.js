function tabuada(){
    //conexão dos controles interativos do html com a sua funcionalidade em js
    //transformando texto em numero
    let numero = Number(document.getElementById('n').value);
    let resposta = document.getElementById('res');
    let tabuada = '';

    //calculo da tabuada
    for(let c=1 ;c <= 10; c++)
        tabuada += numero + " X "+ c +" = "+ 
        numero*c + "<br>";

        resposta.innerHTML = tabuada;
}