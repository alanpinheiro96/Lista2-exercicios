/*
5.	O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo que leia o custo de fábrica de um carro e escreva o custo ao consumidor.
*/
var custoFabrica = parseFloat(prompt("Digite o custo de fábrica"));

var valorImposto = custoFabrica * (45/100);
var percDistribuidor = custoFabrica * (28/100);

var valorFinal = custoFabrica + valorImposto + percDistribuidor;

alert(`Valor final: ${valorFinal}`);