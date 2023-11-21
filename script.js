let num1 = prompt("Digite um número:");

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

