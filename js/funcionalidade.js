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