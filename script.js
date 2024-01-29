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

/*let maiorpeso = 0;
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


/*22/01/24*/

/*
1- Elabore um algoritmo que calcule o que deve ser pago por um produto, 
considerando o preço normal de etiqueta e a escolha da condição de pagamento.
 Utilize os códigos da tabela a seguir
para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
Código Condição de pagamento

1 À vista em dinheiro ou cheque, recebe 10% de desconto
2 À vista no cartão de crédito, recebe 15% de desconto
3 Em duas vezes, preço normal de etiqueta sem juros
4 Em duas vezes, preço normal de etiqueta mais juros de 10% */


/*
let prod = Number(prompt('Digite o valor normal do produto'));
let cond = Number(prompt('Digite o código de acordo com a condição de pagamento desejada:\n1. À vista em dinheiro ou cheque, 10% de desconto\n2. À vista no cartão de crédito, 15% de desconto.\n3. Em duas vezes, preço normal de etiqueta sem juros.\n4. Em duas vezes, preço normal de etiqueta mais juros de 10%'));
let desc
 
if (cond == 1){
    desc = prod-(prod*0.1)
 
}
else if(cond == 2){
    desc = prod-(prod*0.15)
}
else if (cond == 3){
    desc = prod
}
else if (cond == 4){
    desc = prod*1.1
}
else{
    alert(prompt("Informe uma opção válida"))
}
 
alert("O total pago será R$"+desc)

*/

/*faça um algoritmo que receba 3 notas, calcule a média e ao final 
classifique conforme abaixo 
>= 9 A
>= 7 e < 9 B
>= 6 e < 7 C
>= 4 e < 6 D
< 4 E
*/

/*let nota1 = Number(prompt('Digite sua primeira nota'))
let nota2 = Number(prompt('Digite sua segunda nota'))
let nota3 = Number(prompt('Digite sua terceira nota'))
let media = (nota1 + nota2 + nota3) /3;

if (media >= 9) {
  alert("Sua nota é: A");
} else if (media >= 7) {
  alert("Sua nota é: B");
} else if (media >= 6) {
  alert("Sua nota é: C");
} else if (media >= 4) {
  alert("Sua nota é: D");
} else {
  alert("Sua nota é: E");
}
*/


/* 23/01/24 */

/*  let num = parseFloat(prompt("escolha um lanche: " + "\n" + "100-Cachorro quente" + "\n" + "101-Bauru Simples" + "\n" + "102-Bauru com ovo" + "\n" + "103-Hamburguer" + "\n" + "104-CheeseBurguer" + "\n" + "105-Refrigerante"));

let quantidade = parseInt(prompt("Digite a quantidade desejada"));

let preço;

switch(num){
  case 100:
    preço = 1.70
    break;
  case 101:
    preço = 2.30
    break;
  case 102:
    preço = 2.60
    break;
  case 103:
    preço = 2.40
    break;
  case 104:
    preço = 2.50
    break;
  case 105:
    preço = 1.00
    break;

    default:
      alert("Volte e escolha um número de 1 a 6 do nosso cardápio")
}

if (preço !== undefined) {
    let total = quantidade * preço;
    alert("Total a pagar: R$" + total)
}

*/

/*
var tabuada = parseFloat (prompt("Digite um número"))
var tamTabuada = parseFloat (prompt("Digite o tamanho da tabuada"))
var i = 1;

while(indice <= tamTabuada){
   document.write(tabuada + "X" + indice + " = " +(indice * tabuada) + "<br>");
   indice++
}
document.write("Fim da tabuada");
*/


/* 29/01/24 */


let um = 0
let dois = 0
let tres = 0
let quatro = 0
let cinco = 0
let vencedor = 0
let voto = parseInt(prompt("Digite seu voto: \n 1. Candidato Jair Rodrigues \n 2. Candidato Carlos Luz \n 3. Candidato Neves Rocha \n 4. Nulo \n 5. Branco"))

while(voto != 6){
    
    switch(voto){
        case 1:
        um++
        break
 
        case 2:
        dois++
        break
 
        case 3:
        tres++
        break
 
        case 4:
        quatro++
        break
 
        case 5:
        cinco++
        break
 
 
    }
 
    voto = parseInt(prompt("Digite seu voto: \n 1. Candidato Jair Rodrigues \n 2. Candidato Carlos Luz \n 3. Candidato Neves Rocha \n 4. Nulo \n 5. Branco"))
}
 
if(um > dois && um > tres){
   
    vencedor = "Jair Rodrigues"

}else if (dois > tres && dois > um){
    vencedor = "Carlos Luz"
}else if(tres >dois && tres > um){
    vencedor = "Neves Rocha"
}

let total = um + dois + tres + quatro + cinco
// transformando o total em porcentagem
let porcentagem = total/100
//let Pnulos1 = quatro;
let Pnulos = parseInt(porcentagem*quatro)*100
// Pbrancos1 = cinco
let Pbrancos = parseInt(porcentagem*cinco)*100
 
 
alert("O total de votos foram: \n Jair Rodrigues:"+um+"\n Carlos Luz:"+dois+"\n Neves Rocha:"+tres+"\n Votos Nulos:"+Pnulos+"\n Votos Brancos:"+Pbrancos+"\n Vencedor:"+vencedor)
 
 