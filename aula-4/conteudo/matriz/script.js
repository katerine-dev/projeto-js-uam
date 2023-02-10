var i, j, mat = [   [1, 2, 3], 
                    [4, 5, 6], 
                    [7, 8, 9]];

for (i = 0; i < 3; i++){
    for (j = 0; j < 3; j++)
        document.write(mat[i][j] + " ");
    document.write("<br>");
}


// ---------- segundo exemplo ----------

function ler(m){ // m = mat
    //código para leitura:
    for (i = 0; i < 3; i++) 
      for (j = 0; j < 3; j++)
        mat[i][j] = parseInt(prompt("Informe o número: ", ""));
}

function imprimir(a){ // a = mat
    //código para impressão:
    for (i = 0; i < 3; i++) {
      for (j = 0; j < 3; j++)
        document.write(mat[i][j] + " ");
      document.write("<br>");
    }
}
    var i, j, mat = [   [], 
                        [], 
                        [] ];

ler(mat)
imprimir(mat)