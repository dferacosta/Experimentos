"use strict"
/* FUNCIONES ARROW | FAT ARROW |  LAMBDA FUNCTIONS */

//PRIMER EJEMPLO
var saludar = nombre => "Hola, " + nombre;
console.log(saludar("David."));

//SEGUNDO EJEMPLO
var sumar = cantidad => cantidad + 10;
console.log(sumar(10));

//TERCER EJEMPLO
var calcular = (datoA, datoB) => datoA + datoB
console.log(calcular(25,75));

//CUARTO EJEMPLO
var generar = (datoA, datoB) => {
    var datoC = 45;
    return (datoA + datoB + datoC);
}
console.log(generar((25*5),75));

//QUINTO EJEMPLO
var validar = () => {
    return "Validación correcta";
}
console.log(validar());