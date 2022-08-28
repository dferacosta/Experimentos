"use strict"

/*PARAMETRO REST (...) */

function cocinar(ingr1, ingr2, ingr3, ...masingr){
    console.log("Ingrediente 1: " + ingr1);
    console.log("Ingrediente 2: " + ingr2);
    console.log("Ingrediente 3: " + ingr3);
    console.log("Otros ingredientes: " + masingr);
}

cocinar("Arroz", "Carne", "Vegetales", " Platanos", " Verduras", "  Frutas");