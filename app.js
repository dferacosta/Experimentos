"use strict"

/* METODOS DE BUSQUEDA | PART 3*/
//Estos métodos son sensibles a mayúsculas y minúsculas.

var mensaje = "Estoy aprendiendo Javascript";

var resultado = "";


//startsWith
var textsearch = mensaje.indexOf("Javascript");
resultado = mensaje.startsWith("Ja", textsearch);
console.log(resultado);

//endsWith
resultado = mensaje.endsWith("Javascript");
console.log(resultado);

//includes
resultado = mensaje.includes("Estoy", 0);
//La variable, luego del texto a buscar, determina el punto de partida del operador "includes".
console.log(resultado);