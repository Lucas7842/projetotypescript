const input = document.querySelector('input');

function totalMudou(){
  const value = Number(input.value);
  const p = document.querySelector('p');
  p.innerText = `ganho toatal: ${value + 100 - value * 0.2}`;
}

input.addEventListener('keyup', totalMudou);