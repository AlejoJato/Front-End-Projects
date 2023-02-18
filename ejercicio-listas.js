const compra = ["leche", "huevos", "mayonesa", "verduras", "queso"];

compra.push("aceite de girasol")

compra.pop("aceite de girasol")


const peliculas = [
    {titulo: "Titanic", director: "James Cameron", fecha: new Date("february 5 1998")},
    {titulo: "Contratiempo", director: "Paulo Oriol", fecha: new Date("august 10 2017")},
    {titulo: "El Origen", director: "Christopher Nolan", fecha: new Date("july 26 2010")},
]

const peliculasNuevas = peliculas.filter(value => value.fecha > new Date("january 1 2010"))

const directores = peliculas.map(value => value.director)

const titulos = peliculas.map(value => value.titulo)

const titulosDirector = directores.concat(titulos)

const titulosDirectorFactorPropagacion = [...directores, ...titulos]
