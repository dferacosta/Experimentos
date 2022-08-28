"use strict"

/* ESTRUCTURA SWITCH */

//EVALUACION CON NUMEROS

var edad = 30;
var resultado = "";

switch (edad) {
    case 10:
            resultado = ("La edad es 10 años");        
        break;

    case 20:
            resultado = ("La edad es 20 años");
        break;

    case 30:
            resultado = ("La edad es 30 años");
        break;

    case 40:
            resultado = ("La edad es 40 años");
        break;

    case 50:
            resultado = ("La edad es 50 años");
        break;

    default:
            resultado("Ningún caso coincide");
        break;
}
console.log("El resultado de la evaluación con números es: " + resultado);

/* EVALUACION CON CADENAS DE TEXTO */

var producto = "TV";

switch (producto) {
    case "TV":
            resultado = "Se eligió TV";        
        break;
    case "Radio":
            resultado = "Se eligió Radio";
        break;
    case "Teléfono":
            resultado = "Se eligió el teléfono";
        break;
    default:
            resultado = "No se eligió  ningún producto";
        break;
}

console.log("El resultado de la evaluación de texto es: " + resultado);

