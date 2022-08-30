"use strict"

/* METODOS DE BUSQUEDA | PART 2*/

var mensaje = "Estoy aprendiendo JavaScript y estoy aprendiendo mucho";

var resultado = "";

console.log("🔸" + "Palabra buscada: 'Aprendiendo" + " , oración: " + mensaje);
console.log(" ");

//match
console.log("match")
resultado = "El resultado del uso de match es: " + mensaje.match(/aprendiendo/gi);
//Al agregar una "g", luego de la segunda diagonal (/), este mostrará todas las coincidencias dentro del texto. 
//Al agregarle el operador "i", no distinguira entre mayúsculas y minúsculas. 
console.log(resultado);
console.log(" ");

//substr
console.log("substr")
resultado = "El resultado del uso de substr es: " + mensaje.substr(6,11);
//Busca la posición de la palabra y extrae la cantidad de caracteres indicado por el desarrllador
console.log(resultado);
console.log(" ");

//substring
console.log("substring");
resultado = "El resultado del uso de substr es: " + mensaje.substring(6,17);
console.log(resultado);
console.log(" ");


//charAt
console.log("charAt");
resultado = "El resultado del uso de substr es: " + mensaje.charAt(3);  
//Cuenta desd el numero cero (0), siendo la primera letra la que ocupe tal posición dentro de una cadena de texto o "string".
console.log(resultado);
console.log(" ");


