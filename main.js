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

    save( object ) {
        this.#save.push( object )
    }

    getById( id ) { 
        if ( id === null ) {
            return null 
        } else {
            return this.#id 
        } 
    }

    getAll() {
        return this.#save
    }

    deleteById( id ) {
        return this.#save.splice( id )
    }

    deteleAll( id ) {
        return this.#save.splice( 0 , id.lenght)
    }
}