import "../styles/style.css"

const arr = [1,2,3,4,5]

const arrCopy = [...arr]
arrCopy.push("item que nao tem no array original")
console.log({arr, arrCopy});