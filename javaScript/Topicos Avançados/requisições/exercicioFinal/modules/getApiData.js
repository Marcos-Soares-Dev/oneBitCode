import { renderData } from "./renderData.js";


export async function getAipData(url) {
    const response = await fetch(url)

    if (!response.ok) {
        throw new Error("Erro ao tentar se comunicar com a API");        
    }

    const data = await response.json()

    data.forEach(element => {
        renderData(element)
    });
}