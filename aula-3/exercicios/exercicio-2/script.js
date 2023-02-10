function mediaAritmetica() {
    var num, soma = 0, contador = 0, resp;

    do{
        num = parseFloat(prompt("Informe o número: ", ""));
        soma += num;
        contador++; 
      }while(confirm("Deseja informar outro número?"));
  
      resp = soma / contador;
      alert("Media: "+ resp);
      window.location.assign('https://www.google.com/');
}

