function criarCoracoes(coluna) {
  for (let i = 0; i < 15; i++) {
    const coracao = document.createElement('span');
    coracao.textContent = '🤍';
    coracao.style.fontSize = `${28 + Math.random() * 12}px`;
    coracao.style.left = `${Math.random() * 100}%`;
    coracao.style.animationDelay = `${Math.random() * 8}s`;
    coracao.style.position = 'absolute';
    coracao.style.bottom = '0';
    coracao.classList.add('animar');
    coluna.appendChild(coracao);
  }
}

const esquerda = document.querySelector('.coluna-coracoes.esquerda');
const direita = document.querySelector('.coluna-coracoes.direita');

if (esquerda) criarCoracoes(esquerda);
if (direita) criarCoracoes(direita);

setTimeout(() => {
  document.querySelectorAll('.coluna-coracoes span').forEach(coracao => coracao.remove());
}, 30000);
