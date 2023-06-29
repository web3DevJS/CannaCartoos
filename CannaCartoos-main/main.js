

// Defina a data de destino (7 de julho de 2023 às 00:00)
const targetDate = new Date('2023-07-07T00:00:00-03:00');

// Atualiza a contagem regressiva a cada segundo
setInterval(updateCountdown, 1000);

function updateCountdown() {
  // Obtém a data e hora atual
  const currentDate = new Date();

  // Calcula a diferença entre a data atual e a data de destino em milissegundos
  const diff = targetDate - currentDate;

  // Calcula o tempo restante em dias, horas, minutos e segundos
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Atualiza o elemento HTML com a contagem regressiva
  const countdownElement = document.getElementById('countdown');
  countdownElement.textContent = `${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
}

console.log('Hello World!');