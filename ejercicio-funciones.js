function Verdadero(){
    return true
}

//////////////////

async function Promesa() {
    return setTimeout(() => console.log("Hola soy una promesa"), 5000)
}

///////////////////

function* idPares() {
    let id = 0
    while(true){
        id += 2
        if (id === 0){
            return id
        }
        yield id
    }
}

const pares = idPares()
