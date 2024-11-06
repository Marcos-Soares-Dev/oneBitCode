class Post {
    constructor(title, mainContent, author) {
        this.title = title
        this.mainContent = mainContent
        this.author = author
        this.comments = []
    }

    create(title, mainContent, author){
        this.title = title
        this.mainContent = mainContent
        this.author = author
    }
    
}

module.exports = Post