"use strict"

/* FILTRAR ARREGLOS */

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

var resultado = null;

resultado = menu.filter(platillo => platillo.pais == "El Salvador");

console.log(resultado);