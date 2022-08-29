"use strict"

const boton = document.querySelector(".boton");

boton.addEventListener("click", () => {
    console.log(this)
    this.location = "https://www.google.com";
})