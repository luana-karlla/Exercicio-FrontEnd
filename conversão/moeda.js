function calcular(){
   let valorReal = parseFloat(document.getElementById('m').value);
   let resposta  = document.getElementById('res');

    let oTotal = valorReal / 5.20;

    resposta.innerHTML = `Você tem na carteira R$${valorReal} reais e pode comprar $${oTotal.toFixed(2)} em dólares`;
    
}