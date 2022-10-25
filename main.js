class Container {
    #id
    #save

    constructor( object ) {
        this.#id = object
        this.#save = [ this.#id ]
    }

    save( object ) {
        this.#save.push( object )
    }

    getById( object ) { 
        if ( object.id === null ) {
            return null
        } else {
            return this.#id 
        } 
    }

    getAll() {
        const object = [this.#save]
        return  object
    }

    deleteById( id ) {
        return this.#save.splice( id )
    }

    deteleAll() {
        let getId = this.#id;;
        return getId = [];
    }
}

const car = {
    id: 1,
    title: 'Peugeout 308 GTI 2012',
    price: 3000000,
    thumbnail: "https://i.pinimg.com/564x/cd/61/22/cd6122d08693a7a0cc12059078bf3081.jpg"
}

const products = new Container( car )

products.save()
console.log(products)

const trygetById = products.getById( car )
console.log( trygetById )

const trygetAll = products.getAll()
console.log( trygetAll )

const tryDeleteById = products.deleteById( 1 )
console.log( tryDeleteById )

const tryDeleteAll = products.deteleAll()
console.log( tryDeleteAll )