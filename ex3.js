/*
3.	Faça um algoritmo que leia o tempo de duração de um evento em uma fábrica expressa em horas e mostre-o expresso em minutos e segundos.
*/
var duracaoEventoHoras = parseInt(prompt("Digite a duração do evento"));

var duracaoEventoMinutos = duracaoEventoHoras * 60;
var duracaoEventoSegundos = duracaoEventoMinutos * 60;

alert(`Duração do evento em minutos ${duracaoEventoMinutos}`);
alert(`Duração do evento em segundos ${duracaoEventoSegundos}`);