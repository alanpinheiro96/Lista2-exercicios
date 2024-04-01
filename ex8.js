/*
8.	A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva um programa que pergunte a quantidade de Km percorridos por um carro alugado e a quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar, sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado.
*/
var kmPercorridos = parseFloat(prompt("Digite os km percorridos"));
var diasAlugados = parseInt(prompt("Digite a qtde de dias alugados"));

var valorKmPercorrido = kmPercorridos * 0.2;
var valorDiasAlugados = diasAlugados * 90;

var valorTotal = valorKmPercorrido + valorDiasAlugados;

alert(`Valor total: ${valorTotal}`);