class Estudiante {
    #nombre;
    #asignaturas;

    constructor(nombre, ...asignaturas){
        this.#nombre = nombre
        this.#asignaturas = asignaturas
    }

    getDatos() {
        return {
            nombre : this.#nombre,
            asignaturas : this.#asignaturas
        }
    }
}


const estudiante = new Estudiante("Alejo", "Javascript", "HTML", "CSS")

console.log(estudiante.getDatos())