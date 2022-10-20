class Persona {
    #nombre
    #colores

    constructor( nombre ) {
        this.#nombre = nombre
        this.#colores = []
    }

    getName() {
        return this.#nombre
    }

    getColors() {
        return this.#colores
    }

    addColor() {
        this.#colores.push( color )
    }
}

class Container {
    #id
    #save

    constructor( object ) {
        this.#id = object
        this.#save = []
    }

    getAll() {
        return this.#save
    }

    getById( number ) { 
        if ( number === null ) {
            return null 
        } else {
            return this.#id 
        } 
    }

    save( object ) {
        this.#save.push( object )
    }

    deleteById( number ) {

    }

    deteleAll() {

    }
}