let nombre = "Alejo"

let apellido = "Jato"

let persona = {
    nombre,
    apellido
}

sessionStorage.setItem("persona", JSON.stringify(persona))

localStorage.setItem("persona", JSON.stringify(persona))

document.cookie = `persona=${persona};expires=` + new Date(2023, 2, 1, 22, 00, 00)