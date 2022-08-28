"use strict"

/*PARAMETRO SPEAD */

function cocinar(ingr1, ingr2, ingr3, ...otros){
    console.log("Ingrediente 1: " + ingr1);
    console.log("Ingrediente 2: " + ingr2);
    console.log("Ingrediente 3: " + ingr3);
    console.log("Otros ingredientes: " + otros)
}

var ingredientesbase = ["Pollo", "Tomate"]; //Spread

cocinar(...ingredientesbase, "Arroz", "Pescado", "Vegetales");