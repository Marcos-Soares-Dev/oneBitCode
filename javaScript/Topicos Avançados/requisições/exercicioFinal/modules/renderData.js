export function renderData(apiData) {
    const newTransaction = document.createElement("div")
    newTransaction.innerHTML = `
    <h4>Id da Transação: ${apiData.id}</h4>
    <p>Valor da Transação ${apiData.value}</p>
    <button type="button" id="PUTbtn-id-${apiData.id}">Alterer Transação</button>
    <button type="button" id="DELETEbtn-id-${apiData.id}">Remover Transação</button>
    `
  

    document.querySelector("#historicTransactions").append(newTransaction)
}