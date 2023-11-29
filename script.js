function MostrarTabuada () {
    // crua referência aos elementos da pagina
    let inNumero = document.getElementById('inNumero');
    let outTabuada = document.getElementById('outTabuada');
}

// converte conteudo do campo inNumero
let Numero = Number(inNumero.value);
if (Numero == 0 || isNaN (Numero)) {
    alert("Informe um numero valido");
    inNumero.focus();
    return;
    //focus dá importancia pro formulário
    // colocar o value no lugar do focus, limpa a aba de pesquisa do formulário
}
// cria uma variavel do tipo string, que irá concatenar a resposta
let resposta ="";

// cria um laço de repetição
// i é o contador
for (var i = 1; i <= 10; i++) {
    // a variavel resposta vai acumulando os novos conteúdos
    resposta = resposta + Numero + " X " + I + " = " + Numero * i + "\n"
    // \n quebra a linha
    // o conteúdo da tag pre é alterado para exibir a tabuada do num
    outTabuada.textContent = resposta; 
}
//cria referencia ao botão e após associa function ao evento click
var btMostrar = document.getElementById('btMostrar');
btMostrar.addEventListener("click",MostrarTabuada);







