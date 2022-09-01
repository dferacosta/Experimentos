"use strict"
/* GENERACION DE ARREGLOS CON "SPLIT", "FROM", Y "OF" */

/* SPLIT */
console.log("GENERACION DE ARREGLOS CON 'SPLIT'");
var mensaje = "ceviche, tacos, pasta";
var platillos = mensaje.split(",");

console.log(platillos);
console.log(" ");

/* FROM */
console.log("GENERACION DE ARREGLOS CON 'FROM'");
var plat1 = Array.from(document.querySelectorAll(".platillos p"));
var plat2 = plat1.map(platillo => platillo.textContent);
                                    
console.log(plat2);
console.log(" ");

/* OF */
console.log("GENERACION DE ARREGLOS CON 'OF'");
var plat3 = Array.of("Ceviche", "Tacos", "Pasta");

console.log(plat3);
console.log(" ");