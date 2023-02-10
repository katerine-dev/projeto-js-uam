function maiorNumero() {
    var num = parseFloat(prompt("Informe o número:", "")), 
        maior = num;

    while(confirm("Deseja informar outro número?")){
      num = parseFloat(prompt("Informe o número:", ""));
      if (num > maior)
        maior = num;
} 
alert("Maior: " + maior);
}