"use strict"

/* TEMPORIZADORE O TIMERS */

/* var temporizador = setInterval(function (){
    setColor();
}, 500); */

setTimeout(function (){
    setColor();    
}, 1000);

function setColor (){
    var pagina = document.body;
    pagina.style.backgroundColor = pagina.style.backgroundColor == "blue" ? "green" : "blue"
}

function stopChangeColor (){
    clearInterval(temporizador);
}