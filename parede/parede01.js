
function calcular(){

    let valorLargura = parseFloat(document.getElementById('l').value);
    let valorAltura = parseFloat(document.getElementById('a').value);
    let resposta = document.getElementById('res');
 
    valorArea = valorAltura * valorLargura //b x a
    qtinta = valorArea * 2;

    resposta.innerHTML = `Á área total é de ${valorArea}m², e a quantidade de tinta a uma área de 2m² é de ${qtinta} litros`;

}
