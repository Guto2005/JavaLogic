//function listaNumeros () {
    // cria referência aos elementos da pagina
//    let inNumero = document.getElementById('inNumero');
 //   let outResposta = document.getElementById('outResposta');


// converte conteudo do campo inNumero
//let Numero = Number(inNumero.value);
//obtem o numero informado
//if (Numero == 0 || isNaN (Numero)) {
 //   alert("Informe um numero valido...");
 //   inNumero.focus();
 //   inNumero.value = ""
    //focus dá importancia pro formulário
    // colocar o value no lugar do focus, limpa a aba de pesquisa do formulário
//}
// cria uma variavel do tipo string, que irá concatenar a resposta
//let resposta = "Entre" + Numero + " e 1: ";

// cria um laço de repetição
// i é o contador
//for (var i = Numero; i > 0; i= i -1) {
    // a variavel resposta vai acumulando os novos conteúdos
  //  resposta = resposta + i + ", ";
    // \n quebra a linha
    // o conteúdo da tag pre é alterado para exibir a tabuada do num
   // outResposta.textContent = resposta; 
//}

//}
//cria referencia ao botão e após associa function ao evento click
//let btDecrescer = document.getElementById('btDecrescer');
//btDecrescer.addEventListener("click", listaNumeros);
//btMostrar.addEventListener("click",MostrarTabuada);

//function listaNumeros () {
    //let inNumero = document.getElementById('inNumero');
  //  let outResposta = document.getElementById('outResposta');

//let Numero = Number(inNumero.value);
//if (Numero == 0|| isNaN(Numero.value)) {
    //alert ("Informe um numero valido...");
    //inNumero.focus();
  //  inNumero.value = ""
//}
//let resposta = "";

//for (var i = Numero; i > 0; i= i -10) {
  //  resposta = resposta + i + ", ";
//}
//    outResposta.textContent = resposta + "acabou"
//}
//let btDecrescer = document.getElementById("btDecrescer");
//btDecrescer.addEventListener("click", listaNumeros);

//function listaNumeros () {
    //let inNumero = document.getElementById('inNumero');
  //  let outResposta = document.getElementById('outResposta');

//let Numero = Number(inNumero.value);
//if (Numero == 0|| isNaN(Numero.value)) {
   // alert ("Informe um numero valido...");
  //  inNumero.focus();
 //   inNumero.value = ""
//}
//let resposta = "";

//for (var i = Numero; i > 0; i= i -10) {
 //   resposta = resposta + i + ", ";
//}
 //   outResposta.textContent = resposta + "acabou"
//}
//let btDecrescer = document.getElementById("btDecrescer");
//btDecrescer.addEventListener("click", listaNumeros);
//<h1>Programa Números Decrescentes</h1>
  //      <p>Numero:
    //        <input type="number" id="inNumero">
      //  </p>
        //    <input type="button" value="Decrescer Até 1" id="btDecrescer">
          //  <h3 id="outResposta"></h3>


let nmulheres;
let maiorpeso = 0;
let total;
let maiorcem;
let peso;
let media;

for(let i = 1; i<=8 ; i++){
    let peso = Number(prompt("Digite o peso da " + i + "º pessoa"))
}
    //isso faz com que a mesma pergunta seja usada até 8 vezes pela seta <=8
    if (peso > maiorpeso ){
            maiorpeso = peso
    }

    total += peso
    // é um acumulador pra somar todos os 8 pesos pra depois dividir
    //o total += peso vai acumular e guardar dentro da variavel total
    if(peso > 100){
        maiorcem++
}
    media = ( )

alert("O maior peso é" + maiorpeso)
alert("A quantidade de pessoas cadastradas é:" + i)
alert("A quantidade de pessoas que pesam mais de 100kg é: " + maiorcem)
alert("O maior peso cadastrado é: " + )
