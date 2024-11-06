class Author {
    constructor(name) {
        this.name = name
        this.posts = []
    }

    create(name){
        this.name = name        
    }
}

module.exports = Author