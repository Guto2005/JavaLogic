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

let maiorpeso = 0;
let total = 0;
let maiorcem = 0;
let peso = 0;
let media = 0;
let i = 8

for (let i = 1; i <= 8; i++) {
  let peso = Number(prompt("Digite o peso da " + i + "ª pessoa"));

  if (peso > maiorpeso) {
    maiorpeso = peso;
  }

  total += peso;

  if (peso > 100) {
    maiorcem++;
  }

}
(media = total / 8);
alert("A quantidade de pessoas cadastradas é: " + i );
alert("A média de peso entre as pessoas é: " + media)
alert("A quantidade de pessoas que pesam mais de 100kg é: " + maiorcem)
alert("O maior peso cadastrado é: " + maiorpeso)
/*let sal;
let nfilho;
let totalSalario = 0;
let totalFilho = 0;

for (let i = 1; i<10; i++) {
 sal = Number(prompt("Digite seu"+cont+"salário"))
 nfilho = Number(prompt("Digite a quantidade de filhos"))


 somasal += salario;
 somafi += nfilho;
}
(totalSalario = totalSalario / 10);
(totalFilho = totalFilho / 10);
alert ("A media do salario é:" +totalSalario+ "A média do número de filhos é:" +totalFilho)



/*let est;
let ps;
let ac;
let SP;
let RJ;


for (let i = 1; i<10; i++) {
    est = (prompt)("Digite de qual estado seu veiculo é entre SP e RJ")
    ps = (prompt)("Digite se o seu veículo é de passeio sim/não")
    ac = (prompt)("Digite se já se envolveu em algum acidente; quantos?")
}
if (est == "SP"){
       alert("O numero de carros de SP é:" + SP)
}

*/


/*let soma1=0;
let soma2=0;
let soma3=0;
let soma4=0;
let soma5=0;
let soma6=0;


for(let i=1; i<=10; i++){
    let candidatos = Number(prompt("Digite o nome do seu candidato:\n" + "13 - Lula" + "\n22 - Bolsonaro" + "\n12 - Ciro" + "\n69 - Tiririca" + "\n5 - Votos Nulo" + "\n0 - Votos Brancos"))

    if(candidatos ==13){
      soma1++
    } else if(candidatos ==22){
      soma2++
    } else if(candidatos ==12){
      soma3++
    } else if(candidatos ==69){
      soma4++
    } else if(candidatos ==5){
      soma5++
    } else if(candidatos ==0){
      soma6++
    } else{
      alert(prompt("Informe um número válido!"))
      i = i -1
    }
  }

      alert("\nLula:" + soma1 + "\nBolsonaro" + soma2 + "\nCiro" + soma3 + "\nTiririca" + soma4 + "\nVoto Nulo" + soma5 + "\nVoto Branco" + soma6)
*/