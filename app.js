"use strict"

/* EVENTOS DEL MOUSE */

const boton = document.querySelector(".boton");

boton.addEventListener("click", function(){
    console.log("El botón se ha pulsado");
})

boton.addEventListener("mouseover", function(){
    console.log("El mouse está sobre el botón");
})

boton.addEventListener("mouseout", function(){
    console.log("El mouse esta fuera del botón");    
})