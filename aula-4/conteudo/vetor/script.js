var i, a = new Array(2); //É o tamanho do vetor e quando colocamos mais de um numero são elementos do vetor Array(1, 2, 3)
a[0] = "vermelho";
a[1] = "azul";

document.write("<br>Vetor: <br>");
document.write(a);

document.write("<br>Vetor: <br>");

for(i = 0; i < a.length; i++)
    document.write(`a[${i}] = ${a[i]}<br>`); // $ interpol


// var a = ["vermelho", "azul", "amarelo"]

