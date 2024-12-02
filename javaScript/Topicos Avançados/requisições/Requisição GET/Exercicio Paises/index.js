function createCards(countryInfo) {
    const countrySpace = document.querySelector("#countries")
    const countryCard = document.createElement('div')

    countryCard.classList.add("country")
    countryCard.innerHTML = `
    <h2>${countryInfo.name.common}</h2>
    <img src="${countryInfo.flags.svg}" alt="${countryInfo.name.common}">
    `

    countrySpace.append(countryCard)
}


async function catchData() {
    const response = await fetch('https://restcountries.com/v3.1/all')
    const apiData = await response.json()
    
   
    apiData.forEach(createCards);
}


catchData()