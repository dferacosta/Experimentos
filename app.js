"use strict"
/* FUNCION ANÓNIMA */

/*(
    function(){
        var mensaje = "Hola, de nuevo";
        console.log(mensaje);
    }
)()*/
//Me permite aislar una función

var saludar = function(nombre){
    var mensaje = "Hola, " + nombre;
    return mensaje;
}
//Función anónima.