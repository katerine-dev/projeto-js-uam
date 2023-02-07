function cumprimentar(){
    // console.log('Olá Mundo'); para aparecer no console
    // alert('Olá Mundo'); um alerta para o usuário
    document.write("Oi mundo!");
}
function cumprimentar2(){
    var resp = prompt("Informe o seu nome:", "nome");

    alert("Olá, " + resp + "!");
}

function cumprimentar3(){
    var resp = confirm("Deseja sair do curso?");
    /*
    ----------------
    confirm():
    ________________
    O  comando confirm gera uma janela com os botões: ok e cancel.
    Se o usuário clicar no botão ok, o comando retorna o valor true (verdadeiro).
    Mas, caso contrário, clicando no botão cancel, o comando retorna o valor false (falso).
    */

    if(resp == true) {
        alert("\n\nAdeus! \n\nAté outro dia!");
        window.location = "http://google.com/";
    }
    else { // false
        alert("Muito Obrigado por permanecer no curso!");
}
}

function mensagem(){
    let nomeUsuario = document.getElementById("nome").value;
    /*
    Dado: atributo. (campo do objeto que armazena um dado).
    Processamento: método, ou função, ou procedimento
    */
    document.getElementById("resp").innerHTML = "<br>Olá, " + nomeUsuario.toUpperCase() + "!"; // MAIÚSCULO
    document.getElementById("resp").innerHTML = resp.innerHTML + "<br>Olá, " + nomeUsuario.toLowerCase() + "!"; // minúsculo
    document.getElementById("resp").innerHTML = resp.innerHTML + "<br>Número de caracteres informados:  " + nomeUsuario.length;
    document.getElementById("resp").innerHTML = resp.innerHTML + "<br>Caracter da posição 1:  " + nomeUsuario.charAt(1);
}

/*
function mensagem(){
        resp.innerHTML = "<br>Olá, " + nome.value + "!";
    }

Aqui o ambiente do Javascript com o nome do ID, assim a função pode ficar mais simples.

OBS: 
+= operador de atribuição mais igual = ele pega o que ta na esquerda e concatena com o da direita.
ex: 
let x = 1
x += 10 ------ x = 11
equivalente let x = 1 
x = x + 10 
*/