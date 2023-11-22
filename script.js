
/*let num1 = prompt("Digite um número:");

let num2 = prompt("Digite outro número:");

let op = prompt("Digite a operação matemática");

let soma;

if (op == "+"){
    soma = Number(num1) + Number(num2);
}else if (op == "-"){
    soma = Number(num1) - Number(num2);
}else if(op == "*"){
    soma= Number(num1) * Number(num2);
}else if(op == "/"){
    soma = Number(num1) / Number(num2);
}

alert ('O resultado a op é' +soma);

/* faça um algoritmo que receba 4 valores e ao final encontre a média*/


/*let n1 = prompt ("informe a primeira nota");
let n2 = prompt ("informe a segunda nota");
let n3 = prompt ("informe a terceira nota");
let n4 = prompt ("informe a quarta nota");
let media;

media = (Number (n1) + Number (n2) + Number (n3) + Number (n4))/4

alert('O resultado da média é:' +media);

/*A locadora de carros precisa da sua ajuda para cobrar seus serviços.Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado e a quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar, sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado.*/

/*let Km = prompt ("Digite a quantidade de kilometros percorridos");

let Dias = prompt ("Digite a quantidade de dias utilizando o produto");

let soma;

soma = (Number (Km)*0,20) + (Number (Dias)*90);

alert('O preço total é R$ ' +soma);

/* Faça um algoritmo que pergunte a distancia que um passageiro deseja percorrer em Km. Calcule o preço da passagem, cobrando R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais longas.*/ 

/*let dist = prompt ("Digite a distância percorrida");

let total;
if (dist <= 200){
    total = Number(dist)* 0.50;
}else{
    total = Number(dist)* 0.45;
}

alert("Total a pagar:"+ total)*/

/*Crie um programa que leia duas notas de um aluno e calcule a sua média, mostrando uma mensagem no final, de acordo com a média atingida: -média até 4,9: reprovado -média entre 5.0 e 6.9: recuperação -media 7 ou superior: aprovado */

let n1 = prompt("informe a primeira nota");
let n2 = prompt("informe a segunda nota");

let média;

média = (Number(n1) + Number(n2)/2)

if (média <= 4.9){
    alert("Reprovado");
}else if(média <=5 && média <=6.9){
    alert("Recuperação");
}else{
    alert("Aprovado");
}



