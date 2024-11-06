class Comments {
    constructor(userName, content) {
        this.userName = userName
        this.content = content
    }

    create(userName, content){
        this.userName = userName
        this.content = content
    }  
}

module.exports = Comments