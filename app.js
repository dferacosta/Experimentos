"use strict"

/* BUSCANDO EN UN ARREGLO */

//var platillos = ["Ceviche", "Tacos", "Pasta"];

//var pElegido = platillos.find(platillo => platillo == "Tacos");

var menu = [
    {nombre: "Tacos", precio: 15, pais: "Mexico"},
    {nombre: "Nachos", precio: 10, pais: "Panamá"},
    {nombre: "Burritos", precio: 25, pais: "El Salvador"} 
];
//Arreglo de objetos

var item = menu.find(platillo => platillo.nombre == "Burritos");

console.log(item);