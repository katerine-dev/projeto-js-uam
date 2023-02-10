function verificarPreco() {
    var codigo = parseInt(document.getElementById("codigo").value);
    var preco;
    var produto;

    switch (codigo) {
        case 1:
            preco = "R$ 99,99";
            produto = "Sapato";
            break;
        case 2:
            preco = "R$ 103,89";
            produto = "Bolsa";
            break;
        case 3:
            preco = "R$ 49,98";
            produto = "Camisa";
            break;
        case 4:
            preco = "R$ 89,72";
            produto = "Calça";
            break;
        case 5:
            preco = "R$97,35";
            produto = "Blusa";
            break;
        default:
            preco = "";
            produto = "Código Inválido";
            break;
    }

    document.getElementById("resultado").innerHTML = "O preço do produto " + produto + " é " + preco;
}

// --------- Correção do Professor -----------

var codigo = parseInt("Informe o código do produto:", "");

switch(codigo){
    case 1:
      document.write("Sapato: R$ 99,99");
      break;
    case 2:
      document.write("Bolsa: R$ 103,89");
      break;
    case 3:
      document.write("Camisa: R$ 49,98");
      break;
    case 4:
      document.write("Calça: R$ 89,72");
      break;
    case 5:
      document.write("Blusa: R$ 97,35");
      break;
    default:
      document.write("Código incorreto!");
  }
