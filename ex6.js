/*
6.	Crie um programa que leia o número de dias trabalhados em um mês e mostre o salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25 por hora trabalhada.
*/
var diasTrabalhados = parseInt(prompt("Digite a quantidade de dias trabalhados no mês"));

const HORAS_DIA = 8;
const VALOR_HORA = 25;

var salario = diasTrabalhados * HORAS_DIA * VALOR_HORA;

alert(`Salário: ${salario}`);