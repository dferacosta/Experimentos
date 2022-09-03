"use strict"

/* BUSQUEDA DE INDICE DE ELEMENTOS */

//var items = ["Burritos", "Tacos", "Pasta"]

var menu = 
[
    {nombre: "Burritos",
    precio: 20,
    pais: "El Salvador"},

    {nombre: "Tacos",
    precio: 15,
    pais: "Mexico"},

    {nombre: "Pasta",
    precio: 25,
    pais: "Italia"}
];

var iorder = menu.findIndex(item => item.nombre == "Burritos");

console.log("Platillo no.: " + iorder);