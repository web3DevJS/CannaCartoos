// Use a função fetch para fazer uma chamada HTTP GET à API
fetch('https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=brl')
  .then(response => response.json()) // Converte a resposta para JSON
  .then(data => {
    const maticPrice = data['matic-network'].brl; // Obtém o preço do Matic em USD
    const priceElement = document.getElementById('matic-brl'); // Obtém o elemento HTML pelo id
    priceElement.innerText = `Matic / BRL: R$${maticPrice}`; // Exibe o preço no elemento HTML
  })
  .catch(error => {
    console.error('Erro ao obter o preço do Matic:', error);
  });



fetch('https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=usd')
  .then(response => response.json()) // Converte a resposta para JSON
  .then(data => {
    const maticPrice = data['matic-network'].usd; // Obtém o preço do Matic em USD
    const priceElement = document.getElementById('matic-usd'); // Obtém o elemento HTML pelo id
    priceElement.innerText = `Matic / USD: $${maticPrice}`; // Exibe o preço no elemento HTML
  })
  .catch(error => {
    console.error('Erro ao obter o preço do Matic:', error);
  });
  
  
  
    // Use a função fetch para fazer uma chamada HTTP GET à API
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=brl')
      .then(response => response.json()) // Converte a resposta para JSON
      .then(data => {
        const maticPrice = data['matic-network'].brl; // Obtém o preço do Matic em BRL
        const priceElementBRL = document.getElementById('matic-brl'); // Obtém o elemento HTML pelo id
        priceElementBRL.innerText = `Matic / BRL: R$${maticPrice}`; // Exibe o preço no elemento HTML
  
  
  
        const resultado = maticPrice * 10; // Multiplica o valor atual do Matic por 10
        document.getElementById('resultado_1').textContent = `10 Matic/BRL = R$${resultado.toFixed(2)}`; // Exibe o resultado multiplicado
      })
      .catch(error => {
        console.error('Erro ao obter o preço do Matic:', error);
      });
      
      
  // Use a função fetch para fazer uma chamada HTTP GET à API
  fetch('https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=usd')
    .then(response => response.json()) // Converte a resposta para JSON
    .then(data => {
      const maticPrice = data['matic-network'].usd; // Obtém o preço do Matic em USD
      const priceElementBRL = document.getElementById('matic-usd'); // Obtém o elemento HTML pelo id
      priceElementBRL.innerText = `Matic / USD: R$${maticPrice}`; // Exibe o preço no elemento HTML



      const resultado = maticPrice * 10; // Multiplica o valor atual do Matic por 10
      document.getElementById('resultado_2').textContent = `10 Matic/USD = $${resultado.toFixed(2)}`; // Exibe o resultado multiplicado
    })
    .catch(error => {
      console.error('Erro ao obter o preço do Matic:', error);
    });