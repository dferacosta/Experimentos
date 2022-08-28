"use strict"
/* CALLBACKS */

function calcular(datoA, datoB, datoCB1, datoCB2){
    var suma = datoA + datoB;
    var resta = datoA - datoB;

    datoCB1(suma);
    datoCB2(resta);    
}

calcular(
        2, 
        3,
        function (resultado){console.log("Suma", resultado)}, 
        //El valor de "resultado" proviene de datoCB1, en este caso es la "Suma".
        function (resultado){console.log("Resta", resultado)}
        //El valor de "resultado" proviene de datoCB2, en este caso es la "Resta".
        )
