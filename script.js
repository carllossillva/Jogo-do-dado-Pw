const resultado1Element = document.getElementById('resultado1');
const botao1Element = document.getElementById('botao1');
const resultado3Element = document.getElementById('resultado3');
const botao3Element = document.getElementById('botao3');

botao1Element.addEventListener('click', () => {
  const numero = Math.floor(Math.random() * 6) + 1;
  resultado1Element.innerText = numero;
});

botao3Element.addEventListener('click', () => {
  const numero = Math.floor(Math.random() * 6) + 1;
  resultado3Element.innerText = numero;
});
