const datos = {
    nombre : "Alejo",
    apellido : "Jato",
    edad : 22,
    altura : 1.69,
    isDev : true,
}

let miEdad = datos.edad

const lista = [datos, 
{nombre : "Lucas", apellido : "Lopez", edad : 28, altura : 1.80, isDev : true},
{nombre : "Pedro", apellido : "Riveros", edad : 21, altura : 1.75, isDev : false}
]

lista.sort(( a, b ) => b.edad - a.edad)
