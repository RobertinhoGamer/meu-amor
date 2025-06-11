// Defina aqui a data do início do namoro (ano, mês-1, dia)
const dataNamoro = new Date(2024, 9, 20); // Exemplo: 1º de Janeiro de 2023

function atualizarContador() {
  const agora = new Date();
  const diffMs = agora - dataNamoro;

  const diffData = new Date(diffMs);

  // Total de dias
  const totalDias = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  
  // Total de meses (aproximado)
  const anos = agora.getFullYear() - dataNamoro.getFullYear();
  const meses = anos * 12 + (agora.getMonth() - dataNamoro.getMonth());

  // Horas, minutos e segundos
  const horas = diffData.getUTCHours();
  const minutos = diffData.getUTCMinutes();
  const segundos = diffData.getUTCSeconds();

  // Atualizar no HTML
  document.getElementById('meses').textContent = meses;
  document.getElementById('dias').textContent = totalDias % 30;
  document.getElementById('horas').textContent = horas;
  document.getElementById('minutos').textContent = minutos;
  document.getElementById('segundos').textContent = segundos;
}

// Atualiza a cada segundo
setInterval(atualizarContador, 1000);
atualizarContador(); // chama uma vez no início
