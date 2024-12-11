import { renderData } from "./renderData.js";


export async function getAipData() {
    const response = await fetch("http://localhost:3000/transactions")

    if (!response.ok) {
        throw new Error("Erro ao tentar se comunicar com a API");        
    }

    const data = await response.json()

    data.forEach(element => {
        renderData(element)
    });
}

