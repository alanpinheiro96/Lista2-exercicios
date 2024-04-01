/*
4.	Faça um algoritmo que leia as 3 notas de um aluno e calcule a média final deste aluno. Considerar que a média é ponderada e que o peso das notas é: 2,3 e 5, respectivamente.
*/
var nota1 = parseFloat(prompt("Digite a primeira nota"));
var nota2 = parseFloat(prompt("Digite a segunda nota"));
var nota3 = parseFloat(prompt("Digite a terceira nota"));

const PESO1 = 2;
const PESO2 = 3;
const PESO3 = 5;

var mediaPonderada = ( (nota1  * PESO1) + (nota2 * PESO2) + (nota3 * PESO3) ) / PESO1 + PESO2 + PESO3 ;

alert(`Média ponderada: ${mediaPonderada}`);