const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")
const papelera = document.querySelector(".papelera")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", evento => {
        parrafo.classList.add("dragging") //Agrega una clase cuando inicio el drag
        evento.dataTransfer.setData("id", parrafo.id) // Guarda como informacion el id de cada parrafo
        const elemento_fantasma = document.querySelector(".elemento-fantasma")
        evento.dataTransfer.setDragImage(elemento_fantasma, 0, 0) //Cambiar la imagen fantasma que aparece cuando arrastro, La imagen tiene que estar definida en el HTML
    })

    parrafo.addEventListener("dragend", () => {
        parrafo.classList.remove("dragging") //elimina esa clase cuando termino el drag
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", evento => { //drag over se ejecuta constantemente por defecto
        evento.preventDefault()  // Por eso hay que controlar el comportamiento por default

        evento.dataTransfer.dropEffect = "move" // Cambia la flecha de arrastre , "copy" por defecto
        
    })

    seccion.addEventListener("drop", evento => {
        console.log("Drop") //Drop -> soltar elemento en seccion
        const id_parrafo = evento.dataTransfer.getData("id") //Guarda en una variable el id de cada parrafo

        const parrafo = document.getElementById(id_parrafo) //Obtiene ese parrafo mediante su id

        seccion.appendChild(parrafo) //La seccion incluye el parrafo draggeado como hijo
        
        console.log(`Soltase el parrafo: ${parrafo.innerText} en la seccion ${seccion.className}`)

    })
})

papelera.addEventListener("dragover", evento => {
    evento.preventDefault()
})

papelera.addEventListener("drop", evento => {

    const id_parrafo = evento.dataTransfer.getData("id")
    document.getElementById(id_parrafo).remove()
    console.log("Eliminaste el elemento con id: " + id_parrafo)
})