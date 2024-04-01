/*
2. Crie um programa que lê o ano de nascimento de uma pessoa e o ano atual. Calcule e mostre qual é: a idade da pessoa em anos, a idade da pessoa em meses, a idade da pessoa em dias e a idade da pessoa em semanas.
*/
var anoNascimento = parseInt(prompt(`Digite o ano de nascimento`));
var anoAtual = parseInt(prompt(`Digite o ano atual`));

var idadeEmAnos = anoAtual - anoNascimento;
var idadeEmMeses = idadeEmAnos * 12;
var idadeEmSemanas = idadeEmAnos * 52;
var idadeEmDias = idadeEmAnos * 365;

alert(`Idade em anos: ${idadeEmAnos}`);
alert(`Idade em meses: ${idadeEmMeses}`);
alert(`Idade em Semanas: ${idadeEmSemanas}`);
alert(`Idade em dias: ${idadeEmDias}`);
