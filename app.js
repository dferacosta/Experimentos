"use strict"

/* PROPIEDADES NUMERICAS DE INSTANCIAS */

//Se coloca primero la variable y se une a la función midiante un punto (.)

var number = 2.5;

console.log("toExponential: ", number.toExponential(4));

console.log("toFixed", number.toFixed(2));
/*Esta colocará la cantidad de decimales que el desarrollador elija, en este ejemplo hemos colocado dos (2) decimales
para la cantidad: 2.5*/

console.log("toPrecision", number.toPrecision(2));
/*Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
@param precision — Number of significant digits. Must be in the range 1 - 21, inclusive.*/

console.log("toString: ", typeof number.toString())
//"typeof" se usa para mostrar en consola el tipo de dato que se está mostrando.
