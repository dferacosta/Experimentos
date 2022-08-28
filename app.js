"use strict"

/*PARAMETROS DE UNA FUNCION*/

function saludar(nombre, edad){
    console.log("Soy " + nombre);
    console.log("Tengo " + edad + " de edad.");
    var resultado = nombre + " tiene " + edad + " años.";
    return resultado;
}

var mensaje = saludar("David", 26);

console.log(mensaje);
