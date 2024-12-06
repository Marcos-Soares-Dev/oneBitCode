const formArticle = document.querySelector("#formArticle")
const articles = document.querySelector(".articles")

async function fectchData() {
    const response = await fetch("http://localhost:3000/articles")

    if (!response.ok) {
        throw new Error("Erro na requisição");        
    }

    const apiData = await response.json()

    apiData.forEach((data) => {
        renderArticles(data)
    })
}


function renderArticles(apiData) {
    const article = document.createElement("article")
    article.innerHTML = `
     <h3>${apiData.title}</h3>
    <p>${apiData.content}</p>
    <p class="author">${apiData.author}</p>
    `

    articles.appendChild(article)    
}

document.addEventListener("DOMContentLoaded", () => {
    fectchData()
})

formArticle.addEventListener("submit", async (ev) => {
    ev.preventDefault()

    const title = ev.target.title.value
    const content = ev.target.content.value
    const author = ev.target.author.value

    const response = await fetch("http://localhost:3000/articles", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title,
            content,
            author
        })
    })

    if (!response.ok) {
        throw new Error("Erro na requisição");
    }

    const apiData = await response.json()

    renderArticles(apiData)
    })