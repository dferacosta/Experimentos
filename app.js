"use strict"

/* EVENTOS MULTIMEDIA */

const video = document.querySelector(".bostonVideo");

video.addEventListener("play", function(){
    console.log("El video ha iniciado."); 
})

video.addEventListener("", function(){
    console.log("Se está buscando el video.");
})

video.addEventListener("", function(){
    console.log("El video ha terminado");
})