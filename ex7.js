/*
7.	Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.
*/
var totalEleitores = parseInt(prompt("Digite o total de eleitores"));
var votosBrancos = parseInt(prompt("Digite o total de votos brancos"));
var votosNulos = parseInt(prompt("Digite o total de votos nulos"));
var votosValidos =  parseInt(prompt("Digite o total de votos válidos"));

var percBrancos = votosBrancos / totalEleitores * 100; 
var percNulos = votosNulos / totalEleitores * 100;
var percValidos = votosValidos / totalEleitores * 100;

alert(`Percentual de votos brancos: ${percBrancos}`);
alert(`Percentual de votos nulos: ${percNulos}`);
alert(`Percentual de votos válidos: ${percValidos}`);