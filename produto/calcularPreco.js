function calcular(){

    let valorPreco = parseFloat(document.getElementById('pd').value);
    let resposta = document.getElementById('res');

    let totalV = valorPreco - (valorPreco / 100) * 5;
    

    resposta.innerHTML = `O valor de R$${valorPreco} reais com desconto ficou por R$${totalV} reais`;
}