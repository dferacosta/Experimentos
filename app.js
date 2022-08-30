"use strict"

/* METODOS DE GENERACION, REEMPLAZO, Y SEPARACION */
//Estos métodos son sensibles a mayúsculas y minúsculas.

var mensaje = "Estoy aprendiendo Javascript";

var resultado;

//REPEAT
resultado = mensaje.repeat(1);
console.log(resultado);
console.log(" ");

//REPLACE
resultado = mensaje.replace("Javascript", "a programar");
console.log(resultado);
console.log(" ");

//SLICE
resultado = mensaje.slice(6);
console.log(resultado);
console.log(" ");

//SPLIT
resultado = mensaje.split(" ");
console.log(resultado);
console.log(" ");

/*
//TRIM
resultado = mensaje.trim();
//Elimina los espacios en blanco, antes y después, de una cadena de texto o string. 
console.log(resultado);
console.log(" "); */


