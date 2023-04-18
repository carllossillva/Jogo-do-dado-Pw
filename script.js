const resultado1Element = document.getElementById('resultado1');
const botao1Element = document.getElementById('botao1');

const resultado3Element = document.getElementById('resultado3');
const botao3Element = document.getElementById('botao3');

const tabelaResultadoCorpoElement = document.getElementById('tabelaResultadoCorpo');

const botaoReiniciarElement = document.getElementById('botaoReiniciar');

const modalElement = document.getElementById('modal');
const modalResultadoElement = document.getElementById('modalResultado');



const closeElement = document.getElementsByClassName('close')[0];

const modalResultadoFinalElement = document.getElementsByClassName('modalResultadoFinal');
const modal2Element = document.getElementById('modal2');


let rodada = 1;
let resultado1 = 0;
let resultado3 = 0;
let jogador1Ativo = true;
let vitoriasJogador1 = 0; // Adicione variável para contar as vitórias do jogador 1
let vitoriasJogador2 = 0; // Adicione variável para contar as vitórias do jogador 2

botaoReiniciarElement.addEventListener('click', () => {
  // Limpar resultados na tabela de resultados
  tabelaResultadoCorpoElement.innerHTML = "";
  rodada = 1;
});

botao1Element.addEventListener('click', () => {
  if (jogador1Ativo) { // Verificar se é a vez do jogador 1
    resultado1 = Math.floor(Math.random() * 6) + 1;
    resultado1Element.innerText = resultado1;
    jogador1Ativo = false; // Passar a vez para o jogador 2
    botao3Element.removeAttribute('disabled'); // Habilitar botão3
  }
});

botao3Element.addEventListener('click', () => {
  if (!jogador1Ativo) { // Verificar se é a vez do jogador 2
    resultado3 = Math.floor(Math.random() * 6) + 1;
    resultado3Element.innerText = resultado3;
    jogador1Ativo = true; // Passar a vez para o jogador 1
    botao3Element.setAttribute('disabled', 'true'); // Desabilitar botão3
  }
});

botaoReiniciarElement.addEventListener('click', () => {
  resultado1 = null;
  resultado3 = null;
  resultado1Element.innerText = '';
  resultado3Element.innerText = '';
  jogador1Ativo = true; // Reiniciar o jogo com o jogador 1 ativo
  botao3Element.setAttribute('disabled', 'true'); // Desabilitar botão3
});

// Modal para vencedor da rodada !
botao3Element.addEventListener('click', () => {
  if (resultado1Element.innerText !== '' && resultado3Element.innerText !== '') {
    const ganhador = resultado1Element.innerText > resultado3Element.innerText ? 'Jogador 1' : resultado1Element.innerText < resultado3Element.innerText ? 'Jogador 2' : 'Empate';
    const resultadoText = `Ganhador da rodada: ${ganhador}`;
    modalResultadoElement.textContent = resultadoText;
    modalElement.style.display = 'block'; // Exibir o modal
    
    const row = document.createElement('tr');
    const rodadaCell = document.createElement('td');
    rodadaCell.textContent = rodada;
    row.appendChild(rodadaCell);
    const resultado1x2Cell = document.createElement('td');
    resultado1x2Cell.textContent = `${resultado1Element.innerText} x ${resultado3Element.innerText}`;
    row.appendChild(resultado1x2Cell);
    const ganhadorCell = document.createElement('td');
    ganhadorCell.textContent = ganhador;
    row.appendChild(ganhadorCell);
    tabelaResultadoCorpoElement.appendChild(row);
    rodada++;
  }
});


// Fechar o modal ao clicar no botão de fechar
closeElement.addEventListener('click', () => {
  modalElement.style.display = 'none'; // Ocultar o modal
});

// Fechar o modal ao clicar fora do modal
window.addEventListener('click', (event) => {
  if (event.target == modalElement) {
    modalElement.style.display = 'block'; // Ocultar o modal
  }
});


