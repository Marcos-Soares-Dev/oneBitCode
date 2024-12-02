const arcaneProducts = [
    { nome: "Espada Flamejante", valor: 200, inStock: Math.floor(Math.random() * 11) },
    { nome: "Escudo de Dragão", valor: 150, inStock: Math.floor(Math.random() * 11) },
    { nome: "Cajado dos Relâmpagos", valor: 560, inStock: Math.floor(Math.random() * 11) },
  ];
  
  // Função assíncrona principal
  async function lojaDeItens(arrProdutos) {
    // Verifica se o argumento é um array
    if (!Array.isArray(arrProdutos)) {
      return Promise.reject("O argumento deve ser do tipo array");
    }
  
    try {
      // Busca os itens com atraso simulado
      const itensDisponiveis = await buscarItens(arrProdutos);
      console.log("Itens disponíveis:\n", itensDisponiveis);
    } catch (erro) {
      console.error("Erro:", erro);
    }
  }
  
  // Função que simula busca de itens com atraso
  function buscarItens(arrProdutos) {
    return new Promise((resolve) => {
      setTimeout(() => {
        let itensInformation = "";
        arrProdutos.forEach((item) => {
          itensInformation += `Nome: ${item.nome}\nValor: ${item.valor}\nEstoque: ${item.inStock}\n\n`;
        });
        resolve(itensInformation);
      }, 2000); // Simula atraso de 2 segundos
    });
  }
  
  // Executa a loja
  lojaDeItens(arcaneProducts);

  
  