function calcular(){
    var num = parseInt(document.getElementById("num").value);
    var resposta = document.getElementById('resposta');
    var calcular='';
  
    for(var count=1; count<=10 ; count++)
    calcular += num+" x "+count+" = "+
                 num*count+"<br />";
    
    resposta.innerHTML = calcular;
  }
/*
 for(let c = 1; c <= 10 ; c++){
        vFinal *= `${nValor} X  ${c} = ${nValor*c}`;

        res.innerHtml = ` teste ${vFinal}`;
        
    }
    */