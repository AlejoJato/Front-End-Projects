const boton = document.querySelector(".btn")

$(document).ready(() => {
    boton.addEventListener("click", () => {
        alert("Click en el boton")
    })

    $(".btn").click(() => {
        console.log("Hola, estoy utilizando jQuery")
    })
})