/*
1.	Elaborar um programa que apresente o valor da conversão em real (R$) de um valor lido em dólar (US$). O programa deve solicitar o valor da cotação do dólar.
*/
var qtdeDolares = parseFloat( prompt("Digite a quantidade de dólares") );
var cotacaoDolar = parseFloat( prompt("Digite a cotação do dólar") );

var valorEmReais = qtdeDolares * cotacaoDolar;

alert(`Valor em reais: ${valorEmReais}`);