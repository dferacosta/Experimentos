"use strict"

/* OPERACIONES CON CONCATENACION */

var a = 10;
var b = 20;

var nombre = "David";
var apellidos = "Ferreira Acosta";

/* CONCATENACION DE NUMEROS */

var concnum = a + b
console.log("La suma de " + a + " y " + b + " es igual a: " + concnum);

/* CONCATENACION DE CADENAS DE TEXTO */

var conctext = (nombre + " " + apellidos);
console.log("El Full Stack Developer del año es: " + conctext);

/* CONCATENACION DE NUMEROS COMO TEXTO */

var cnumtxt = "19"+"96";
console.log("El año de naciento de " + nombre + " " + apellidos + " es " + cnumtxt);


/* CONCATENACION DE TEXTO Y NUMERO */

var ctextnumb = a + "b";
console.log("La union de un valor numérico y texto se visualiza de la siguinte manera: " + ctextnumb);


