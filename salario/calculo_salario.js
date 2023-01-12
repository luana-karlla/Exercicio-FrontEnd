function calcular(){
    salarioAtual = parseFloat(document.getElementById('salario').value);
    resposta = document.getElementById('res');

    calculoSalario = salarioAtual + (15/100)*salarioAtual;
    
    resposta.innerHTML = `O seu novo salário é de R$${calculoSalario.toFixed(2)} reais`;
}