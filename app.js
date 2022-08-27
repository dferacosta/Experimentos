"use strict"

/* OPERADORES LOGICOS */

var a = 10;
var b = 20;

/* OPERADOR "Y" O "AND": && */

var and = (a > 9 && b > 10);
console.log("El resultado de la evaluación 'AND' es: " + and);
//Mientras ambas condiciones se cumplan el resultado sera "True"

/* OPERADOR "O" U "OR" */

var or = (a > 10 || b > 10);
console.log("El resultado de la evaluación 'OR' es: " + or);
//Mientras una condición se cumpla el resultado sera "True"

/* OPERADOR DE "NEGACION" O "NOT" */

var not = !(a > 10);
console.log("El resultado de la evaluación 'NOT' es: " + not);
//Mientras la evaluación negada sea verdadera el resultado será "True"

