"use strict"

/* METODOS DE BUSQUEDA | PART 1*/

var mensaje = "Estoy aprendiendo JavaScript y estoy aprendiendo mucho";

var resultado = "";

console.log("🔸" + "Palabra buscada: 'Aprendiendo" + " , oración: " + mensaje);
console.log(" ");

//indexOf
console.log("indexOf")
resultado = "La palabra buscada ocupa el puesto no. " + mensaje.indexOf("aprendiendo");
console.log(resultado);
console.log(" ");

//lastIndexOf
console.log("lastIndexOf")
resultado = "La palabra buscada ocupa el puesto no. " + mensaje.lastIndexOf('aprendiendo');
console.log(resultado);
console.log(" ");

//search:
console.log("search");
resultado = "La palabra buscada ocupa el puesto no. " + mensaje.search('aprendiendo');
console.log(resultado);
console.log(" ");


//search | Exresion regular
console.log("search: 'i'");
resultado = "La palabra buscada ocupa el puesto no. " + mensaje.search(/ja/i);
//i: "In case Sensitive". Cuando el resultado es igual a -1 quiere decir que no enctró una coincidencia.    
console.log(resultado);
console.log(" ");
 

