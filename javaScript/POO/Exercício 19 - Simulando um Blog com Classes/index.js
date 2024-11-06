const Author = require("./Author");
const Comments = require("./Comments");
const Post = require("./Post");
const User = require("./User");


const Marcos = new Author("Marcos");
const post = new Post("Programação orientada a objetos","Ho coisa chata kkkk", Marcos);
const Thays = new User("Thays");
const comment = new Comments(Thays, "ta entendendo agora?");

post.comments.push(comment)
Marcos.posts.push(post)

