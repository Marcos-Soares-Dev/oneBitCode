const inpCep = document.querySelector("#cep");
const buscarBtn = document.querySelector("#buscar");
const adressInfo = document.querySelector("#adressInfo");

// Validação do input
inpCep.addEventListener("input", (ev) => {
  const value = ev.target.value;
  ev.target.value = value.replace(/\D/g, "").slice(0, 8); // Mantém apenas números e limita a 8 dígitos
});

buscarBtn.addEventListener("click", async () => {
  const cep = inpCep.value;

  if (cep.length !== 8) {
    adressInfo.textContent = "Por favor, insira um CEP válido com 8 dígitos.";
    return;
  }

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    
    if (!response.ok) {
      throw new Error("Erro ao buscar o CEP.");
    }

    const data = await response.json();

    if (data.erro) {
      adressInfo.textContent = "CEP não encontrado. Verifique e tente novamente.";
    } else {
      adressInfo.textContent = `Endereço: ${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
    }
  } catch (error) {
    adressInfo.textContent = `Erro ao buscar o CEP: ${error.message}`;
  }
});
